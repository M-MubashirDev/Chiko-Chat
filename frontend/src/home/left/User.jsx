function User() {
  return (
    <div className="flex border-b border-slate-800 space-x-4 px-6 py-4 hover:bg-slate-600 duration-300 cursor-pointer">
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="font-bold">chiko</h1>
        <span>chiko@gmail.com</span>
      </div>
    </div>
  );
}

export default User;
