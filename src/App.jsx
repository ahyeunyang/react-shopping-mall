import React from "react";
import AppRouter from "./routes/Router";
import Header from "./components/Header/Header";
import MobileTab from "./components/MobileTab/MobileTab";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <MobileTab />
    </>
  );
}

export default App;
