import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GrTrash } from 'react-icons/gr'
// import { useEffect } from 'react';
import api from '../axios/api'



const MainBg = styled.div`
width:100vw;
height: 75vh;
background-image: url(${props => props.img});
background-size: cover;
background-position: center;
/* cursor: pointer; */
position: inherit;

`
const ImageContainer = styled.div`
    position: static;
  width: 300vw;
  display: flex;
   transform: ${(props) => `translateX(-${props.num}00vw)`};
  transition: all .7s;

`
const ImageButton = styled.input`
position: relative;
  width: 15px;
  height: 15px;

  border-radius: 50%;
  border: 1px solid white;
`

function Home({ cloth, setCloth, fetchCloth }) {





    const navigate = useNavigate();


    const [imageNum, setImageNum] = useState(0);

    const onDeleteButtonClickHandler = async (id) => {
        await api.delete(`/cloth/${id}`);
        setCloth(cloth.filter((item) => {
            return item.id !== id;
        }))

    }
    const foundItem = cloth?.filter((item) => {
        return item.isdone === false
    })


    return (

        <div style={{
            overflow: 'hidden'
        }}>


            <ImageContainer num={imageNum}>




                <label>
                    <MainBg img='https://www.nanamica.com/upload/main_visual_image/02101117_63e5a9509a210.jpg'
                    >
                    </MainBg>
                </label>
                <label>
                    <MainBg img='https://www.nanamica.com/upload/main_visual_image/02031108_63dc6c9973d42.jpg'></MainBg>
                </label>
                <label>
                    <MainBg img='https://www.nanamica.com/upload/main_visual_image/02101112_63e5a818dfe9f.jpg'></MainBg>

                </label>
            </ImageContainer>


            <div style={{
                position: 'relative',
                bottom: '100px',
                left: '80%',
                display: 'flex',
                gap: '1.5rem'

            }}>
                <ImageButton id='first' type='radio' name='slide' onClick={() => { setImageNum(0) }}></ImageButton>
                <ImageButton id='second' type='radio' name='slide' onClick={() => { setImageNum(1) }}></ImageButton>
                <ImageButton id='third' type='radio' name='slide' onClick={() => { setImageNum(2) }}></ImageButton>


            </div>
            <div style={{
                marginTop: '50px',
                letterSpacing: '-.02em',
                fontWeight: '500',
                fontSize: '1.6rem',
                color: '#001233',
                paddingLeft: '50px'
            }}>WISH LIST</div>

            <div className='cardwrap' >
                {foundItem?.map((item) => {
                    return <Card onClick={() => {

                        navigate(`/detail/${item.id}`)
                    }} className='card' key={item.id} style={{ width: '25vw', border: 'none', fontSize: '.8rem', cursor: 'pointer' }} >
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
                            <Card.Title style={{ fontSize: '1rem' }}>{item.price}YEN</Card.Title>
                            <Card.Text style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px', }}>
                                {item.content}<span

                                ><GrTrash
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        onDeleteButtonClickHandler(item.id)
                                    }}

                                    style={{ width: '15px', height: '15px', margin: '0px 10px' }}></GrTrash></span>
                            </Card.Text>

                        </Card.Body>

                    </Card>
                })}
            </div>
        </div >

    )
}

export default Home