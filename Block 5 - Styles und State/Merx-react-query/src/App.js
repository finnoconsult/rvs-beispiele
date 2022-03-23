import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { Favourites } from './Favourites';
import { Login } from './Login';
import { theme } from './theme';
import { store, persistor } from './store/store';
import { queryClient } from './queryClient';
import { LanguageProvider } from './LanguageContext';
import { FavouritesProvider } from './FavouritesContext';
import { LastSeenProvider } from './LastSeenContext.js';

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <LanguageProvider>
            <FavouritesProvider>
              <LastSeenProvider>
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
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/login" element={<Login />} />
                      </Routes>
                    </Container>
                    <ReactQueryDevtools />
                  </ThemeProvider>
                </PersistGate>
              </LastSeenProvider>
            </FavouritesProvider>
          </LanguageProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
