import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { Login } from './Login';
import { theme } from './theme';
import { queryClient } from './queryClient';
import { LanguageProvider } from './LanguageContext';
import { FavouritesProvider } from './FavouritesContext';
import { LastViewedProvider } from './LastViewedContext';
import { UserProvider } from './UserContext';

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <FavouritesProvider>
              <LastViewedProvider>
                <LanguageProvider>
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
                </LanguageProvider>
              </LastViewedProvider>
            </FavouritesProvider>
          </UserProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
