import React from "react";

const Content = ({ title = "موضوع مقاله", body = "محتوا" }) => {
  return (
    <div className="p-4 shadow-2xl border-blue-500">
      <h1 className="font-black text-3xl font-yekanbakh"> {title} </h1>
      <div className="p-px pt-5 border-blue-500 border-t border-b">
        <p className="font-yekanbakh-md text-justify m-2">{body}</p>
      </div>
    </div>
  );
};

export default Content;
