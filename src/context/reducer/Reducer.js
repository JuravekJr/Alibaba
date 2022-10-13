export const initialState = {
    user: null,
    carousel: 0,
    data: [],
    cartPro: [],
    sort: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER' :
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_TO_CART' :
            return {
                ...state,
                cartPro: [...state.cartPro, action.payload]
            }
        case 'SET_SORT' :
            return {
                ...state,
                sort: action.payload
            }
        case 'SET_CAROUSEL' :
            return {
                ...state,
                carousel: action.payload
            }
        case 'INC_CAROUSEL' :
            return {
                ...state,
                carousel:  state.carousel >= 6 ? 0 : state.carousel + 1
            }
        case 'DEC_CAROUSEL' :
            return {
                ...state,
                carousel: state.carousel <= 0 ? 6 : state.carousel - 1
            }
        case 'ADD_PRODUCT' :
            return {
                ...state,
                data: action.payload
            }
        default :
            return state
    }
}

export default reducer