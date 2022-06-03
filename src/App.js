import { useEffect, useState } from "react";
import "./App.css";
import TableItem from "./Component/TableItem";

function App() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const user = await fetch("https://jsonplaceholder.typicode.com/comments");
    const parsedData = await user.json();
    setData(parsedData);
  };
  useEffect(() => {
    fetchdata();
  });

  return (
    <>
      <div className="container">
        <TableItem data={data} />
      </div>
    </>
  );
}

export default App;
