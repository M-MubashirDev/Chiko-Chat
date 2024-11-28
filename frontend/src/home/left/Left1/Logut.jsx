import { TbLogout2 } from "react-icons/tb";

function Logout() {
  return (
    <div
      className="w-[4.5%]   bg-slate-800 text-white flex flex-col items-center
    justify-end"
    >
      <div className="py-3">
        <form action="">
          <div className="flex space-x-3">
            <button>
              <TbLogout2 className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
