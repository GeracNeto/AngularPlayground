import { createReducer, on } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";
import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from "./shopping-list.actions";

export const initialState: IShoppingListState = {
    entities: [],
    isLoading: false
}

export const shoppingListReducer = createReducer(
    initialState,
    on(loadShoppingList, (state) => ({
        ...state,
        isLoading: true
    })),

    on(loadShoppingListSuccess, (state, { entities }) => ({
        ...state,
        entities,
        isLoading: false
    })),

    on(loadShoppingListError, (state) => ({
        ...state,
        isLoading: false
    })),
)