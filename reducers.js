import { combineReducers } from 'redux';
import { ADD_PLANT_TO_CART, REMOVE_PLANT_FROM_CART, INCREMENT_PLANT_QUANTITY, DECREMENT_PLANT_QUANTITY } from './actions';
 
const initialState = {
  cart: [],
  plants: [
    { id: 1, name: 'Snake Plant', price: 10.99 },
    { id: 2, name: 'Spider Plant', price: 8.99 },
    { id: 3, name: 'ZZ Plant', price: 12.99 },
    { id: 4, name: 'Pothos', price: 9.99 },
    { id: 5, name: 'Dracaena', price: 11.99 },
    { id: 6, name: 'Philodendron', price: 13.99 },
  ],
};
 
const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_PLANT_TO_CART:
      return [...state, action.plant];
    case REMOVE_PLANT_FROM_CART:
      return state.filter((plant) => plant.id !== action.plant.id);
    case INCREMENT_PLANT_QUANTITY:
      return state.map((plant) => {
        if (plant.id === action.plant.id) {
          return { ...plant, quantity: plant.quantity + 1 };
        }
        return plant;
      });
    case DECREMENT_PLANT_QUANTITY:
      return state.map((plant) => {
        if (plant.id === action.plant.id) {
          return { ...plant, quantity: plant.quantity - 1 };
        }
        return plant;
      });
    default:
      return state;
  }
};
 
const plantReducer = (state = initialState.plants) => {
  return state;
};
 
export default combineReducers({
  cart: cartReducer,
  plants: plantReducer,
});