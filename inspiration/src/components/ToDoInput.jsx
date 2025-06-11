/** @jsxImportSource @emotion/react */
import  {useState, useRef} from "react";
import {useDispatch} from 'react-redux';
import {v4 as uuidv4 } from "uuid"
import { addCard } from "../features/ToDoSlice";
import styled from "@emotion/styled";

    const ToDoContainer = styled.div`
    padding: 2rem;
    background-color: rgba(148,148,148,0.8);
    max-width: 40rem;
    margin: 0 auto;
    border-radius: 10px;
    `
    const ToDoTitle = styled.h1`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `
    const StyledInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    font-size:3rem;
    width: 30rem;
    max-height:10rem;

    &:focus{
    outline:none}
    `

export default function ToDoInput(){
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const colors = ['#2d79a7', '#cb4c4e', '#75866d', '#cf9033' ];
    const colorIndexRef = useRef(0);
   
    const getNextColor = () => {
        const color = colors[colorIndexRef.current];
        colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
        return color
    }
    
    const handleKeyDown = (e) =>{
      if (e.key === 'Enter'){
        e.preventDefault();
        if(text.length === 0)return;

       const id = uuidv4();
       const color = getNextColor();
       dispatch(addCard({id, text, color}));
       setText('')
        }
    };

    return(
        <ToDoContainer>
            <form>
                <ToDoTitle>What will you do today?</ToDoTitle>
                <StyledInput
                type='text'
                value={text}
                onChange = {(e)=>setText(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
                />
            </form>
        </ToDoContainer>
    )

}