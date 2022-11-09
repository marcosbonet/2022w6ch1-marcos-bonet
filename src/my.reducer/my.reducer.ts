import { createReducer } from '@reduxjs/toolkit';
import { Characters } from '../models/data/types';
import * as ac from './action.creators';

const initialState: Array<Characters> = [];

export const characterReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadAction, (_state, action) => action.payload);
    builder.addCase(ac.addAction, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateAction, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.deleteAction, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );
    builder.addDefaultCase((state) => state);
});
