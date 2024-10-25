import React from "react";

const Content = ({ title = "موضوع مقاله", body = "محتوا" }) => {
  return (
    <div className="p-4">
      <h1 className="font-black font-yekanbakh"> {title} </h1>
      <div className="p-px border-blue-500 border-t border-b">
        <p className="font-yekanbakh-md text-justify text-xs m-2">{body}</p>
      </div>
    </div>
  );
};

export default Content;
