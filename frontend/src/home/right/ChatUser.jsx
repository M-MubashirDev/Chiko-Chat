function ChatUser() {
  return (
    <div
      className="flex h-full  pl-4 pt-2
    items-center bg-gray-900   space-x-4 hover:bg-gray-600 duration-300"
    >
      <div>
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">mubashir</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
}

export default ChatUser;
