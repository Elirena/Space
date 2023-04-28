import type { AppProps } from 'next/app'
import { HeaderWidget } from '../src/widgets';
import { useInitClient } from '../src/apollo';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components'
import { Global, mainTheme } from '../src/styled';

export default function App({ Component, pageProps }: AppProps) {
    const { client } = useInitClient();

    if (!client) {
        return <h2>Initializing app...</h2>;
    }

    return (
            <ApolloProvider client={client}>
                <ThemeProvider theme={mainTheme}>
                    <Global />
                   <HeaderWidget />
                   <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
    )
}