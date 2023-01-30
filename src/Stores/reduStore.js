import {createStore} from 'redux'
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

export const  initialData=[];

export const store=createStore(reducer,initialData,composeWithDevTools())