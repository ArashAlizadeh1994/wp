import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Buttom from "./components/buttom/Button";
import Singlepost from "./pages/blog/singlepost/singlepost";
import Header from "./components/header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header />
      <div className="w-11/12 mx-auto mt-2">
        <Singlepost />
      </div>
    </>
  );
}

export default App;
