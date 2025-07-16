import React, { useState } from "react";
import { Container,Paper,Typography,TextField , Button , Avatar,IconButton,Stack} from "@mui/material";
import { CameraAlt as CameraAltIcon} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation  } from "6pp";
import { usernameValidator } from "../utils/validators";


const Login = () => {
    const [ isLogin, setisLogin] = useState(true);
    const toggleLogin = () => setisLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const Username = useInputValidation("" , usernameValidator);
    const password = useInputValidation("");
    // const password = useStrongPassword("");

    const avatar = useFileHandler("single",)
    const handleLogin = (e) =>{
        e.preventDefault();
    };
    const handleSignUp = (e) => {
        e.preventDefault(); 
    }

    return (
        <div 
        style={ {
            backgroundImage:
            "linear-gradient(rgb(255 255 209), rgb(249 159 159 ))",
        }} >
    <Container component = {"main"} maxWidth = "xs" sx={{ height:"100vh" , display: "flex", alignItems: "center",justifyContent:"Center",}} >
        <Paper elevation = {3} sx = {{padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
            { isLogin ?(
                <>
                <Typography variant = "h5"> Login</Typography>
                <form  style={{ width: "40%" , marginTop: "1rem"}} 
                    onSubmit={handleLogin}
                > 
                    <Stack position={"relative"} width={"100rem"} margin={"auto"}>
                        <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain",}} src= {avatar.preview}/>
                        <IconButton 
                        sx={{
                            position:"absolute", bottom:"0", right:"0", color:"white", bgcolor:"rgba(0,0,0,0.5)",":hover":{ bgcolor:"rgba(0,0,0,0.7)"},
                        }} component= "lebel"
                        >
                            <>
                            <CameraAltIcon/>
                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                            </>
                        </IconButton>
                    </Stack>
                         {avatar.error && (
                            <Typography m={"1rem"} width={"fit-content"} display={"block"} color="error" variant="caption">
                                {avatar.error}
                            </Typography>
                        )}
                    <TextField required fullWidth label = "Username" margin = "normal" variant = "outlined" value={Username.value} onChange={Username.changeHandler} />
                    <TextField required fullWidth label = "Password" type = "password" margin = "normal" variant = "outlined" value={password.value} onChange={password.changeHandler} />
                    <Button sx = {{ marginTop : "1rem",}} varient = "contained" color = "primary" type = "sumbit" fullWidth> Login</Button>
                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                    <Button fullWidth varient = "text" onClick = { toggleLogin }> Sign Up Instead </Button>
                </form>
                </>
            ) : (
            
                    <>
                <Typography variant = "h5"> Sign Up</Typography>
                <form  style={{ width: "100%" , marginTop: "1rem"}}
                    onSubmit = {handleSignUp}
                > 
                    
                    <Stack position={"relative"} width={"10rem"} margin={"auto"}></Stack>
                    <Avatar sx={{width:"10rem", height:"10rem", objectFit:"contain",}} src={avatar.preview}/>
                    <TextField required fullWidth label = "Name" margin = "normal" variant = "outlined" value={name.value} onChange={name.changeHandler} />
                      <TextField required fullWidth label = "Bio" margin = "normal" variant = "outlined" value={bio.value} onChange={bio.changeHandler}/>
                    <TextField required fullWidth label = "Username" margin = "normal" variant = "outlined" value={Username.value} onChange={Username.changeHandler}  />

                    {Username.error && (
                        <Typography color="error" variant="caption">
                            {Username.error}
                        </Typography>
                    )}
                    <TextField required fullWidth label = "Password" type = "password" margin = "normal" variant = "outlined" value={password.value} onChange={password.changeHandler} />
                    <Button sx = {{ marginTop : "1rem",}} varient = "contained" color = "primary" type = "sumbit" fullWidth> Sign Up</Button>
                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                    <Button fullWidth varient = "text" onClick = { toggleLogin }> Login Instead </Button>
                </form>
                </>
            )}
            </Paper>
     </Container>
     </div>
   );
};
export default Login;
