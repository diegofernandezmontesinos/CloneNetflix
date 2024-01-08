import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import User from './Components/user/User';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
import Serie from "./Components/Serie/Serie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Serie" element={<Serie />} />
          <Route path="/Error" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);