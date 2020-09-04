import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    img{
        width:100%;
        z-index: 1;
    }

    @media(min-width: 800px){
        flex-direction: row;
        justify-content:space-around;
        margin: 100px 0;
        img{
            width: 675px;
            height: 487px;
        }
    }
   
`;


export const Text = styled.div `

    width: 300px;
    padding:20px;
    box-shadow:0px 0px 10px #7A7676;
    border-radius: 0.2rem;
    margin-top: -50px;
    background-color: #FFFFFF;
    z-index: 2;
    h1{
        font-size: 24px;
        text-align: left;
        color: var(--color-secondary);
        margin-bottom: 10px;
    }
    p{
        font-size: 14px;
        text-align:justify;
        color:var(--color-text);
        line-height: 32px;
    }

    @media(min-width: 800px){
        width: 664px;
        margin-top: 0px;
        margin-left: -200px;
        h1{
            font-size: 32px;
        }
        p{
            font-size: 18px;
        }
    }




`;

export const Content = styled.div`
    display:Flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    >.about{
       
        width: 300px;
        margin-top: 100px;
        h1{
            font-size: 18px;
            color: var(--color-secondary);
            text-align:center;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            color: var(--color-text);
            line-height: 32px;
            text-align:center;
        }
    }


    .team{
        margin: 100px 0;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

    }
    
    @media(min-width: 800px){
        .team{
            flex-direction: row;
            flex-wrap:wrap;
            margin: 100px 0;
        }
        .about{
            width: 800px;
            h1{
                font-size: 20px;
            }
        }
    }
`