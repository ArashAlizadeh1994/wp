import React from "react";

const PostLeftSidebar = () => {
  return (
    <div className="flex-row fixed w-60 text-2xl font-yekanbakh-md">
      <div className="bg-slate-100 shadow-2xl rounded-lg p-1">
        <h3 className="font-black border-b">مطالب مرتبط</h3>
        <ul className="pt-3">
          <li>
            <a href="#">لینک</a>
          </li>
          <li>
            <a href="#">a</a>
          </li>
          <li>
            <a href="#">a</a>
          </li>
        </ul>
      </div>
      <div className="bg-slate-100 mt-5 shadow-2xl rounded-lg p-1">
        <h3 className="font-black border-b"> برترین مقالات</h3>
        <a href="#">aaa</a>
      </div>
    </div>
  );
};

export default PostLeftSidebar;
