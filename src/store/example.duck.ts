import {createReducer, createAction} from "@reduxjs/toolkit"
import {Reducer} from "redux"

type ExampleState = {
    message? : string
}

const initialState : ExampleState = {
    message: "This is a default message"
}

type SetMessageActionType = {
    message: string
}

export const actions = {
    setMessage: createAction<SetMessageActionType>('SET_MESSAGE')
}

export const reducer: Reducer<ExampleState> = createReducer(initialState, {
    [actions.setMessage.type]: (state, action) => {
        return { ...state, message: action.payload.message}
    }
})