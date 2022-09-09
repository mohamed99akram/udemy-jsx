import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NoMatchPage from "./components/NoMatchPage";
// import { DataProvider } from "./contexts/userContexts";
const initialVal = {
  data: null,
  review: null,
  summary: null,
};
function App() {
  // const dataRef = useRef(initialVal);
  const [dataRef, setDataRef] = useState(initialVal);
  useEffect(() => {
      fetch("http://localhost:7000/db")
        .then((response) => response.json())
        .then((json) => {
          // dataRef.current.data = json;
          // setDataRef({ current: { ...dataRef, data: json } })
          setDataRef((oldDataRef) => {
            return { current: json };
          });
        });
  }, []);
  return (
    <>
      {/* <DataProvider
        value={{
          data: dataRef.data,
          summary: dataRef.summary,
          review: dataRef.review,
        }}
      > */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage database={dataRef} />} />
        <Route
          path="/courses/:courseId"
          element={<CoursePage database={dataRef} />}
        />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      {/* </DataProvider> */}
    </>
  );
}

export default App;
