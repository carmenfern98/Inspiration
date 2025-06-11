/** @jsxImportSource @emotion/react */
import {useSelector} from 'react-redux';
import { ToDoCard } from './ToDoCard';
import { selectCards } from '../features/ToDoSlice';
import styled from '@emotion/styled';

    const ToDoListContainer = styled.div`
    padding: 2rem;
    background-color: rgba(148,148,148,0.8);
    max-width: 40rem;
    margin: 2rem auto;
    border-radius: 10px;
    `
    const ToDoListCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `
    const ToDoListTitle = styled.h2`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `

export const ToDoList = () => {
    const cards = useSelector(selectCards)

    return(
        <ToDoListContainer>
            <ToDoListTitle>To Do List</ToDoListTitle>
            <ToDoListCardContainer>
                {cards.map(card=>(
                    <ToDoCard key={card.id} card={card}/>
                ))}
            </ToDoListCardContainer>
        </ToDoListContainer>
    )
}
