import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";
import Presence from "./pages/presence/Presence";
import NotFound from "./pages/notfound/NotFound";
import Login from "./pages/login/Login";
import SubjectPresence from "./pages/subjectpresence/SubjectPresence";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/presence/:id" element={<SubjectPresence />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
