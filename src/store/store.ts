import { configureStore } from '@reduxjs/toolkit';
import { characterReducer } from '../my.reducer/my.reducer';

export const appStore = configureStore({
    reducer: {
        character: characterReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
