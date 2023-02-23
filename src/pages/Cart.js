import React from 'react'
import styled from 'styled-components'
import { TfiBackLeft } from 'react-icons/tfi'
import { MdOutlineDone } from 'react-icons/md'
import api from '../axios/api'

const StLi = styled.li`
width: 90%;

margin: 40px 40px 0 40px;
`
const StP = styled.p`
margin-top: 10px;
font-weight: 500;
font-size: 1.1rem;
text-decoration: underline;
`
const StBtn = styled.button`

background-color: inherit;
font-size: .7rem;
/* width: 150px; */
width: ${props => props.width};
height: 30px;
border: 1px solid;
border-radius: 2px;
padding:0px 20px;
white-space : nowrap;
`
function Cart({ cloth, setCloth, fetchCloth }) {
    const onDeleteButtonClickHandler = async (id) => {
        await api.delete(`/cloth/${id}`);
        setCloth(cloth.filter((item) => {
            return item.id !== id;
        }))

    }

    const onUdateButtonClickHandler = async (id) => {
        if (window.confirm('장바구니에서 빼실거에요?')) {
            await api.patch(`/cloth/${id}`, {
                isdone: false
            })
            fetchCloth();
        } return;

    }


    const targetClothes = cloth?.filter((v) => v.isdone === true)




    return (
        <div style={{ display: 'flex' }}>

            <ul style={{ width: '65vw', display: 'flex', flexDirection: 'column' }}>

                {targetClothes?.map((item) => {
                    return (
                        <StLi key={item.id}>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '30%', marginBottom: '30px' }} src={item.image}></img>
                                <div style={{ margin: '10px 0 0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <StP>{item.title}</StP>
                                    <p>{item.content}</p>
                                    <p>¥ {item.price}</p>

                                    <div style={{ display: 'flex', gap: '30px', position: 'relative', bottom: '0px', marginTop: '10px' }}>
                                        <StBtn
                                            onClick={() => {

                                                onDeleteButtonClickHandler(item.id)
                                                alert('구매 완료');
                                            }}
                                        ><MdOutlineDone></MdOutlineDone>구매완료</StBtn>
                                        <StBtn onClick={() => {
                                            onUdateButtonClickHandler(item.id);
                                        }}>리스트로 돌려보내기<TfiBackLeft></TfiBackLeft></StBtn>
                                    </div>
                                </div>
                            </div>
                        </StLi>
                    )
                })}






            </ul>
            <div style={{ width: '35vw', height: '50vh', backgroundColor: '#EBEBEB', position: 'fixed', right: '0', marginTop: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>TOTAL PRICE:???????</div>



        </div>
    )
}

export default Cart