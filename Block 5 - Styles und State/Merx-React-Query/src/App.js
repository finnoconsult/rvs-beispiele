import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { Login } from './Login';
import { theme } from './theme';
import { store, persistor } from './store/store';

const loadFromServer = ({ queryKey }) => fetch(`http://localhost:3001/${queryKey[0]}`).then((res) => res.json());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: loadFromServer,
    },
  },
});

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <Header />
              <Container as="main" maxWidth="lg">
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/products/:id" element={<Product />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Container>
            </ThemeProvider>
          </PersistGate>
        </ReduxProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
