import {createReducer, createAction, PayloadAction} from "@reduxjs/toolkit"
import {Reducer} from "redux"
import NFTCollectionModel from "../models/NFTCollectionModel"

type NFTCollectionsState = {
    items?: Array<NFTCollectionModel>
    selectedItem?: NFTCollectionModel
    search?: string
}

const initialState : NFTCollectionsState = {
    items: [],
    selectedItem: undefined,
    search: undefined
}

export type SetItemsActionType = {
    items: Array<NFTCollectionModel>
}

export type SetSelectedItemActionType = {
    selectedItem: NFTCollectionModel
}

export const actions = {
    setItems: createAction<SetItemsActionType>('SET_ITEMS'),
    setSelectedItem: createAction<SetSelectedItemActionType>('SET_SELECTED_ITEM')
}

export const reducer: Reducer<NFTCollectionsState> = createReducer(initialState, {
    [actions.setItems.type]: (state: NFTCollectionsState, action: PayloadAction<SetItemsActionType>) => {
        return { ...state, items: action.payload.items}
    },
    [actions.setSelectedItem.type]: (state: NFTCollectionsState, action: PayloadAction<SetSelectedItemActionType>) => {
        return { ...state, selectedItem: action.payload.selectedItem}
    }
})