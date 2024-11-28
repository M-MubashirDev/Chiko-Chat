import ChatUser from "./ChatUser";
import Messeges from "./Messeges";
import Type from "./Type";

function Right() {
  // flex-col bg-slate-950 text-white h-ful
  return (
    <div className="w-[69%]  grid grid-cols-1 grid-rows-[13vh,auto,12vh]">
      <ChatUser></ChatUser>
      <Messeges></Messeges>
      <Type />
    </div>
  );
}

export default Right;
