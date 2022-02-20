import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Coins from "./componets/Coins";
import Navebar from "./componets/Navebar";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoin] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        //console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
