import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectConversation } = useConversation();

  const isSelected = selectedConversation?.id === conversation.id;

  return (
    <>
      <div
        className={`flex gap-2 items-center p-1 hover:bg-accent rounded cursor-pointer bg-base-100 bg-opacity-30
      ${isSelected ? "bg-accent" : ""}`}
        onClick={() => setSelectConversation(conversation)}
      >
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{conversation.name}</p>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1 rounded-xl "></div>}
    </>
  );
};

export default Conversation;
