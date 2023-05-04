import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = ({loading}) => {
  const [chefInfo, setChefInfo] = useState({});
  const { chef_picture, chef_name, bio, experience, recipes_number, likes, rating, recipes } = chefInfo;
  console.log(chefInfo);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const notify = () => {
    toast("Wow! This is now Your Favorite Recipe");
    setIsFavorite(true); 
  }
  
  if(loading) {
    return <progress className="progress w-56"></progress>
}

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-mdyasin111.vercel.app/${id}`)
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, [id]);

  if(!chefInfo?.chef_name){
    return <h1>No data found</h1> 
  }

  return (
    <div>
        <div className="flex items-center justify-center bg-gray-100 p-8">
      <div className="flex items-center">
        <img src={chef_picture} alt="Chef" className="w-3/4 rounded-full mr-8" />
      </div>
      <div className="flex flex-col justify-center pr-32">
        <h1 className="text-3xl font-bold mb-4">Name: {chef_name}</h1>
        <p className="font-semibold mb-2">Bio: {bio}</p>
        <div className="flex items-center mb-2">
          <p className="font-semibold mb-2">Experience: {experience}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-semibold mb-2">Famous for: {recipes_number} Recipes</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-semibold mb-2">Likes: {likes}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-semibold mb-2">Rating: {rating} Star</p>
        </div>
        <div className="flex items-center mb-2 ">
          <button className="btn btn-primary" disabled={isFavorite} onClick={notify}>Favorite </button>
          <ToastContainer />
        </div>
      </div>
        </div>

        {/*  recipes container */}

        <div>
        <h3 className="text-center font-bold text-5xl mt-10 mb-10">Recipes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 ">
  {chefInfo.recipes?.map((recipe, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-stone-900">
      <div className="p-4">
        <h4 className="text-lg font-medium"> Recipe Name: {recipe.name}</h4>
        <ul className="my-4 font-semibold"> Ingredients:
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700"> {ingredient}</li>
          ))}
        </ul>
        <p className="font-semibold">Cooking Method: {recipe.cookingMethod}</p>
      </div>
    </div>
  ))}
</div>
  

        </div>

    </div>
  );
};

export default ChefDetails;
