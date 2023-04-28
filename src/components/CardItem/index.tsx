import React, { FC, useMemo } from 'react';
import { StyledWrapper, StyledTitle, StyledDate, StyledDetails, StyledText, StyledPress } from './styled';
import { StarButton } from '../StarButton';

export interface CardI {
    id: string;
    missionName: string;
    launchDate: string;
    details: string;
    rocket: {
        rocketName: string;
    }
    links: {
        pressKit?: string;
    }
}

export const CardItem: FC<{ card:CardI }> = ({ card}) => {
    const {
        missionName,
        launchDate,
        details,
        links,
        rocket: { rocketName }
    } = card;

   const date = useMemo(() => {
       const D = new Date(1000 * Number(launchDate));
       return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long'}).format(D);
   }, [launchDate])

    return (
        <StyledWrapper>
            <StyledTitle>
               <span>{missionName}</span>
                <StarButton card={card} />
            </StyledTitle>

            <div>
                {launchDate &&
                    <StyledDate>{date}</StyledDate>
                }
                {rocketName &&
                    <span>{rocketName}</span>
                }
            </div>
            {details &&
                <>
                    <StyledDetails>
                        Details
                    </StyledDetails>
                    <StyledText>
                        {details}
                    </StyledText>
                </>
            }
            {links.pressKit &&
                <StyledPress href={links.pressKit}>
                    Press kit
                </StyledPress>
            }
        </StyledWrapper>
    );
};