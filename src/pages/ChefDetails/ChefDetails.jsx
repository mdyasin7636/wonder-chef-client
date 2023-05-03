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
        <h3>Recipes</h3>

        {chefInfo.recipes?.map((recipe, index) => (
          <div key={index}>
            <h4>{recipe.name}</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.cookingMethod}</p>
          </div>
        ))}    

        </div>

    </div>
  );
};

export default ChefDetails;
