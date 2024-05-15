// import React, { useState } from 'react';
// import { 
//   Container, 
//   Typography, 
//   TextField, 
//   Button, 
//   Link, 
//   Box, 
//   Grid, 
//   IconButton, 
//   FormControl,
//   InputAdornment,
//   ThemeProvider,
//   createTheme,
  
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import GoogleIcon from '@mui/icons-material/Google';
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1769aa',
//     },
//     secondary: {
//       main: '#f50057'
//     }
//   },
// });

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleClickShowPassword = () => setShowPassword(!showPassword);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const loginWithGoogle = () => {
//     console.log("Button clicked");
//     window.open("http://localhost:6005/auth/google/callback", "_blank");
//   };

//   const loginPlain = async (username, password) => {
//     if (!username || !password) {
//       window.alert('Please enter correct username and password');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:6005/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//       });

//       if (response.status === 200) {
//         console.log("button clicked");
//         window.open("http://localhost:5175", "_blank");
//       } else {
//         window.alert('Invalid username or password');
//       }
//     } catch (error) {
//       window.alert('Invalid username or password');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           background: 'linear-gradient(180deg, #2c387e, #1769aa)',
//           minHeight: '90vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Container maxWidth="xs">
//           <Box
//             sx={{
//               backgroundColor: 'rgba(255, 255, 255, 0.8)',
//               boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
//               borderRadius: '8px',
//               padding: '32px',
//             }}
//           >
//             <Typography variant="h5" component="h1" align="center" height={80} fontWeight="bold" sx={{ fontWeight: 'bold', mt:2}}>
//               LOGIN
//             </Typography>
//             <form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                    color="primary" 
//                     fullWidth
//                     label="Username"
//                     variant="filled"
//                     autoComplete="username"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     required
//                     className='textfield'
//                     InputProps={{ style: { backgroundColor: '#a9b8c2' } }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControl fullWidth ariant="filled">
//                     <TextField
//                     color="primary"
//                       label="Password"
//                       type={showPassword ? 'text' : 'password'}
//                       variant="filled"
//                       value={password}
//                       onChange={handlePasswordChange}
//                       required
//                       InputProps={{
//                         style: { backgroundColor: '#a9b8c2' },
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               aria-label="toggle password visibility"
//                               onClick={handleClickShowPassword}
//                               onMouseDown={handleMouseDownPassword}
//                               edge="end"
//                               color='primary'
//                             >
//                               {showPassword ? (<VisibilityOff /> ) : (<Visibility /> )}

//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </FormControl>
//                 </Grid>
//               </Grid>
//               <Button
//                 fullWidth
//                 type="button"
//                 variant="contained"
//                 color="primary"
//                 fontWeight="bold"
//                 sx={{ mt: 2 }}
//                 onClick={() => loginPlain(username, password)}
//               >
//                 Login
//               </Button>
//               <Grid container justifyContent="center" sx={{ mt: 2 }}>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Grid container justifyContent="center" sx={{ mt: 2 }}>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Button
//                 fullWidth
//                 type="button"
//                 variant="contained"
//                 color="secondary"
//                 sx={{ mt: 3, mr: 2 }}
//                 startIcon={<GoogleIcon />}
//                 onClick={loginWithGoogle}
//               >
//                 SIGN IN WITH GOOGLE
//               </Button>
//             </form>
//           </Box>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default Login