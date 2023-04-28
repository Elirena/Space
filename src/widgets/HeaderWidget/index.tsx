import React from 'react';
import { Routes } from '../../components';
import { StyledTitle, StyledWrapper } from './styled';

export const HeaderWidget = () => {
    return (
        <StyledWrapper>
            <StyledTitle>SpaceX Missions</StyledTitle>
            <Routes />
        </StyledWrapper>
    );
};