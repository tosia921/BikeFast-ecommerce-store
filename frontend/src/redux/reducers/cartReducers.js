import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstans';

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload // attaching payload value to item variable
            const existItem = state.cartItems.find(x => x.product === item.product) // checking if item added to the cart already exists in the cart
            if(existItem) { // if item exists iterate throught the array, when item added to cart maches item in the cart, jusr return the new item
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else { //if item does not exist in our cart, return existing cart items with added item to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        default:
            return state;
    }
}