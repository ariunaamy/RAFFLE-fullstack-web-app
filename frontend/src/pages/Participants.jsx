// flowbite components
import { List, ListItem, Avatar } from "flowbite-react";

import PropTypes from "prop-types";

// icons
import { IoSearch } from "react-icons/io5";
import { FaAward, FaPhone } from "react-icons/fa";

const participants = [
  {
    name: "Mike",
    id: 1,
    email: "mike@gmail.com",
    phone: "777 777 7777",
    winner: true,
  },
  {
    name: "Mike",
    id: 2,
    email: "mike@gmail.com",
    phone: "777 777 7777",
    winner: false,
  },
  {
    name: "Mike",
    id: 3,
    email: "mike@gmail.com",
    phone: "777 777 7777",
    winner: false,
  },
];
const Participants = () => {
  return (
    <div>
      <h1 className="mx-7 py-2 text-lg font-bold">Participants</h1>
      {/* search bar */}
      <form className="max-w-lg mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 ps-3 text-sm text-gray-900 border-[0.5px] border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="absolute inset-0 flex items-center justify-end px-2 text-gray-500 focus:outline-none"
          >
            <IoSearch className="" size="20px" />
          </button>
        </div>
      </form>
      <List
        unstyled
        className="flex flex-col gap-2 max-w-lg my-3 mx-auto divide-y divide-gray-200"
      >
        {participants.map((participant) => (
          <ItemList key={participant.id} participant={participant} />
        ))}
      </List>
    </div>
  );
};

const ItemList = ({ participant }) => {
  ItemList.propTypes = {
    participant: PropTypes.object.isRequired,
  };

  return (
    <ListItem className="py-3 sm:pb-4 border-b-1 border-slate-400">
      <div className="flex justify-between items-center space-x-4 rtl:space-x-reverse">
        <Avatar
          img="/images/profile-image.jpg"
          alt="profile image"
          rounded
          size="lg"
        >
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
              {participant.name}
            </p>
            <h2>#{participant.id}</h2>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {participant.email}
            </p>
            <p className="flex gap-1 truncate text-sm text-gray-500 dark:text-gray-400">
              <FaPhone size="10px" className="my-auto" />
              {participant.phone}
            </p>
          </div>
        </Avatar>
        {participant.winner && (
          <div className="inline-flex items-center text-base font-semibold text-purple-500">
            <FaAward size="20px" />
          </div>
        )}
      </div>
    </ListItem>
  );
};

export default Participants;
