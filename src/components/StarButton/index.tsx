import React, { FC, useMemo } from 'react';
import { useQuery } from '@apollo/client'
import { GET_BOOKMARKS, toggleBookmark } from '../../apollo/bookmarks';
import { CardI } from '../CardItem';
import { StyledWrapper } from './styled';
import { StarFull } from './starIcon';

interface Props {
    card: CardI
}

export const StarButton: FC<Props> = ({ card }) => {
    const { data: bookmarksData } = useQuery(GET_BOOKMARKS);

    const changeCardsList = (card: CardI) => {
        toggleBookmark(card);
    };

    const isActive = useMemo(() =>
        !!bookmarksData.bookmarks.find((el: CardI) => el.id === card.id
    ), [bookmarksData.bookmarks, card]);

    return (
        <StyledWrapper
           isActive={isActive}
            onClick={() => changeCardsList(card)}
        >
            <StarFull/>
        </StyledWrapper>
    );
};