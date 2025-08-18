import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="border-2 text-black border-gray-200 p-4 flex items-center justify-between">
      {/* Center: Search Bar */}
      <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full ps-4"
        />
      </div>
      {/* Right: User Profile */}
      <section className="flex items-center mr-[5rem]">
        <FaUserCircle className="text-3xl mr-2" />
      </section>
    </div>
  );
};

export default Navigation;
