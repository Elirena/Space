import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, NormalizedCacheObject  } from '@apollo/client';
import { bookmarksVar } from './bookmarks';

const URI = 'https://spacex-production.up.railway.app/';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                launches: {
                    keyArgs: false,
                    merge(existing = [], incoming, {args}) {
                        return [...existing, ...incoming];
                    },
                },
                bookmarks: {
                    read () {
                        return bookmarksVar();
                    },
                },
            },

        }
    }
});

export const useInitClient = () => {
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

    useEffect(() => {
        async function init() {
            setClient(
                new ApolloClient({
                    uri: URI,
                    cache,
                }),
            );
        }

        init().catch(console.error);
    }, []);

    return {
        client
    }
}