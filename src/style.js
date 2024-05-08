import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    width: 400px;
    background: white;
    border-radius: 5px;
    padding: 30px;
    input {
        width: 80%;
        border: 1px solid gray;
        height: 50px;
        font-size: 18px;
        padding: 0 10px;
        border-radius: 3px;
    }
    button {
        background: purple;
        width: 20%;
        height: 50px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        img {
            width: 30px;
        }
    }
`

export const MapDiv = styled.div`
    width: 100%;
    min-height: 50px;
    background: lightgrey;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 18px;
`

export const ClearButton = styled.button`
    max-height: 40px;
    width: 100px;
    background: purple;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
`