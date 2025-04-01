export const ADD_PLANT_TO_CART = 'ADD_PLANT_TO_CART';
export const REMOVE_PLANT_FROM_CART = 'REMOVE_PLANT_FROM_CART';
export const INCREMENT_PLANT_QUANTITY = 'INCREMENT_PLANT_QUANTITY';
export const DECREMENT_PLANT_QUANTITY = 'DECREMENT_PLANT_QUANTITY';
 
export function addPlantToCart(plant) {
  return { type: ADD_PLANT_TO_CART, plant };
}
 
export function removePlantFromCart(plant) {
  return { type: REMOVE_PLANT_FROM_CART, plant };
}
 
export function incrementPlantQuantity(plant) {
  return { type: INCREMENT_PLANT_QUANTITY, plant };
}
 
export function decrementPlantQuantity(plant) {
  return { type: DECREMENT_PLANT_QUANTITY, plant };
}