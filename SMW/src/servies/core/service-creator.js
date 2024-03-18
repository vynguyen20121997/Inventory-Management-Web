import { useQuery } from "@tanstack/react-query";

import { useMutation } from "react-query";

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
  return function InferQuery(inferredBase) {
    const queryKeyString = `${String(inferredBase.entity)}_${String(inferredBase.action)}`;
    function useQueryBase() {
      const queryKey = queryKeyString;
      const query = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
          try {
            return await service[inferredBase.entity]["query"][
              inferredBase.action
            ]();
          } catch (e) {
            console.error(e);
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
        options.onError(error.data);
      },
      onSuccess: (data) => {
        // Boom baby!
        options.onSuccess(data.data);
      },
    });
    return {
      mutation,
    };
  };
}
