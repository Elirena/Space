import React, { useCallback } from 'react';
import { Button, CardsList, Notifications } from '../../components';
import { useQuery } from '@apollo/client';
import { GetLaunches } from "./GetCardsQuery";
import { StyledWrapper } from './styled';

export const CardsWidget = () => {
    const {
        data: cardsData,
        loading,
        error,
        fetchMore
    } = useQuery(
        GetLaunches, {
            variables: { limit: 2, offset: 0 },
            notifyOnNetworkStatusChange: true,
        },
    );

    const loadMoreHandler = useCallback(() => {
        if (loading) return;

        if (cardsData?.launches.length) {
            const offset = cardsData.launches.length;
            const limit = offset + 10;

            fetchMore({
                variables: { limit, offset }}
            );
        }},[cardsData?.launches.length]);

    if (loading && !cardsData)
        return <Notifications message={'Loading...'} />;
    if (error)
        return <Notifications message={`Error! ${error.message}`} />;

    return (
        <StyledWrapper>
            {cardsData.launches.length &&
                <CardsList
                    cards={cardsData.launches}
                />
            }
            <Button
                onClick={loadMoreHandler}
                isLoading={loading}
            />
        </StyledWrapper>
    );
};