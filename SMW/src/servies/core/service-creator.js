import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { STATUS_CODE } from "../../constant/enums";
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

const memorize = {};

export function createUseQuery(service) {
  return function inferQuery(inferredBase) {
    return function useQueryBase() {
      const queryKeyString = `${String(inferredBase.entity)}_${String(inferredBase.action)}`;

      if (memorize[queryKeyString]) {
        return memorize[queryKeyString];
      }

      function useQueryBase(request, options) {
        const queryKey = queryKeyString;
        const querySource = { request };

        const query = useQuery({
          queryKey: [queryKey, querySource],
          queryFn: async (context) => {
            try {
              return await service[inferredBase.entity]["query"][
                inferredBase.action
              ](request);
            } catch (e) {
              console.error(
                `[UseQuery ${JSON.stringify(context.queryKey)}]`,
                e
              );
              throw e;
            }
          },
          enabled: options.enabled !== undefined ? options.enabled : true,
          gcTime:
            options.timeUntilGc !== undefined
              ? options.timeUntilGc
              : UseQueryOptions.GC_TIME,
          staleTime:
            options.markDataAsStaleAfter !== undefined
              ? options.markDataAsStaleAfter
              : UseQueryOptions.TIME_UNTIL_MARK_AS_STALE,
          select: options.selector,
          retry:
            options.retry !== undefined
              ? options.retry
              : UseQueryOptions.RETRY_TIMES,
          notifyOnChangeProps: options.rerenderOnChangeProps,
          placeholderData: undefined,
          refetchOnWindowFocus: false,
          throwOnError: (error) => {
            if (error instanceof AxiosError) {
              if (error?.response) {
                return error?.response?.status >= STATUS_CODE.INTERNAL_ERROR;
              }
            }
            return false;
          },
        });
        const { isLoading, isFetching } = query;

        return {
          ...query,
          queryKey: [queryKey, querySource],
          isQueryLoading: isLoading || isFetching,
        };
      }

      memorize[queryKeyString] = useQueryBase;

      return memorize[queryKeyString];
    };
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
