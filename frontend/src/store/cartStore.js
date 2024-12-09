import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((i) => i._id === item._id);
      if (existingItemIndex !== -1) {
        // If the item already exists, increase its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        return { cart: updatedCart };
      } else {
        // If the item doesn't exist, add it with quantity = 1
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((i) => i._id === id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingItemIndex].quantity > 1) {
          // Decrease the quantity if it's greater than 1
          updatedCart[existingItemIndex].quantity -= 1;
        } else {
          // Otherwise, remove the item entirely
          updatedCart.splice(existingItemIndex, 1);
        }
        return { cart: updatedCart };
      }
      return state;
    }),
}));
