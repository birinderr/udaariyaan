import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;



export const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	fetchUser: async () => {
		try {
			const response = await axios.get(`${API_URL}/me`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ user: null, isAuthenticated: false, isCheckingAuth: false });
			console.error("Error fetching user data", error);
		}
	},
	
	signup: async (email, password, cpassword) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, cpassword });

			if (response.data.alert) {
				alert(response.data.alert);
			}

			if (response && response.data && response.data.user) {
				set({ user: response.data.user, isAuthenticated: true, isLoading: false });
				alert("Your Account Has Been Created Successfully !")
				location.reload()
			}
			else {
				throw new Error("Unexpected response structure");
			}
		} catch (error) {
			const errorMessage = error.response?.data?.message || "Error signing up";
			set({ error: errorMessage, isLoading: false });

			if (error.response?.data?.alert) {
				alert(error.response.data.alert);
			}
			throw error;
		}
	},

	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
			if (response.data.alert) {
				alert(response.data.alert);
			}
			alert("You've Been Logged In")
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			if (error.response?.data?.alert) {
				alert(error.response.data.alert);
			}
			throw error;
		}
	},

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
			alert("You've Been Logged Out")
			location.reload()
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
}));