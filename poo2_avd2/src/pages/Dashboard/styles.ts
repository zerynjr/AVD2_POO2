import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    font-size: 16px;
    background-color: #ACF1D7;
    form{
        display:flex;
        flex-direction: column;
        border-radius: 10px;
        background-color: #ACF1D7;

        input {
            margin-bottom: 16px;
            padding: 8px;
            border-radius: 10px;
        }
        button {
            padding: 8px;
            border-radius: 10px;
            background-color: crimson;
            font-style: inherit;
        }
    }

    table {
        margin-top: 30px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        border-radius: 10px;
    }
    th {
        text-align: center;
        border: 1px solid;
        border-radius: 10px;
    }
    td {
        text-align: center;
        border: 1px lightgray solid;
        border-radius: 10px;
    }
    tbody button {
        background-color: lightsteelblue;
        border-radius: 5px;
    }
    tbody input {
        background-color: lightslategray;
        border-radius: 5px;
    }
`