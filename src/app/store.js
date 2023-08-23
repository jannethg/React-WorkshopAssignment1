import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,        
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }, 
    middleware: (getDefaultMiddleWare)  => getDefaultMiddleWare().concat([logger])
    //middleware lets us see whats going on everytime we dispatch an action. 
});


// console.log(store.getState());