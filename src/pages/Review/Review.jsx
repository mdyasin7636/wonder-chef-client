
const Review = () => {
  return (
    <div>
    <div className="text-center mt-16">
      <h2 className="text-4xl font-bold ">Review's From Top Michelin Star Chefs</h2>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 px-6">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-xl" src="https://i.ibb.co/PCWVxvV/gordon-ramsay.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"The foie gras terrine was a true masterpiece. The foie gras was perfectly cooked, with a silky texture and rich, buttery flavor. The accompanying fig compote added a lovely sweetness that balanced out the richness of the foie gras. It was a truly decadent dish that exemplified the best of French cuisine." - Gordon Ramsay</p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-xl"src="https://i.ibb.co/x8rBy98/Sanjeev-Kapoor.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"The duck confit was absolutely delicious. The duck was tender and flavorful, with crispy skin that was perfectly rendered. The accompanying lentils and bacon added a nice earthiness and smokiness that complemented the duck really well. It was a classic French dish executed to perfection." - Sanjeev Kapoor</p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-xl" src="https://i.ibb.co/NjDQ3zm/Peter-Gilmore.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"The bouillabaisse was outstanding. The broth was rich and flavorful, with a complex mix of herbs and spices that really elevated the dish. The addition of perfectly cooked seafood made it a truly luxurious dish. It was a wonderful representation of the best of Provençal cuisine." - Peter Gilmore</p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="mt-2 ml-5">
          <img className="rounded-xl" src="https://i.ibb.co/wC7KNtP/Yoshihiro-Murata.jpg" />
        </figure>
        <div className="card-body">
          <p className="font-semibold">"The crème brûlée was the best I've ever had. The custard was silky and smooth, with a lovely vanilla flavor that wasn't too overpowering. The caramelized sugar on top was perfectly done, with just the right amount of crackle. It was a perfect ending to a wonderful French meal." - Yoshihiro Murata</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Review;
