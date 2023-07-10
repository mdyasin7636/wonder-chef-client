
const ChefChoice = () => {
    return (
        <div>
        <div className="text-center mt-16">
          <h2 className="text-5xl font-bold">Chefs Choice</h2>
          <p className="text-lg mt-4 font-semibold">Fresh Food & Good Moods</p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 mt-16 md:ml-9 mb-16">
          <div className="card w-96 glass">
            <figure>
              <img src="https://i.ibb.co/TwZz9bc/Tuna-Nicoise.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tuna Nicoise</h2>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="https://i.ibb.co/YkmpyDt/Steak-Diane.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Steak Diane</h2>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="https://i.ibb.co/HTWRmN0/Beef-Bourgugnon.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Beef Bourguignon</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChefChoice;