import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import ChefChoice from "../ChefChoice/ChefChoice";
import AboutUs from "../AboutUs/AboutUs";
import Partners from "../Partners/Partners";
import ChefsCard from "./ChefsCard";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }

  const chefs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="font-bold text-5xl text-center mt-10">Our Chefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-1 md:mx-12 mt-6">
          {chefs.map((chefsInfo) => (
            <ChefsCard key={chefsInfo.id} chefsInfo={chefsInfo}></ChefsCard>
          ))}
        </div>
      </div>
      <Review></Review>
      <ChefChoice></ChefChoice>
      <AboutUs></AboutUs>
      <Partners></Partners>
    </div>
  );
};

export default Home;
