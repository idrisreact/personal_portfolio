import React from 'react'
import styled from 'styled-components'
import { utils } from 'src/styled-components/utils'

interface HeroProps {
    text: string
    subText: string
}

const Hero = ({ text, subText }: HeroProps) => {
    const {
        Wrapper,
        Font: { Heading, Text },
    } = utils
    return (
        <StyledHero>
            <Wrapper>
                <Heading>{text}</Heading>
                <Text opacity>{subText}</Text>
            </Wrapper>
        </StyledHero>
    )
}

export default Hero

const StyledHero = styled.main`
    padding: 7rem 0;
`
