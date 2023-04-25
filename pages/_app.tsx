import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Global, mainTheme } from '../src/styled';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HeaderWidget } from '../src/widgets';

const client = new ApolloClient({
    // url: 'http://localhost:3000',
    cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ApolloProvider client={client}>
                <Global />
                <ThemeProvider theme={mainTheme}>
                    <HeaderWidget />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    )
}