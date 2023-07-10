import chefImage from "../../assets/chefImage.jpg";
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800 pb-10">
        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8 p-8 text-white">
          <h1 className="text-4xl font-bold">Hey There, Foodie!</h1>
          <p className="mt-4 font-semibold">
          Discover the Art of French Cuisine with Our Top French Chefs - A Celebration of the Finest Culinary Talent and Traditions from Across France. From Classic French Dishes to Modern Innovations, our Chefs will Take You on a Gastronomic Journey Unlike Any Other.
          </p>
        </div>
        <div className="w-full md:w-auto p-6">

          <LazyLoad>
          <img
            src={chefImage}
            alt="Chef"
            className="w-full h-auto mx-auto md:mx-0 rounded-2xl"
          />
          </LazyLoad>

        </div>
      </div>
    );
};

export default Banner;