/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/**
 * 
 * This COMPONENT  is to DISPLAY THE CLICKED COURSE, but this will not work as in MONGODB
 * the courseId 's type is ObjectId and here we are passing the "courseid" as a string
 * and in the backend, the api "/courses/:courseid" thinks courseid as a string
 */
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Card , Typography, TextField, Button} from "@mui/material";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';
  
export default function CourseRecoil(){
    const {courseid} = useParams(); 
    const setCourse = useSetRecoilState(coursesState); //we used this hook provided by recoil to SET value
    useEffect(function(){
        async function fetchCousewithId(){
            const res = await fetch(`http://localhost:3000/admin/courses`, {
                method:"GET",
                headers: {
                    "authorization" : "Bearer " + localStorage.getItem("token")
                }
            });
            const data = await res.json();
            setCourse(data.courses);
        }
        fetchCousewithId();
    }, []);
    return <div>
        <CourseCard courseId={courseid} />
        <UpdateCard courseId={courseid} />
    </div>
}
function UpdateCard(props) {
    /**THIS COMPONENT ALSO SUBSCRIBES TO THE STATE */
    console.log("hi there from update card")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [courses, setCourse] = useRecoilState(coursesState);

    console.log("UpdateCard rerendered");
    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{width: 400, padding: 20}}>
    <Typography>Update course details</Typography>
    <TextField
        onChange={(e) => {
            setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Title"
        variant="outlined"
    />

    <TextField
        onChange={(e) => {
            setDescription(e.target.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"
    />

    <TextField
        onChange={(e) => {
            setImage(e.target.value)
        }}
        fullWidth={true}
        label="Image link"
        variant="outlined"
    />

    <Button
        size={"large"}
        variant="contained"
        onClick={() => {
            function callback2(data) {
                let updatedCourses = [];
                for (let i = 0; i<courses.length; i++) {
                    if (courses[i].seq == props.courseid) {
                        updatedCourses.push({
                            title: title,
                            description: description,
                            imageLink: image
                        })
                    } else {
                        updatedCourses.push(courses[i]);
                    }
                }
                setCourse(updatedCourses);
            }
            function callback1(res) {
                res.json().then(callback2)
            }
            fetch("http://localhost:3000/admin/courses/" + props.courseId, {
                method: "PUT",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    imageLink: image,
                    published: true
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(callback1)
        }}
    > Update course</Button>
    </Card>
</div>
}
function CourseCard(props) {
    
    /**This COMPONENT SUBSCRIBES TO THE STATE */
    const courses = useRecoilValue(coursesState)
    let course = null;
    for (let i = 0; i<courses.length; i++) {
        if (courses[i].id == props.courseId) [
            course = courses[i]
        ]
    }
    console.log("coursecard rerendered");

    if (!course) {
        return "loading..."
    }

    return <div style={{display: "flex", justifyContent: "center"}}>
     <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>

        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
    </Card>
    </div>
}
/**You can create an atom anywhere and only THOSE components who have SUBSCRIBED to the ATOM will be 
 * re-rendered and not every component
 */
const coursesState = atom({
    key:'coursesState', // unique ID (with respect to other atoms/selectors)
    default:'', // default value (aka initial value)
});