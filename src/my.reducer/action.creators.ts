import { createAction } from '@reduxjs/toolkit';

import { Characters } from '../models/data/types';
import { actionTypes } from './action.types';

export const loadAction = createAction<Array<Characters>>(actionTypes.load);
export const addAction = createAction<Characters>(actionTypes.add);
export const updateAction = createAction<Characters>(actionTypes.update);

export const deleteAction = createAction<Characters>(actionTypes.delete);
