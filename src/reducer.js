export const initialState = {
    basket: [],
    user: null,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM", 
    SET_USER: "SET_:USER",
}


export const getBasketTotal = function (basket) {
    const int = 0;
    basket?.reduce((acc, item) => item.price + acc, int)
}


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],        
        }
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (index>=0) {
                newBasket.splice(index, 1)
            } else {
                console.log("Cant remove product")
            }
            return {
                ...state, 
                basket: newBasket,
            };
            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
        default: return state; 
    }
    
}
export default reducer