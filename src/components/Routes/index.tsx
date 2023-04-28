import React, { useMemo } from 'react';
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_BOOKMARKS } from '../../apollo/bookmarks';
import { StyledWrapper, StyledRoute, StyledCount } from './styled';

export const Routes = () => {
    const router = useRouter()
    const { data: bookmarksData } = useQuery(GET_BOOKMARKS);

    const count = useMemo(() => (
        bookmarksData.bookmarks.length || 0
    ), [bookmarksData])

    return (
        <StyledWrapper>
            <StyledRoute
                isActive={router.pathname === '/'}
            >
                <Link href='/'>Show all</Link>
            </StyledRoute>

            <StyledRoute
                isActive={router.pathname === '/bookmarks'}
            >
                <Link href='/bookmarks'>Bookmarks</Link>
                    <StyledCount>{count}</StyledCount>
            </StyledRoute>
        </StyledWrapper>
    );
};