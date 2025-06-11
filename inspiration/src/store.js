import {configureStore} from '@reduxjs/toolkit';
import { ToDoSlice } from './features/ToDoSlice';

export default configureStore({
    reducer:{
        toDo: ToDoSlice.reducer
    }
}
)