import React from 'react'
import styled from 'styled-components'
const CountsCard = ( { item, data }) => {
    const Card = styled.div`
    flex: 1;
    min-width: 200px;
    padding: 24px;
    border: 1px solid ${({theme}) => theme.text_primary + 20};
    border-radius :14px;
    box-shadow: 1px 6px 20px 0 ${({theme}) => theme.primary + 15};
    display: flex;
    gap: 6px;
    `;
    const Left = styled.div`
    fleX:1;
     display: flex;
     flex-direction: column;
     gap: 12px;
     @media (max-width: 600px) {
        gap: 6px;
     }
     `;
    const Icon = styled.div`
    height: fit-contenet;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    ${({color, bg}) => `
        color: ${color};
        background: ${bg};
    `}
    `;
    const Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({theme}) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
    `;
    const Value = styled.div`
    font-weight: 600;
    font-size: 32px;
    color: ${({theme}) => theme.text_primary};
    display: flex;
    align-items: end;
    gap: 8px;
    @media (max-width: 600px) {
        font-size: 22px;
    }
    `;
    const Unit = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
    `;
    const Span = styled.div`
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 600px) {
        font-size: 12px;
    }
    ${({positive, theme}) => 
    positive
    ?`color: ${theme.green};`
    :`color: ${theme.red};`}
    `;
    const Desc = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 6px;
    @media (max-width: 600px) {
        font-size: 12px;
    }
    `;
  return (
    <Card>
        <Left>
            <Title>{item.name}</Title>
            <Value>
                {data && data[item.key].toFixed(2)}
                <Unit>{item.unit}</Unit>
                <Span positive>(+10%)</Span>
            </Value>
            <Desc>{item.desc}</Desc>
        </Left>
        <Icon color={item.color} bg={item.lightColor}>{item.icon}</Icon>
    </Card>
  )
}

export default CountsCard