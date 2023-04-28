import React, { FC } from 'react';
import { CardItem, CardI } from '../CardItem';

interface Props {
    cards: CardI[]
}

export const CardsList: FC<Props> = ({ cards }) => {
    return (
        <div>
            {cards.map((card) =>
                <CardItem
                    card={card}
                    key={card.id}/>
            )}
        </div>
    );
};