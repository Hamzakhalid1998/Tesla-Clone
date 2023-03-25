import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Leasing starting at $349/mo"
                backgroundImg="model-s.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Leasing starting at $349/mo"
                backgroundImg="model-y.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Leasing starting at $349/mo"
                backgroundImg="model-3.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Leasing starting at $349/mo"
                backgroundImg="model-x.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />

            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-roof.jpg"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />

            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnTxt="Shop Now"
                rightBtnTxt=""
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`