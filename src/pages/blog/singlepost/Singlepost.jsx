import React, { useEffect, useState } from "react";
import Content from "./Content";
import PostLeftSidebar from "./PostLeftSidebar";
import axios from "axios";

const postAPI = 'https://aradcomputer.net/wp-json/wp/v2/posts'

const Singlepost = () => {
  const [title, setTtile] = useState("")

  const handleAPI = () => {
    axios.get(postAPI).then((res) => {
      const t = res.data[0].title.rendered
      setTtile(t)
      console.log(t)
    }
    )
  }

  
  useEffect(()=>{
    handleAPI()
  },[])
  
  return (
    <div dir="rtl" className="flex flex-row gap-4 mx-auto">
      <div className="bg-slate-200 w-4/5 rounded-lg">
        <Content title={title} />
      </div>
      <div className="bg-gray-100 w-1/5 rounded-lg">
        <PostLeftSidebar />
      </div>
    </div>
  );
};

export default Singlepost;
