"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Reviews from "../components/Reviews";
import List from "../components/List";
import Stepsection from "../components/Stepsection";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
     <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded bg-gray-700 text-white hover:bg-gray-900 clicked-btn"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Header />
      <Slider />
      <HeroSection />
      <Cards />
      <Reviews />
      <List />
      <Stepsection />
    </div>
  );
}


