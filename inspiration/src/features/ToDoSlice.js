import {createSlice} from '@reduxjs/toolkit'

export const ToDoSlice = createSlice({
    name:'toDoSlice',
    initialState:{
        cards:[],
        finishedCards:[]
    },
    reducers:{
        addCard: (state, action) =>{
            const {id, text , color} = action.payload;
            state.cards.push(action.payload);
        },
        
        deleteCard:(state, action) =>{
            const id = action.payload;
            state.cards = state.cards.filter(card => card.id !== id);
            state.finishedCards = state.finishedCards.filter(card=>card.id !==id);
        },
        finishCard:(state, action) =>{
            const id = action.payload;
            const cardIndex = state.cards.findIndex(card=> card.id === id);
            if (cardIndex !== -1){
                const [card] = state.cards.splice(cardIndex, 1);
                state.finishedCards.push(card);
            }
        }
    }
})
export const {addCard, deleteCard, finishCard} = ToDoSlice.actions;
export const selectToDo = (state) => state.toDo;
export const selectCards = state =>state.toDo.cards;
export const selectFinishedCards = state => state.toDo.finishedCards;
export default ToDoSlice.reducer;