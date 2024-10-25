import React from "react";

const PostLeftSidebar = () => {
  return (
    <div className="flex-row text-sm font-yekanbakh-md">
      <div className="bg-slate-400 rounded-lg p-1">
        <h3 className="font-black border-b">مطالب مرتبط</h3>
        <ul className="pt-3 text-xs">
        <li><a href="#"></a>لینک</li>
        <li><a href="#"></a>a</li>
        <li><a href="#"></a>a</li>
      
        </ul>
      </div>
      <div className="bg-slate-400 mt-5 rounded-lg p-1">
        <h3 className="font-black border-b"> برترین مقالات</h3>
        <a href="#">aaa</a>
      </div>
    </div>
  );
};

export default PostLeftSidebar;
