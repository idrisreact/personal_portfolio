import React from 'react'
import styled from 'styled-components'
import { utils } from 'src/styled-components/utils'

const Header = () => {
    const {
        Font: { Text },
    } = utils
    return (
        <StyledHeader>
            <Text>WEBDEV</Text>
            <StyledMenu>
                <li>SHOWCASE</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </StyledMenu>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledMenu = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    li:not(:last-child) {
        padding-right: 10px;
    }
`
