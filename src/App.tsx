import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../src/App/styles/App.scss";
import MainRouter from "./MainRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <MainRouter />
    </>
  );
}

export default App;
