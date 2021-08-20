import styled from "styled-components";

export const InfoRelojoeiro = styled.div`
 
 .container{
     padding: 20px;
     background-color: #F4F1F1;
 }
 .box-relojoeiro{
     margin-left: 50px;
     width: 90%;
     padding: 20px;
     text-align: center;
     font-size: 35px;
     
     display: flex;
     justify-content: space-around;
     align-items: center;
     .image img{
         border: 3px solid;
         border-radius: 5px;
         box-shadow: 2px 2px 6px black;

         height: 400px;
         width: 500px;
         
         object-fit: cover;
     }
     .text{
         width: 600px;
         font-weight: 600;
         h2{
             margin-bottom: 20px;
         }
     }
 }
`;
