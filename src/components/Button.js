import React from 'react'
import styled from 'styled-components'

const ExampleButton = styled.button`
    background: green;
    color: orange;
    font-size: 2rem;
`

const Button = () => {
    return <ExampleButton>Click me </ExampleButton>
}

export default Button
