import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { BiShoppingBag } from 'react-icons/bi'

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
function Detail(props) {
    const data = props.data;

    const { id } = useParams();
    const foundData = data.find((x) => {
        return x.id === +id
    })
    console.log(foundData)
    // const foudData = data.find((x) => {

    // })
    return (
        <div className="container" style={{
            borderBottom: '1px solid lightgray'
        }}>
            <div className="row">
                <div className="col-md-6">
                    <img src={foundData.image} width="100%" />
                </div>
                <div className="col-md-6" style={{
                    lineHeight: '70px'
                }}>
                    <h4 className="pt-5">{foundData.title}</h4>
                    <p>{foundData.content}</p>
                    <h4>¥&nbsp;{foundData.price}</h4>

                    <OrderButton>ADD TO CART<BiShoppingBag style={{
                        position: 'relative',
                        left: '70px'

                    }}></BiShoppingBag></OrderButton>


                </div>
            </div>
        </div>
    )
}

export default Detail