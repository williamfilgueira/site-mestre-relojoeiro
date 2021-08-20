import styled from "styled-components";

export const IconContainer = styled.section`
    .container{
        width: 90%;
        padding: 20px;
        height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .box-icons{
            margin: 20px;
            margin-left: 250px;
            width: 350px;
            display: flex;
            flex-flow: column wrap;
            img{
                height: 80px;
                display: flex;
                justify-content: center;
                margin-bottom: 40px;
            }
            p{
                text-align: center;
                font-size: 25px;
            }
        }
    }

`