export function useApi<T>(
  url: any,
  options: any,
) {

  const { $customFetch } = useNuxtApp()

  return $customFetch(url, {
    ...options,
  })

  // return useAsyncData(
  //   url,
  //   () => $customFetch(url, {
  //     ...options,
  //     Headers,
  //   }),
  // );
}