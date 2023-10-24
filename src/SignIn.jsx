import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function SignIn(){
    return <div>
                <div style={{
                    paddingTop:150,
                    marginBottom:10,
                    display: 'flex',
                    justifyContent: 'center',
                }}> <Typography variant='h6'>Welcome Back, Sign in below</Typography></div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Card variant="outlined" style={{width:400, padding: 20}}>
                    {/*The most imp thing this SignUp div should have is a INPUT BOX*/}
                            <TextField fullWidth id="outlined-basic" label="username" variant='outlined'/>
                            <br></br><br></br>
                            <TextField fullWidth id="outlined-basic" label="password" variant='outlined' type='password'/>
                            <br></br>
                            <br></br>
                            <Button size="large" variant="contained">SignIn</Button>
                    </Card>
                    </div>
        </div>
}