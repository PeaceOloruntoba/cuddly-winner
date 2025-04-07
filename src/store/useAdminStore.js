import { create } from "zustand";
import axios from "axios";
import axiosInstance from "../utils/axiosConfig";


const useAdminStore = create((set, get) => ({
  token: null,
  testimonies: [],
  loading: false,
  error: null,
  singleTestimony: null,

  setToken: (newToken) => set({ token: newToken }),
  clearToken: () => set({ token: null }),

  fetchTestimonies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/testimonies`, {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });
      set({ testimonies: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching testimonies:", error);
      set({
        error: error.message || "Failed to fetch testimonies",
        loading: false,
      });
    }
  },

  submitTestimony: async (name, testimony) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post(`/testimonies`, {
        name,
        testimony,
      });
      set({ loading: false });
      return response.data;
    } catch (error) {
      console.error("Error submitting testimony:", error);
      set({
        error: error.message || "Failed to submit testimony",
        loading: false,
      });
      throw error;
    }
  },

  loginAdmin: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });
      set({ token: response.data.token, loading: false });
      return true;
    } catch (error) {
      console.error("Login error:", error);
      set({ error: "Invalid credentials", loading: false });
      return false;
    }
  },

  getTestimonyById: (id) => {
    set({
      singleTestimony: get().testimonies.find(
        (testimony) => testimony._id === id
      ),
    });
    return get().singleTestimony;
  },
}));

export default useAdminStore;
