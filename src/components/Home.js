import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
const Home = () => {
    return (
        <Container>
        <Header/>
            <Section
                title="model s"
                description="order online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="model y"
                description="order online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="model 3"
                description="order online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="model x"
                description="order online for touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="lowest cost solar panels in america"
                description="money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="custom now"
                rightBtnText="learn more"
            />
            <Section
                title="solar for new roofs"
                description="solar roof cost less than a new roof plus solar panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="custom now"
                rightBtnText="learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
z-index: 10;
`