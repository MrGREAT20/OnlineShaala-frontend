import SignUp from "./SignUp.jsx"
import Appbar from "./Appbar.jsx"
import SignIn from "./SignIn.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Addcourse from "./Addcourse.jsx";
export default function App(){
  return <div style={{width:'100vw', height:'100vh', backgroundColor:'#F5F7F8'}}>
    {/* <Appbar/>
    <SignUp/> */}
    <Router>
    <Appbar/>
      <Routes>
           {/**for to use "useNavigate" hook in router, we must set it up in the ROUTES */}
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/addcourse" element={<Addcourse/>}/>
      </Routes>
    </Router>
  </div>
}
