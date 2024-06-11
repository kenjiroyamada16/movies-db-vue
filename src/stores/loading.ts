import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",

  state: () => ({
    loading: false,
  }),

  getters: {
    isLoading: (state) => state.loading,
  },

  actions: {
    setLoading(isLoading: boolean) {
      this.$patch({
        loading: isLoading,
      })
    }
  }
})