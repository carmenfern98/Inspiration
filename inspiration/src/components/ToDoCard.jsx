/** @jsxImportSource @emotion/react */
import {useDispatch} from "react-redux";
import { deleteCard, finishCard } from "../features/ToDoSlice";
import styled from "@emotion/styled";

const CardText = styled.p`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `
const CardContainer = styled.div`
    background-color: ${props => props.color || '#333'};
    max-width: 10rem;
    padding: 1rem;
    border-radius: 10px;
    margin: .25rem;
`
const FinishButton = styled.button`
background-color: #50C878;
color: #FFFFFF;
border: 1px solid;
border-color: #FFFFFF;
border-radius: 10px;
margin: 10px;
`
const DeleteButton = styled.button`
color: #FFFFFF;
background-color: #D22B2B;
border: 1px solid;
border-color: #FFFFFF;
border-radius: 10px;
`

export const ToDoCard = ({card, isFinished = false}) =>{
    const dispatch = useDispatch();

    const handleFinish = () => {
        dispatch(finishCard(card.id))
    };

    const handleDelete = () => {
        dispatch(deleteCard(card.id))
    };

    return (
        <CardContainer color={card.color}>
            <div key={card.id}>
            <CardText>{card.text}</CardText>
            {!isFinished &&<FinishButton onClick={handleFinish}>Finished</FinishButton>}
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </div>
        </CardContainer>
    )
    }
