import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 15px;
    @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
`

export const Heading = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xl};
`

export const Text = styled.p<any>`
    font-size: ${({ theme }) => theme.fontSize.md};
    opacity: ${(props) => (props.opacity ? '.5' : '')};
`

export const utils = {
    Wrapper,
    Font: {
        Heading,
        Text,
    },
}
