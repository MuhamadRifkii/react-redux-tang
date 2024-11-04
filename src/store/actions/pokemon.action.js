import axios from 'axios'
import { actionTypes } from '../actionTypes'

const baseUrl = `https://pokeapi.co/api/v2`

export function getPokemonListResult(params) {

  return (dispatch) => {
    dispatch({ type: actionTypes.LIST_REQUEST, payload: params})
    return axios
      .get(`${baseUrl}/pokemon`, { params })
      .then((response) => {
        dispatch({
          type: actionTypes.LIST_SUCCESS,
          payload: response?.data,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.LIST_FAILED })
        throw err.response
      })
  }
}
