import storyImg from '../../../src/assets/ratatouille.jpg'

const AboutUs = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">Who We Are</h2>
        <p className="text-lg mt-4 font-semibold">
          Everything You Want to Know
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-8">
        <div className='flex flex-col justify-center items-center text-center px-4'>
          <h2 className="text-4xl font-bold">Out Story</h2>
          <p className="text-3xl font-semibold mt-1">We Aim to Inspire</p>
          <p className="font-semibold mt-1">At our core, we are passionate food enthusiasts who believe that culinary experiences have the power to transcend boundaries and bring people together. Our journey began with a shared love for French cuisine, renowned for its artistry and flavors. Inspired by the culinary traditions of France, we embarked on a mission to showcase the brilliance of French chefs and their creations.</p>
        </div>
        <div className='px-2'>
          <img className='rounded-md' src={storyImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
