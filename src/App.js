import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import NoMatchPage from "./components/NoMatchPage";
// import { DataProvider } from "./contexts/userContexts";
let usingJsonServer = true;
const initialVal = {
  data: null,
  review: null,
  summary: null,
};
function App() {
  const dataRef = useRef(initialVal);
  // const [dataRef, setDataRef] = useState(initialVal);
  useEffect(() => {
    if (usingJsonServer) {
      fetch("http://localhost:7000/data")
        .then((response) => response.json())
        .then((json) => {
          dataRef.current.data = json;
          // setDataRef((oldDataRef) => {
          //   return { ...oldDataRef, data: json };
          // });
        });
      fetch("http://localhost:7000/summary")
        .then((response) => response.json())
        .then((json) => {
          dataRef.current.summary = json;
          // setDataRef((oldDataRef) => {
          //   return { ...oldDataRef, summary: json };
          // });
        });
      fetch("http://localhost:7000/review")
        .then((response) => response.json())
        .then((json) => {
          dataRef.current.review = json;
          // setDataRef((oldDataRef) => {
          //   return { ...oldDataRef, review: json };
          // });
        });
    } else {
      fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((json) => {
          dataRef.data = json.data;
          dataRef.summary = json.summary;
          dataRef.review = json.review;
        });
    }
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
        <Route path="/" element={<HomePage />} />
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
