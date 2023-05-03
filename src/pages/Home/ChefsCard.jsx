import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ChefsCard = ({chefsInfo}) => {

    const {id, chef_picture, chef_name, experience, recipes_number, likes} = chefsInfo
    const navigate = useNavigate();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={chef_picture}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{chef_name}</h2>
            <p>Experience: {experience}</p>
            <p>Famous for: {recipes_number} Recipes</p>
            <p>Likes: {likes}</p>
            <div className="card-actions">
                 <button onClick={()=> navigate(`/chefDetails/${id}`)} className="btn btn-primary">View Recipes</button>
            </div>
          </div>
        </div>
    );
};

export default ChefsCard;