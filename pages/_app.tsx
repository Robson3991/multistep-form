import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from 'store/instance';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
