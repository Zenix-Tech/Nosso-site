import styled from 'styled-components';

export const Container = styled.div`

            display:flex;
            justify-content:center;
            align-items:center;
            flex-wrap:wrap;
            cursor:pointer;

        span{
            width:300px;
            height:300px;
            position:absolute;
            z-index:2;
            text-align:center;
            display:none;
            h2{
                font-size:22px;
                font-weight: bold;
                color:white;
            }
            h3{
                font-size:14px;
                color: var(--color-text);
            }
        }
       &:hover span{
            background-color: rgba(0,0,0, 0.8);

            display:flex;
            justify-content:Center;
            align-items:center;
            flex-direction:column;
        }

    
`;
