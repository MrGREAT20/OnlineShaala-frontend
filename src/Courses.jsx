/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, Typography } from "@mui/material";
import { useState , useEffect} from "react";

export default function Courses(){
  const [courses, setCourses] = useState([]);
  
  useEffect(function(){
        async function fetchCourses(){
            const res = await fetch("http://localhost:3000/admin/courses", {
                method:"GET",
                headers:{
                    "authorization" : "Bearer " + localStorage.getItem("token")
                }
            });
            const data = await res.json();
            console.log(data);
            setCourses(data.courses);
        }
        fetchCourses();
  }, []);
   //Now from above useEffect my courses state will be populated
  return <div style={{display:'flex', flexWrap:"wrap", justifyContent:"center"}}>
  Courses
  {courses.map(course => { return <Course course={course}/>
  })}
  </div>

}
function Course({course, setCourseId}){
    return <Card style={{margin:10, width:300, minHeight:200}} >
        <Typography variant="h5" textAlign={"center"}>{course.title}</Typography>
        <Typography variant="subtitle1" textAlign={"center"}>{course.description}</Typography>
        <img src={course.imageLink} style={{width:300}}></img>
    </Card>
}   
