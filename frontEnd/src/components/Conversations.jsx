import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex overflow-auto bg-primary bg-opacity-10 rounded-lg mt-2 p-1 flex-col gap-1">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          lastIndex={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
