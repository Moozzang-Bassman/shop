import React from 'react'
import { Navbar, Container, Card, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const MainBg = styled.div`
height: 65vh;
background-image: url('https://www.nanamica.com/upload/main_visual_image/02031108_63dc6c9973d42.jpg');
background-size: cover;
background-position: center;
/* cursor: pointer; */
position: inherit;
`
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

function Home(props) {
    const navigate = useNavigate();

    const data = props.data

    // let [count, setCount] = useState(0);


    return (
        <div>



            <MainBg></MainBg>

            <div className='cardwrap'>
                {data.map((item) => {
                    return <Card onClick={() => {
                        navigate(`/detail/${item.id}`)
                    }} className='card' key={item.id} style={{ width: '18rem', border: 'none', fontSize: '.8rem', cursor: 'pointer' }} >
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