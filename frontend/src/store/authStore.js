import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;



export const useAuthStore = create(persist((set) => ({
	user: null,
	isAuthenticated: false,
	isVerified:false,
	error: null,
	isLoading: false,
	isCheckingAuth: false,
	message: null,

	fetchUser: async () => {
		set({ isCheckingAuth: true });
		try {
			const response = await axios.get(`${API_URL}/me`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false});
		} catch (error) {
			set({ user: null, isAuthenticated: false, isCheckingAuth: false ,isVerified: false});
			console.error("Error fetching user data", error);
		}
	},

    updateUser: async (updatedData) => {
        try {
            const response = await axios.put(`${API_URL}/update-profile`, updatedData, {
                withCredentials: true,
            });
            set({ user: { ...response.data.user }, message: response.data.message });
            return response.data.message;
        } catch (error) {
            console.error("Error updating user data", error);
            set({ error: error.response?.data?.message || "Error updating profile" });
            throw error;
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
			alert("You've Been Logged In! Please Verify Yourself By Entering The OTP Sent On Your Mail.")
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			if (error.response?.data?.alert) {
				alert(error.response.data.alert);
			}
			throw error;
		}
	},

	 handleVerifyOtp :async (email,otp) => {
		try {
		    const response = await axios.post('http://localhost:3000/otp/verify-otp', { email, otp });
			console.log(response);
			if(response.data.success==true){
				set({
					isAuthenticated:true,
					isVerified: true,
				// user: response.data.user,
				// error: null,
				// isLoading: false,
				
			    });
			}
		    else{
				set({
					isAuthenticated:false,
					isVerified:false,
				})
				console.log("otp not verified");
			}
	
		} catch (error) {
			set({
				isAuthenticated:false,
				isVerified:false,
			})
		    throw error;
		}
	  },

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false ,isVerified: false});
			alert("You've Been Logged Out")
			location.reload()
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
}),
{
	name:"auth-store",
	partialize:(state) => ({
		isAuthenticated:state.isAuthenticated,
		isVerified:state.isVerified,
		user:state.user,
	}),
}
)
);