import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './scenes/dashboard';
import Meeting from './scenes/meeting';
import WEMeeting from './scenes/wherebyMeet';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/iframe/:meetingNumber" element={<Meeting />}></Route>
      <Route path="/we/:meetingNumber" element={<WEMeeting />}></Route>
    </Routes>
  );
}

export default App;
