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
        {chefs.map((chefsInfo) => (
          <ChefsCard key={chefsInfo.id} chefsInfo={chefsInfo}></ChefsCard>
        ))}
      </div>

      {/* review section */}
      <div>
        <div className="text-center mt-6">
          <h2 className="text-5xl">What People Are Saying</h2>
          <p className="text-lg">
            Demoralized by the charms of pleasure of the moment so blinded
            except to some advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
      </div>

      {/* blogs section */}
      <div>
      <div className="text-center mt-6">
          <h2 className="text-5xl">CHEF'S CHOICE</h2>
          <p className="text-lg">
            Fresh food & good moods
          </p>
          <p className="text-lg">
            Demoralized by the charms of pleasure of the moment so blinded
            except to some advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    
  </div>
        </div>
        <div className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    
  </div>
        </div>
        <div className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    
  </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
