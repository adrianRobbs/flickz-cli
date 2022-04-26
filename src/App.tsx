import { Box, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SingleCol from "./components/SingleCol";

function App() {
  return (
    <Routes>
      <Route element={<SingleCol />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
