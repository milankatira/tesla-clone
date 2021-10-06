import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
//import CloseIcon from '@mui/icons-material/Close';
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
                <CustomMenu>
                    <MenuIcon />
                </CustomMenu>
            </RightMenu>
           <BurgerNav>
           <li><a href="#">Existing Inventorty </a> </li>
           <li><a href="#">used Inventorty </a> </li>
           <li><a href="#">cybertruck </a> </li>
           <li><a href="#">Existing Inventorty </a> </li>
           <li><a href="#">Existing Inventorty </a> </li>
           <li><a href="#">Existing Inventorty </a> </li>
           </BurgerNav>
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
justify-content:space-between;
z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

@media (max-width: 768px){
display: none;
}

a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:no-wrap;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
font-weight:600;
text-transform:uppercase;
margin-right:10px;
flex-wrap:no-wrap;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
li{
padding:15px 0;
border-bottom:1px solid rgba(0,0,0,.2);

a{
font-weight:600;
}
}
`