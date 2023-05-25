import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./components/Books/Books";
import PadreDetail from "./components/BookDetail/PadreDetail";



import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import FormLogin from "../src/components/FormLogin/FormLogin";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/login" element={<FormLogin />} />

          <Route path="/notes" element={<Notes />} />
          <Route path="/noteDetail" element={<PadreDetail />} />
          <Route path='/notes' element={<ProtectedRoute> <Notes /> </ProtectedRoute>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;