import React from 'react';
import { StyledWrapper, StyledTitle, StyledDetails, StyledText, StyledPress } from './styled';
import { StarButton } from '../../components';

export const CardItem = () => {
    return (
        <StyledWrapper>
            <StyledTitle>
               <span>Crew Dragon In Flight Abort Test</span>
                <StarButton />
            </StyledTitle>
            <div>
                <span>25 March 2006</span>
                <span>Falcon 9</span>
            </div>
            <StyledDetails>
                Details
            </StyledDetails>
            <StyledText>
                SpaceX will launch a Crew Dragon capsule from LC-39A, KSC on a fully fueled Falcon 9 rocket and then trigger the launch escape system during the period of maximum dynamic pressure. As part of NASA'a Commercial Crew Integrated Capability program (CCiCap) this test will contribute valuable data to help validate Crew Dragon and its launch abort system. The Crew Dragon will be recovered by GO Searcher after splashdown in...
            </StyledText>
            <StyledPress>
                Press kit
            </StyledPress>
        </StyledWrapper>
    );
};