/* eslint-disable no-unused-vars */
import SignUp from "./SignUp.jsx"
import Appbar from "./Appbar.jsx"
import SignIn from "./SignIn.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx";
import CourseRecoil from "./CourseRecoil.jsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App(){
  return <div style={{width:'100vw', height:'100vh', backgroundColor:'#eeee'}}>
    {/* <Appbar/>
    <SignUp/> */}
    <RecoilRoot>
    <Router>
    <Appbar/>
      <Routes>
           {/**for to use "useNavigate" hook in router, we must set it up in the ROUTES */}
          <Route path="/courses/:courseid" element={<CourseRecoil></CourseRecoil>}></Route>
          {/**This is above is how we route a DYNAMIC PAGE, the ":courseid" is dynamic,
              the route can be /courses/1,  /courses/123, /courses/23,... etc
           */}
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/addcourse" element={<Addcourse/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
  </div>
}
