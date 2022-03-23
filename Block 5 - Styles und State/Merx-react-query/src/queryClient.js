import { QueryClient } from 'react-query';

function fetchFromServer(queryOptions) {
  const path = queryOptions.queryKey.join('/');
  return fetch(`http://localhost:3001/${path}`)
    .then((response) => response.json())
    .then((json) => json.data);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetchFromServer,
    },
  },
});
