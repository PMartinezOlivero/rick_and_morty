import styled from "styled-components";

export const DivBox = styled.div`
    position:relative;
    display:inline-block;
    box-shadow:3px 3px orange;
    margin: 10px;
    background-color:lightgoldenrodyellow;

`;

export const DivButton = styled.button`
    position:absolute;
    right:0;
    font-size:16px;
    font-weight:bold;
    color:white;
    border: 2px solid red;
    background-color:lightcoral;
`;

export const DivName = styled.div`
    position:absolute;
    top:260px;
    left:15px;
    background-color:orange;
    font-weight:bold;
    color:white;
    padding:5px

`;

export const DivStatus = styled.div`
    font-weight:bold;
    color:white;
    background-color:green;
`;

export const DivOrigin = styled.div`
    font-weight:bold;
    font-style:oblique;
    margin-top:10px;
    width:100%;
`;

export const DivSpecies = styled.div`
    font-weight:bold;
    float:right;
    margin-right:10px;
`;

export const DivGender = styled.div`
    font-weight:bold;
    float:left;
    margin-left:10px;
`;