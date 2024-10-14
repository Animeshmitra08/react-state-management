import { create } from "zustand";

export const useCartStore = create((set)=>({
    cart : [],
    addToCart : (product) => set((state)=>({cart : [...state.cart, product]})),
    removeFromCart: (productId) => set((state)=>({cart: state.cart.filter(product => product.id !== productId)})),
    clearAll: () => set({ cart: []}),
}));


const saveAuthToStorage = (user, token) => {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
};
const loadAuthFromStorage = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return {
        user: user ? JSON.parse(user) : null,
        token: token || null,
        isAuthenticated: !!token,
    };
};

export const useUserStore = create((set)=>({
    ...loadAuthFromStorage(),
    
    login: (userData, token) => {
        saveAuthToStorage(userData, token);
        set({
            user: userData,
            token: token,
            isAuthenticated: true,
        });
    },
    
    logout: () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        set({
            user: null,
            token: null,
            isAuthenticated: false,
        });
    },
}))