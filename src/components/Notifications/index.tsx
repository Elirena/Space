import React, { FC } from 'react';
import { StyledNotification } from './styled';

interface Props {
    message: string;
}

export const Notifications: FC<Props> = ({ message }) => {
    return (
        <StyledNotification>
            {message}
        </StyledNotification>
    );
};




