
import './App.css';
import { Navbar, Container } from 'react-bootstrap';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useState, useEffect, memo, } from 'react';


import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import { BsBag } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx"
import api from './axios/api'
import Cart from './pages/Cart';



// const StDiv = styled.div`
// height: 60px;
// display: flex;
// justify-content: center;
// align-items: center;
// gap: 10px;
// font-size: .9rem;
// font-weight: 500;

// `
// const TextContainer = styled.div`
// width: 120px;
// display: flex;
// text-align: center;
// justify-content: center;
// align-items: center;

// height: 60px;
// /* border-bottom: 1px solid; */
// /* &:hover {
// border-bottom: 1px solid
// } */
// `

function App() {

  const [cloth, setCloth] = useState(null);
  const fetchCloth = async () => {
    // const { data } = await axios.get('http://localhost:4000/cloth');
    const { data } = await api.get('/cloth');
    setCloth(data);
  }


  useEffect(() => {
    fetchCloth();
  }, [])
  const navigate = useNavigate();






  const [mainImage] = useState(['https://www.nanamica.com/upload/main_visual_image/02031108_63dc6c9973d42.jpg', 'https://www.nanamica.com/upload/main_visual_image/02101117_63e5a9509a210.jpg', 'https://www.nanamica.com/upload/main_visual_image/02101112_63e5a818dfe9f.jpg'])



  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <div  >



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
          <BsBag onClick={() => {
            navigate('/cart')
          }} style={{ position: 'absolute', right: '90px', cursor: 'pointer' }}></BsBag>

          <BsPlusLg onClick={() => {
            setMenuOpen(true);
          }} style={{ position: 'absolute', right: '40px', cursor: 'pointer' }}></BsPlusLg>

        </Container>
      </Navbar>

      {/* {menuOpen === true && <AddMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></AddMenu>} */}
      <AddMenu fetchCloth={fetchCloth} menuOpen={menuOpen} setMenuOpen={setMenuOpen}></AddMenu>



      {/* <StDiv>
        <TextContainer style={count === 1 ? { borderBottom: '1px solid' } : null} onMouseOver={() => { setCount(1) }} onMouseOut={() => {
          setCount(0);
        }} >MEN</TextContainer>
        <TextContainer style={count === 2 ? { borderBottom: '1px solid' } : null} onMouseOver={() => { setCount(2) }} onMouseOut={() => {
          setCount(0);
        }}>WOMEN</TextContainer>
      </StDiv> */}
      <Routes>
        <Route path='/' element={<Home setCloth={setCloth} cloth={cloth} fetchCloth={fetchCloth}></Home>}></Route>
        <Route path='/detail/:id' element={<Detail fetchCloth={fetchCloth} cloth={cloth}></Detail>}></Route>
        <Route path='/cart' element={<Cart cloth={cloth} setCloth={setCloth} fetchCloth={fetchCloth} ></Cart>}></Route>
      </Routes>



    </div>
  );
}
function AddMenu({ setMenuOpen, menuOpen, fetchCloth }) {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    title: '',
    content: '',
    price: '',
    image: '',
    isdone: false
  });

  const onSubmitHandler = async () => {
    // console.log(inputVal)
    if (!inputVal.title || !inputVal.content || !inputVal.price || !inputVal.image) return alert('공백없이 입력해주세요');
    await api.post('/cloth', inputVal);

    setInputVal({
      title: '',
      content: '',
      price: '',
      image: '',
      isdone: false
    })

    fetchCloth();
    setMenuOpen(false);
    navigate('/');
  }

  return (
    <SlideMenuBar isOpen={menuOpen}>
      <div style={{

        paddingTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: '500'
      }}>
        <ul>
          <li>ADD TO LIST</li>

        </ul>

        <div style={{
          cursor: 'pointer'
        }} onClick={() => {
          setMenuOpen(false)
        }}><RxCross1 style={{
          width: '30px', height: '30px'
        }}></RxCross1></div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',

        marginTop: '49px',
        justifyContent: 'space-between'
      }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();

        }}>
          <InputContainer>

            <MenuInput
              onChange={(e) => {
                setInputVal({
                  ...inputVal, image: e.target.value,
                })
              }}
              value={inputVal.image}
              type='text'
              placeholder='PLEASE TYPE PRODUCT IMAGE URL'
            ></MenuInput>
          </InputContainer>
          <InputContainer >

            <MenuInput
              onChange={(e) => {
                setInputVal({
                  ...inputVal, title: e.target.value,
                })
              }}
              value={inputVal.title}
              type='text'
              placeholder='PLEASE TYPE PRODUCT NAME'
            ></MenuInput>
          </InputContainer>
          <InputContainer>

            <MenuInput
              onChange={(e) => {
                setInputVal({
                  ...inputVal, price: e.target.value,
                })
              }}
              value={inputVal.price}
              type='text'
              placeholder='PLEASE TYPE PRICE INFO'>

            </MenuInput>
          </InputContainer>


          <InputContainer>

            <select
              onChange={(e) => {
                setInputVal({
                  ...inputVal, content: e.target.value,
                })
              }}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                backgroundColor: 'inherit',

              }}>
              <option value=''>PLEASE CHOOSE PRODUCT BRAND
              </option>
              <option value='nanamica'>nanamica</option>
              <option value='THE NORTH FACE PURPLE LABEL'>THE NORTH FACE PURPLE LABEL</option>
            </select>
            <button

              style={{ border: 'none', width: '20%', height: '70px', backgroundColor: '#1A2848', color: 'white', fontSize: '.9rem', fontWeight: '500', right: '50px', position: 'relative', position: 'absolute' }}>ADD TO LIST</button>
          </InputContainer>
        </form>
      </div>
    </SlideMenuBar>
  )
}

const InputContainer = styled.div`
width: 500px;
height: 70px;
border-bottom: 1px solid;
display: flex;
/* width: '500px',
          height: '70px',
          borderBottom: '1px solid',
          display: 'flex', */
`
const MenuInput = styled.input`

            background-color: inherit;
            border: none;
            outline: none;
            width: 100%;

`
const SlideMenuBar = styled.div`
/* margin-top: -100vw; */
/* overflow: hidden; */
/* visibility: hidden; */
background-color: #F5F5F5;
z-index: 1050;
position: fixed;
width: 100vw;
top: 0;
/* height:500px; */
padding: 0 40px 60px 40px;
transform: ${props => props.isOpen
    ? 'translateY(0)'
    : 'translateY(-100%)'
  };

transition: 1s;

`


const BrandLogo = styled.span`
font-family: 'Monoton', cursive;
font-weight: 550;
`

export default App;
