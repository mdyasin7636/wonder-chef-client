import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = ({ loading }) => {
  const [chefInfo, setChefInfo] = useState({});
  const {
    chef_picture,
    chef_name,
    bio,
    experience,
    recipes_number,
    likes
  } = chefInfo;
  console.log(chefInfo);
  const [isFavorite, setIsFavorite] = useState(false);

  const notify = () => {
    toast("Wow! This is now Your Favorite Recipe");
    setIsFavorite(true);
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-mdyasin111.vercel.app/${id}`)
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, [id]);

  if (!chefInfo?.chef_name) {
    return <div>No Data Found</div>;
  }

  return (
    <div>
      {/* chef section */}
      <div class="grid grid-cols-2 items-center justify-items-center">
        <div class="flex justify-center mt-12">
          <img src={chef_picture} class="rounded-full w-3/6 ml-40"/>
        </div>
        <div class="p-10">
          <p class="text-3xl font-bold mb-4">{chef_name}</p>
          <p className="font-bold mb-2 pr-16">
            Bio: <span className="font-semibold">{bio}</span>
          </p>
          <p class="font-bold mb-2">
            Experience: <span className="font-semibold">{experience}</span>
          </p>
          <p class="font-bold mb-2">
            Famous for:
            <span className="font-semibold">{recipes_number} Recipes</span>
          </p>
          <p class="font-bold mb-2">
            Likes: <span className="font-semibold">{likes}</span>
          </p>
        </div>
      </div>

      {/*  recipes section */}

      <div>
        <h3 className="text-center font-bold text-5xl mt-10 mb-10">Recipes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
          {chefInfo.recipes?.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-double  border-4 border-gray-800">
              <div className="p-4">
                <h4 className="text-lg font-bold"> {recipe.name}</h4>
                <ul className="my-4 font-bold ">
                  Ingredients:
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="font-semibold ml-5 mt-1 list-disc">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <p class="font-bold mb-2">
            Rating: <span className="font-semibold">{recipe.rating} Star</span>
              </p>
                <p className="font-bold">Cooking Method:</p>
                <p className="font-semibold mt-2">{recipe.cookingMethod}</p>
                <button
            class="btn btn-outline mt-4"
            disabled={isFavorite}
            onClick={notify}>
            Favorite
          </button>
          <ToastContainer/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
