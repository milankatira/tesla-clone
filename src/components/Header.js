import React from 'react'
import styled from 'styled-components'
const Header = () => {
    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt="logo" />
            </a>
            <Menu>
                <a href="#">model s</a>
                <a href="#">model 3</a>
                <a href="#">model x</a>
                <a href="#">model y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla account</a>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:no-wrap;
}
`

const RightMenu = styled.div`
a{
font-weight:600;
text-transform:uppercase;
margin-right:10px;
flex-wrap:no-wrap;
}
`