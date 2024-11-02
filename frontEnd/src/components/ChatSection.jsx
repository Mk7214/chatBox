import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";

const ChatSection = () => {
  const noChatSelected = false;
  return (
    <div className=" flex flex-col w-full border border-slate-500 ml-1 bg-neutral bg-opacity-30 rounded-xl">
      {!noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 ">
            <span className="label-text">Avatar</span>
            <span className="label-text">Name</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ChatSection;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
