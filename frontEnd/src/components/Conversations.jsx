import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="flex overflow-auto bg-primary bg-opacity-10 rounded-lg mt-2 p-1 flex-col gap-1">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
