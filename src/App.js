
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useState } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { SlMagnifier } from 'react-icons/sl'
import { BsBag } from "react-icons/bs";

const BrandLogo = styled.span`
font-family: 'Monoton', cursive;
font-weight: 550;
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

function App() {

  const navigate = useNavigate();
  const [data] = useState([{
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
  const [count, setCount] = useState(0);


  return (
    <div>
      <Navbar className='nav-bar sticky-top' >
        <Container >
          <Navbar.Brand style={{
            cursor: 'pointer'
          }} className='brand' onClick={() => {
            navigate('/')
          }}><BrandLogo>MOOZZANG</BrandLogo> ONLINE STORE</Navbar.Brand>
          {/* <Nav style={{
            fontSize: '14px',
            letterSpacing: '2.5px',
            fontWeight: '400',
            cursor: 'pointer'
          }} onClick={() => { navigate('/Detail') }}> DETAIL</Nav> */}
          <BsBag style={{ position: 'absolute', right: '90px', cursor: 'pointer' }}></BsBag>
          <SlMagnifier style={{ position: 'absolute', right: '40px', cursor: 'pointer' }}></SlMagnifier>

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







      <Routes>
        <Route path='/' element={<Home data={data}></Home>}></Route>
        <Route path='/detail/:id' element={<Detail data={data} ></Detail>}></Route>
      </Routes>



    </div>
  );
}

export default App;
