import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import {authReducer} from "./authReducer";


const rootReducer=combineReducers({
    auth:authReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))


export default store

export type RootStoreType=ReturnType<typeof rootReducer>

export type RootThunkTypes<ReturnType=void>=ThunkAction<ReturnType, RootStoreType, unknown, any>

// @ts-ignore
window.store=store