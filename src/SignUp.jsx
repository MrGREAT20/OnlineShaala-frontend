import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SignUp(){
    const [username, setuser] = useState("");
    const [password, setpassword] = useState("");
    function callback2(data){
        localStorage.setItem("token", data.token);
        console.log(data.token);
    }
    function callback1(res){
        res.json().then(callback2);
    }
    return <div>
                <div style={{
                    paddingTop:150,
                    marginBottom:10,
                    display: 'flex',
                    justifyContent: 'center',
                }}> <Typography variant='h6'>Welcome to OnlineShaala. Sign Up below</Typography></div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Card variant="outlined" style={{width:400, padding: 20}}>
                    {/*The most imp thing this SignUp div should have is a INPUT BOX*/}
                            <TextField fullWidth id="username" label="username" variant='outlined' onChange={(e) => {
                                setuser(e.target.value)
                            } }/>
                            <br></br><br></br>
                            <TextField fullWidth id="password" label="password" variant='outlined' type='password' onChange={(e) => {
                                setpassword(e.target.value)
                            }}/>
                            <br></br>
                            <br></br>
                            <Button size="large" variant="contained" onClick={() => {
                                fetch('http://localhost:3000/admin/signup', {
                                    method:'POST',
                                    body:JSON.stringify({
                                        username, password
                                    }),
                                    headers:{
                                        "Content-type" : "application/json"
                                    }
                                    /*
                                    In the Fetch API, when you send an HTTP request, you can include headers to provide 
                                    additional information about the request. One common header is the "Content-type" header, 
                                    which specifies the format or type of data you are sending in the request body.*/
                                }).then(callback1);
                            }}>SignUp</Button>
                    </Card>
                    </div>
        </div>
}