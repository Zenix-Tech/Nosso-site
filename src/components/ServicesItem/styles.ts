import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    padding: 100px 0;

    display:flex;
    justify-content:center;
    align-items:Center;
    flex-direction:column;

    background-color: ${props => props.color};

   
    img{
        width: 300px;
    }
    .text-content{
        
    }
    @media(min-width: 1000px){
        flex-direction: row;
        justify-content:space-between;
        padding: 100px;
        
        img{
            width: 500px;
        }
        &:nth-last-child(2){
        img{
            order: 1;
        }
    }

    }
`;


export const Text = styled.div`

    width: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    

    h1{
        font-size:20px;
        font-weight:bold;

        margin: 20px 0;
    }
    p{
        font-size: 14px;
        font-weight: normal;
        color:var(--color-text);
        text-align: justify;
        line-height: 34px;
    }

    @media(min-width:1000px){
        width:50%;
        
        
        h1{
            font-size: 28px;
        }
        p{
            font-size: 18px;
        }
    }
`;
