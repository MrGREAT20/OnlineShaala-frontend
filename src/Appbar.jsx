import { Typography, Button} from "@mui/material";
import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Appbar(){
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    useEffect(function(){
        async function fetchme(){
            const res = await fetch("http://localhost:3000/admin/me", {
                method:"GET",
                headers:{"authorization" : "Bearer " + localStorage.getItem("token")} 
            });
            const data = await res.json();
            if(data.username){
                setUsername(() => data.username);
            }
        }

        fetchme();
    }, []);

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
            <div>{username===null ? <Button variant="text" size="small" onClick={()=>{
                navigate("/register")
            }}>SignUp</Button> : <div>{username}</div>}</div>
            <div>{username === null ? <Button variant="text" size="small" style={{paddingRight:'30px'}} onClick={() => {
                navigate("/login")
            }}>SignIn</Button> : <Button variant="text" size="small" style={{paddingRight:'30px'}} onClick={() => {
                setUsername(() => null);
                localStorage.setItem("token", null);
            }}>LogOut</Button>}</div>
        </div>

    </div>
}