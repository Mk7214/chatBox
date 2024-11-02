import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center p-1 hover:bg-accent rounded cursor-pointer bg-base-100 bg-opacity-30">
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">Username</p>
            <span className="text-xl">🍈</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1 rounded-xl "></div>
    </>
  );
};

export default Conversation;
