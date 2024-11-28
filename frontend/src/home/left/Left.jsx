import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div
      className="w-[28%] 
       grid grid-cols-1 grid-rows-[52px,15vh,auto,4vh]
      h-full
      bg-gray-900 text-white"
    >
      <h1 className="font-bold  text-3xl p-2 px-11">chat</h1>
      <Search />
      {/* <hr /> */}
      <Users></Users>
      <div className="bg-gray-800 h-full"></div>
    </div>
  );
}

export default Left;
