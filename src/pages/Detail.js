import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { BsBag } from 'react-icons/bs'
import api from '../axios/api'
import { useNavigate } from 'react-router-dom';

const OrderButton = styled.button`
background-color: #1A2848;
color: white;

width: 300px;
height: 70px;

border: none;

font-size: .9rem;
font-weight: 500;

margin-top: 50px;

display: flex;
justify-content: center;
align-items: center;



`

function Detail({ cloth, fetchCloth }) {
    const navigate = useNavigate();

    const { id } = useParams();
    const foundData = cloth.find((x) => {
        return x.id === +id;
    })
    const onUdateButtonClickHandler = async () => {
        await api.patch(`/cloth/${id}`, {
            isdone: true
        })
        fetchCloth();
        alert('장바구니에 담김')
        if (window.confirm('장바구니로 이동하실래요?')) {
            return navigate('/cart');
        } else {
            return navigate('/')
        }

    }


    return (

        <div className="container" style={{
            borderBottom: '1px solid lightgray'
        }}>
            <div className="row">
                <div className="col-md-6">
                    <img src={foundData.image} width="100%" alt='clothingimg' />
                </div>
                <div className="col-md-6" style={{
                    lineHeight: '70px'
                }}>
                    <h4 className="pt-5">{foundData.title}</h4>
                    <p>{foundData.content}</p>
                    <h4>¥&nbsp;{foundData.price}</h4>

                    <OrderButton
                        onClick={onUdateButtonClickHandler}
                    >ADD TO CART<BsBag style={{
                        position: 'relative',
                        left: '70px',



                    }}></BsBag></OrderButton>


                </div>
            </div>
        </div>
    )
}

export default Detail;