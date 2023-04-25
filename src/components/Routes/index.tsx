import React from 'react';
import Link from 'next/link';
import { StyledWrapper, StyledRoute } from './styled';

const count = 1;

export const Routes = () => {
    return (
        <StyledWrapper>
            <StyledRoute isActive={true}>
                <Link href='/'>Show all</Link>
            </StyledRoute>

            <StyledRoute isActive={false}>
                <Link href='/bookmarks'>Bookmarks</Link>
                <span> {count}</span>
            </StyledRoute>

        </StyledWrapper>
    );
};