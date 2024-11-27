export interface IShoppingListItem {
    id: number,
    name: string
}

export interface IShoppingListState {
    entities: IShoppingListItem[],
    isLoading: boolean
}