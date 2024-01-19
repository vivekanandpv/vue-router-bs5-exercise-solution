import { defineStore } from "pinia";

const defaultTheme = "light";

localStorage.setItem("theme", defaultTheme);

export const appStore = defineStore("app-store", {
  state() {
    return {
      theme: defaultTheme,
      language: "en",
      loggedIn: false,
    };
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", this.theme);
      document.documentElement.setAttribute("data-bs-theme", this.theme);
    },
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
    changeLanguage(lang: string) {
      this.language = lang;
    },
  },
});
