import { combineReducers } from 'redux'
import pokemon from './pokemon.reducer'

const appReducer = combineReducers({
  pokemon,
})

const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer