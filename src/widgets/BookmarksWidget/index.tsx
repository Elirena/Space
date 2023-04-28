import React from 'react';
import { CardsList, Notifications } from '../../components';
import { useQuery } from '@apollo/client';
import { GET_BOOKMARKS } from '../../apollo/bookmarks';
import { StyledWrapper } from './styled';

export const BookmarksWidget = () => {
    const {
        data: bookmarksData,
        error
    } = useQuery(GET_BOOKMARKS);

    if (error)
        return <Notifications message={`Error! ${error.message}`} />;

    if (!bookmarksData.bookmarks.length)
        return <Notifications message={'No added missions'}/>

    return (
        <StyledWrapper>
             <CardsList
                 cards={bookmarksData.bookmarks}
             />
        </StyledWrapper>

    );
};