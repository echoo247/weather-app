import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage.tsx";
import ListPage from "./pages/List/ListPage.tsx";
import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.main}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/list"
            element={<ListPage />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
