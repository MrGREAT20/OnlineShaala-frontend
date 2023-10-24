import { Typography, Button} from "@mui/material";
import {useNavigate } from "react-router-dom";

export default function Appbar(){
    const navigate = useNavigate();
    return <div style={{display:'flex', justifyContent: 'space-between'}}>
    {/*YOU KNOW HOW FLEXBOX WORKS NOW, YEH UPAR WALA DIV is a PARENT and iske saare bacche abhi SPACE BETWEEN me separate honge*/}


        <div>
            <Typography variant="h6">
                OnlineShaala
            </Typography>
        </div>
        <div style={{display:'flex'}}>
        {/** YEH UPAR WALA DIV, HUMARE PARENT KA DIV KA CHILD HAI, TOH PARENT DIV KA FLEX YEH CURRENT DIV KE BACCHO
                PE AFFECT NHI KAREGA, TOH ISS CURRENT DIV KE BACCHO KO FLEX AFFECT KARNE KE LIYE, YEH CURRENT DIV KO
                BHI DISPLAY:FLEX KARO 
        */}
        {/**
            we used the useNavigate HOOK to navigate from one page to another making it seem like a SPA (single
            page application) because of not refreshing when page changes
        */}
            <div><Button variant="text" size="small" onClick={()=>{
                navigate("/register")
            }}>SignUp</Button></div>
            <div><Button variant="text" size="small" style={{paddingRight:'30px'}} onClick={() => {
                navigate("/login")
            }}>SignIn</Button></div>
        </div>

    </div>
}