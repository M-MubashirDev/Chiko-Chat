import { IoSend } from "react-icons/io5";
function Type() {
  return (
    // style={{ minHeight: "cal(92vh-15vh)" }}
    <>
      <div className="flex h-full justify-center text-center space-x-3 items-center  bg-gray-900 ">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full  grow outline-none bg-gray-800"
          />
        </div>
        <button className="text-3xl">
          <IoSend />
        </button>
      </div>
    </>
  );
}

export default Type;
