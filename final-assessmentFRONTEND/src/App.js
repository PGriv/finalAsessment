import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import MainMenu from "./components/MainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>FINAL ASSESSMENT JAVA APP</p>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainMenu />}/>
            <Route path="form" element={<Form />} />
            <Route path="table" element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
