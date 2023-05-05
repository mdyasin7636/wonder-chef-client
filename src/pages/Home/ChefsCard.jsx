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
            <h2 className="card-title font-bold text-2xl">{chef_name}</h2>
            <p className='font-bold'>Experience: <span className='font-semibold'>{experience}</span></p>
            <p className='font-bold'>Famous For: <span className='font-semibold'> {recipes_number} Recipes</span></p>
            <p className='font-bold'>Liked By: <span className='font-semibold'> {likes} People</span></p>
            <div className="card-actions">
                 <button onClick={()=> navigate(`/chefDetails/${id}`)} className="btn btn-outline">View Recipes</button>
            </div>
          </div>
        </div>
    );
};

export default ChefsCard;