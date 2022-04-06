import { QueryClient } from 'react-query';

const loadFromServer = ({ queryKey }) => fetch(`http://localhost:3001/${queryKey[0]}`).then((res) => res.json());

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: loadFromServer,
    },
  },
});
