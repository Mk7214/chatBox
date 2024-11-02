import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-3 my-2">
      <div className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Message..."
          className="input input-bordered rounded-lg p-2 border-accent w-full max-w-xs"
        />
        <button type="submit" className="btn btn-circle">
          <IoSend className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
