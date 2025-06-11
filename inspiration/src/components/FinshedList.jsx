/** @jsxImportSource @emotion/react */
import {useSelector} from 'react-redux';
import { ToDoCard } from './ToDoCard';
import { selectFinishedCards } from '../features/ToDoSlice';
import styled from '@emotion/styled';

    const FinishedListContainer = styled.div`
    padding: 2rem;
    background-color: rgba(148,148,148,0.8);
    max-width: 40rem;
    margin: 2rem auto;
    border-radius: 10px;
    `
    const FinishedListCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `
    

    const FinishedListTitle = styled.h2`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `


export const FinishedList = () => {
    const cards = useSelector(selectFinishedCards)

    return(
        <FinishedListContainer>
            <FinishedListTitle>Finished</FinishedListTitle>
            <FinishedListCardContainer>
                {cards.map(card=> (
                    <ToDoCard key={card.id} card={card} isFinished />
                ))}
            </FinishedListCardContainer>
        </FinishedListContainer>
    )
};