import { actionTypes } from '../actionTypes/index'

const initState = {
  isLoading: false,
  pokemonList: [],
}

const pokemon = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LIST_REQUEST:
    return {
        ...state,
        isLoading: true,
      }
    case actionTypes.LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonList: action.payload.results
      }
    case actionTypes.LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    default:
      return state
  }
}

export default pokemon