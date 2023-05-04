import React from "react";
import chefImage from "../../assets/chefImage.jpg";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "./ChefsCard";

const Home = ({loading}) => {

  if(loading) {
    return <progress className="progress w-56"></progress>
}

  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <div>
      {/* banner section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800">
        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8 p-8 text-white">
          <h1 className="text-4xl font-bold">Hey There, Foodie!</h1>
          <p className="mt-4">
          Discover the Art of French Cuisine with Our Top French Chefs - A Celebration of the Finest Culinary Talent and Traditions from Across France. From Classic French Dishes to Modern Innovations, our Chefs will Take You on a Gastronomic Journey Unlike Any Other.
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
          <h2 className="text-3xl font-bold ">Review's From Top Michelin Star Chefs</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 px-6">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="mt-2 ml-5">
              <img className="rounded-xl" src="https://i.ibb.co/PCWVxvV/gordon-ramsay.jpg" />
            </figure>
            <div className="card-body">
              <p>"The foie gras terrine was a true masterpiece. The foie gras was perfectly cooked, with a silky texture and rich, buttery flavor. The accompanying fig compote added a lovely sweetness that balanced out the richness of the foie gras. It was a truly decadent dish that exemplified the best of French cuisine." - Gordon Ramsay</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="mt-2 ml-5">
              <img className="rounded-xl"src="https://i.ibb.co/x8rBy98/Sanjeev-Kapoor.jpg" />
            </figure>
            <div className="card-body">
              <p>"The duck confit was absolutely delicious. The duck was tender and flavorful, with crispy skin that was perfectly rendered. The accompanying lentils and bacon added a nice earthiness and smokiness that complemented the duck really well. It was a classic French dish executed to perfection." - Sanjeev Kapoor</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="mt-2 ml-5">
              <img className="rounded-xl" src="https://i.ibb.co/NjDQ3zm/Peter-Gilmore.jpg" />
            </figure>
            <div className="card-body">
              <p>"The bouillabaisse was outstanding. The broth was rich and flavorful, with a complex mix of herbs and spices that really elevated the dish. The addition of perfectly cooked seafood made it a truly luxurious dish. It was a wonderful representation of the best of Provençal cuisine." - Peter Gilmore</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="mt-2 ml-5">
              <img  className="rounded-xl" src="https://i.ibb.co/wC7KNtP/Yoshihiro-Murata.jpg" />
            </figure>
            <div className="card-body">
              <p>"The crème brûlée was the best I've ever had. The custard was silky and smooth, with a lovely vanilla flavor that wasn't too overpowering. The caramelized sugar on top was perfectly done, with just the right amount of crackle. It was a perfect ending to a wonderful French meal." - Yoshihiro Murata</p>
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
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 ">
        <div className="card w-96 glass">
  <figure><img src="https://i.ibb.co/TwZz9bc/Tuna-Nicoise.jpg"/></figure>
  <div className="card-body">
    <h2 className="card-title">Tuna Nicoise</h2>
  </div>
        </div>
        <div className="card w-96 glass">
  <figure><img src="https://i.ibb.co/YkmpyDt/Steak-Diane.jpg"/></figure>
  <div className="card-body">
    <h2 className="card-title">Steak Diane</h2>
  </div>
        </div>
        <div className="card w-96 glass">
  <figure><img src="https://i.ibb.co/HTWRmN0/Beef-Bourgugnon.jpg"/></figure>
  <div className="card-body">
    <h2 className="card-title">Beef Bourguignon</h2>
  </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
