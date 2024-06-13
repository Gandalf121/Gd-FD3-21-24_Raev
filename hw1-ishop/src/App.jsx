import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Table } from "./Components/table/Table";

function App() {
  const [data, setData] = useState([]);
  const product = [
    {
      name: "TV",
      price: "100$",
      img: "https://dummyimage.com/60x60/000/fff&text=Test",
      count: "11",
    },
    {
      name: "Xbox",
      price: "100$",
      img: "https://dummyimage.com/60x60/000/fff&text=Test",
      count: "22",
    },
    {
      name: "phone",
      price: "100$",
      img: "https://dummyimage.com/60x60/000/fff&text=Test",
      count: "33",
    },
  ];

  useEffect(() => {
    setData(product);
  }, [product]);

  return (
    <>
      <Table
        name={"Название магазина"}
        data={data}
        width={"500px"}
        height={"500px"}
      />
    </>
  );
}

export default App;
