import { Link } from "react-router-dom";
import { FaRegCalendarPlus, FaAward } from "react-icons/fa6";

import PropTypes from "prop-types";

const raffles = [
  {
    name: "Raffle 1",
    createdAt: "2021-09-01",
    winnerId: 1,
    raffledOn: "2021-09-01",
  },
  {
    name: "Raffle 2",
    createdAt: "2021-09-01",
    winnerId: 2,
    raffledOn: "2021-09-01",
  },
];

const AllRaffles = () => {
  return (
    <div className="w-full my-4">
      <h1 className=" py-2 text-lg font-bold">All Raffles:</h1>
      <div className="flex flex-col gap-4">
        {raffles.map((raffle, i) => (
          <Raffle key={i} raffle={raffle} />
        ))}
      </div>
    </div>
  );
};

const Raffle = ({ raffle }) => {
  return (
    <Link
      to="#"
      className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {raffle.name}
      </h5>
      <div className="text-sm">
      <p className="flex gap-2"><FaRegCalendarPlus className="my-auto"/>{raffle.createdAt}</p>
      <p className="flex gap-2"><FaAward className="text-purple-500 my-auto"/>Winner Id: {raffle.winnerId}</p>
      {raffle.description && <p className="text-base">{raffle.description}</p>}
      <p>{raffle.raffledOn}</p>
      </div> 
    </Link>
  );
};

Raffle.propTypes = {
  raffle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    winnerId: PropTypes.number.isRequired,
    description: PropTypes.string,
    raffledOn: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllRaffles;
