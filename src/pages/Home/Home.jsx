import React from "react";
import chefImage from "../../assets/chefImage.jpg";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "./ChefsCard";


const Home = () => {

  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <div>
      {/* banner section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800">
        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8 p-10 text-white">
          <h1 className="text-4xl font-bold">Welcome to Wonder Chef</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mattis volutpat libero vitae iaculis. Nam euismod convallis enim,
            sed molestie nisl faucibus et.
          </p>
        </div>
        <div className="w-full md:w-auto p-6">
          <img
            src={chefImage}
            alt="Chef"
            className="w-full h-auto mx-auto md:mx-0 rounded-2xl "
          />
        </div>
      </div>
      {/* chef section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-1 md:mx-12">
        {
          chefs.map(chefsInfo => <ChefsCard
          key={chefsInfo.id}
          chefsInfo={chefsInfo}
          ></ChefsCard>)
        }
      </div>
    </div>
  );
};

export default Home;
