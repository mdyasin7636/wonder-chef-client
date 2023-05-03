import React from 'react';

const ChefsCard = ({chefsInfo}) => {

    const {chef_picture, chef_name, experience, recipes_number, likes} = chefsInfo

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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default ChefsCard;