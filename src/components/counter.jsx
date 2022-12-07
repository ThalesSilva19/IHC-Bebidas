import React from 'react'
import styled from 'styled-components';
import { Box, Typography } from '@mui/material'

const LeftButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 8px 0 0 8px;
    border: solid 1px ${props => props.theme.colors.dark_gray};
    border-right: ${props => props.theme.colors.white};

    &:hover {
        cursor: pointer !important;
        background-color: ${props => props.theme.colors.dark_gray};
    }
`

const RightButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: '#FFF';
    border-radius: 0 8px 8px 0;
    border: solid 1px ${props => props.theme.colors.dark_gray};
    border-left: ${props => props.theme.colors.white};

    &:hover {
        cursor: pointer !important;
        background-color: ${props => props.theme.colors.dark_gray};
    }
`

export default function Counter() {

    const [counter, setCounter] = React.useState(1)

    function subCounter() {
        console.log('sub')
        if(counter > 1)
            setCounter(counter-1)
    }

    function addCounter() {
        console.log('add')
        setCounter(counter+1)
    }


    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <LeftButton aria-label='Subtrair' type="button" tabIndex="0" onClick={subCounter}>-</LeftButton>
            <Typography sx={{
                textAlign: 'center',
                width: '25px',
                height: '25px',
                backgroundColor: '#CBCBCB'
            }}>{counter}</Typography>
            <RightButton aria-label='Incrementar' type="button" tabIndex="0" onClick={addCounter}>+</RightButton>
        </Box>
    )
}
