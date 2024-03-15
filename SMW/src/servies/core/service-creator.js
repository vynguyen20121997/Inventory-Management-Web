import {
  useMutation as rqUseMutation,
  useQuery as rqUseQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { STATUS_CODE } from "../../constant/enums";

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

        const query = rqUseQuery({
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
  return function inferMutation(inferredBase) {
    return function useMutationBase(options) {
      const queryClient = useQueryClient();

      const mutation = rqUseMutation({
        ...options,
        throwOnError: (error) => {
          if (error instanceof AxiosError) {
            if (error?.response) {
              return error?.response?.status >= STATUS_CODE.INTERNAL_ERROR;
            }
          }

          return false;
        },
        mutationFn: async (variables) => {
          const result =
            await service[inferredBase.entity]["mutation"][inferredBase.action](
              variables
            );

          return result;
        },
        onMutate: options?.onBeforeMutate,
        onSuccess: async (data, variables, context) => {
          if (options?.invalidateKey) {
            await queryClient.invalidateQueries({
              queryKey: options?.invalidateKey,
            });
          }
          await options?.onSuccess?.(data, variables, context);
        },
        onError: (error, variables, context) => {
          options?.onError?.(error, variables, context);
        },
      });
      const { isPending } = mutation;

      return {
        ...mutation,
        isMutationExecuting: isPending,
      };
    };
  };
}
