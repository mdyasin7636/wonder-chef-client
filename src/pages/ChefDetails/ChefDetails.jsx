import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const [chefInfo, setChefInfo] = useState({});
  const { chef_picture, chef_name, bio, experience, recipes_number, likes, rating, recipes } = chefInfo;
  console.log(chefInfo);

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
        <p className="text-gray-600 mb-2">Bio: {bio}</p>
        <div className="flex items-center mb-2">
          {/* <i className="fas fa-heart text-red-500 mr-2"></i> */}
          <p>Experience: {experience}</p>
        </div>
        <div className="flex items-center mb-2">
          {/* <i className="fas fa-utensils text-green-500 mr-2"></i> */}
          <p>Famous for: {recipes_number} Recipes</p>
        </div>
        <div className="flex items-center mb-2">
          {/* <i className="fas fa-clock text-yellow-500 mr-2"></i> */}
          <p>Likes: {likes}</p>
        </div>
        <div className="flex items-center mb-2">
          {/* <i className="fas fa-clock text-yellow-500 mr-2"></i> */}
          <p>Rating: {rating}</p>
        </div>
        <div className="flex items-center mb-2 ">
          {/* <i className="fas fa-clock text-yellow-500 mr-2"></i> */}
          <button>Favorite </button>
        </div>
      </div>
        </div>

        {/*  recipes container */}

        <div>
        <h3 className="text-center text-4xl mt-4 mb-4">Recipes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {chefInfo.recipes?.map((recipe, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h4 className="text-lg font-medium">Name: {recipe.name}</h4>
        <ul className="my-2"> Ingredients:
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700"> {ingredient}</li>
          ))}
        </ul>
        <p className="text-gray-600 ">CookingMethod: {recipe.cookingMethod}</p>
      </div>
    </div>
  ))}
</div>
  

        </div>

    </div>
  );
};

export default ChefDetails;
