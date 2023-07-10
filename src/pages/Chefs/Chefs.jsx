import { useLoaderData } from "react-router-dom";
import ChefsCard from "../Home/ChefsCard";


const Chefs = () => {

    const chefs = useLoaderData();

    return (
        <div>
        <h2 className="font-bold text-5xl text-center mt-10">Our Chefs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-1 md:mx-12 mt-6">
        {chefs.map((chefsInfo) => (
          <ChefsCard key={chefsInfo.id} chefsInfo={chefsInfo}></ChefsCard>
        ))}
      </div>
      </div>
    );
};

export default Chefs;