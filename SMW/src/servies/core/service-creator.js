import { useMutation, useQuery } from "@tanstack/react-query";
import errorHandling from "../../packages/error/ErrorHandling";

export const UseQueryOptions = {
  RETRY_TIMES: 0,
  GC_TIME: 5 * 60 * 1000, // 5 minutes until garbage collection
  TIME_UNTIL_MARK_AS_STALE: 0,
};

export function defineService(service) {
  return {
    query: service.query ?? {},
    mutation: service.mutation ?? {},
  };
}

export function composeServices(serviceMap) {
  return serviceMap;
}

export function createUseQuery(service) {
  return function InferQuery(inferredBase, params) {
    const queryKeyString = `${String(inferredBase.entity)}_${String(inferredBase.action)}`;
    function useQueryBase() {
      const queryKey = queryKeyString;
      const query = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
          try {
            return await service[inferredBase.entity]["query"][
              inferredBase.action
            ](params);
          } catch (e) {
            errorHandling(e.response.data.message);
          }
        },
        enabled: true,
      });
      return {
        query,
      };
    }
    return useQueryBase;
  };
}

export function createUseMutation(service) {
  return function InferMutation(inferredBase, options) {
    const mutation = useMutation({
      mutationFn: async (variables) => {
        const result =
          await service[inferredBase.entity]["mutation"][inferredBase.action](
            variables
          );
        return result;
      },
      onError: (error) => {
        // An error happened!
        options.onError(error);
      },
      onSuccess: (data) => {
        // Boom baby!
        options.onSuccess(data);
      },
    });
    return {
      mutation,
    };
  };
}
