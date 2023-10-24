/* eslint-disable no-unused-vars */
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function Addcourse(){
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [imageLink, setImage] = useState("");
    function callback2(data){
        alert("Course Added!")
    }
    function callback1(res){
        res.json().then(callback2);
    }
    return (<div>
                <div style={{
                    paddingTop:150,
                    marginBottom:10,
                    display: 'flex',
                    justifyContent: 'center',
                }}> <Typography variant='h6'>Add Courses here</Typography></div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Card variant="outlined" style={{width:400, padding: 20}}>
                    {/*The most imp thing this SignUp div should have is a INPUT BOX*/}
                            <TextField fullWidth id="title" label="title" variant='outlined' onChange={(e)=>{settitle(e.target.value)}}/>
                            <br></br><br></br>
                            <TextField fullWidth id="description" label="description" variant='outlined' onChange={(e)=>{setdesc(e.target.value)}}/>
                            <br></br>
                            <br></br>
                            <TextField fullWidth id="imagelink" label="image" variant='outlined' onChange={(e)=>{setImage(e.target.value)}}/>
                            <br></br>
                            <br></br>
                            <Button size="large" variant="contained" onClick={() => {
                                fetch('http://localhost:3000/admin/courses', {
                                    method:"POST",
                                    body:JSON.stringify({
                                        title:title, 
                                        description:desc,
                                        imageLink:imageLink,
                                        published:true,
                                    }),
                                    headers:{
                                        "Content-type" : "application/json",
                                        "authorization" : "Bearer " + localStorage.getItem("token")
                                    }
                                }).then(callback1);
                            }}>Add Couse</Button>
                    </Card>
                    </div>
        </div>)
}