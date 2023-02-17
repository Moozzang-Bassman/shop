import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrandLogo = styled.span`
font-family: 'Monoton', cursive;
font-weight: 550;
`
const MainBg = styled.div`
height: 65vh;
background-image: url('https://www.nanamica.com/upload/main_visual_image/02031108_63dc6c9973d42.jpg');
background-size: cover;
background-position: center;
/* cursor: pointer; */
`
const StDiv = styled.div`
height: 60px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-size: .9rem;
font-weight: 500;

`
const TextContainer = styled.div`
width: 120px;
display: flex;
text-align: center;
justify-content: center;
align-items: center;

height: 60px;
/* border-bottom: 1px solid; */
/* &:hover {
border-bottom: 1px solid
} */
`

function Home() {
    let [data] = useState([{
        id: 0,
        title: "COOLMAX Jersey L/S Tee",
        content: "nanamica",
        price: 11000,
        image: 'https://www.nanamica.com/assets/product_image/sm/6375e434edff5.jpg'
    },

    {
        id: 1,
        title: "GORE-TEX Balmacaan Coat",
        content: "nanamica",
        price: 121000,
        image: "https://www.nanamica.com/assets/product_class_image/6375d46e86708.jpg"
    },

    {
        id: 2,
        title: "Mountain Wind Coach Jacket",
        content: "THE NORTH FACE PURPLE LABEL",
        price: 33000,
        image: "https://www.nanamica.com/assets/product_image/sm/6375bbbaa03ce.jpg"
    },
    {
        id: 3,
        title: "7G Crew Neck Sweater",
        content: "nanamica",
        price: 25300,
        image: "https://www.nanamica.com/assets/product_class_image/6375d9423bf97.jpg"
    }]);
    let [count, setCount] = useState(0);
    const navigate = useNavigate();
    return (
        <div>
            <Navbar className='nav-bar'>
                <Container>
                    <Navbar.Brand className='brand'><BrandLogo>MOOZZANG</BrandLogo> ONLINE STORE</Navbar.Brand>
                </Container>
            </Navbar>
            <StDiv>
                <TextContainer style={count === 1 ? { borderBottom: '1px solid' } : null} onMouseOver={() => { setCount(1) }} onMouseOut={() => {
                    setCount(0);
                }} >MEN</TextContainer>
                <TextContainer style={count === 2 ? { borderBottom: '1px solid' } : null} onMouseOver={() => { setCount(2) }} onMouseOut={() => {
                    setCount(0);
                }}>WOMEN</TextContainer>
            </StDiv>

            <MainBg></MainBg>

            <div className='cardwrap'>
                {data.map((item) => {
                    return <Card key={item.id} style={{ width: '18rem', border: 'none', fontSize: '.8rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
                            <Card.Title style={{ fontSize: '1rem' }}>{item.price}YEN</Card.Title>
                            <Card.Text>
                                {item.content}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                })}
            </div>
        </div>
    )
}

export default Home