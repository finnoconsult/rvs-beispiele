import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { Favourites } from './Favourites';
import { Login } from './Login';
import { theme } from './theme';
import { queryClient } from './queryClient';
import { LanguageProvider } from './LanguageContext';
import { FavouritesProvider } from './FavouritesContext';
import { LastSeenProvider } from './LastSeenContext';
import { UserProvider } from './UserContext';

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <LanguageProvider>
            <FavouritesProvider>
              <LastSeenProvider>
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
                      <Route path="/favourites" element={<Favourites />} />
                      <Route path="/login" element={<Login />} />
                    </Routes>
                  </Container>
                  <ReactQueryDevtools />
                </ThemeProvider>
              </LastSeenProvider>
            </FavouritesProvider>
          </LanguageProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
