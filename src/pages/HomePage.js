import React from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import MealsList from "../components/MealsList";

function HomePage() {
  return (
    <>
      <Header />
      <Summary />
      <MealsList />
    </>
  );
}

export default HomePage;
