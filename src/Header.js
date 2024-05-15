// // header.js
// import React, { useEffect,useState } from "react";
// import { AppBar, Toolbar, Typography, Button} from "@mui/material";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import GooglePayButton from '@google-pay/button-react';

// const Headers = () => {
//   const[userdata,setUserdata] = useState({});
//   console.log("response",userdata)
//   const getUser = async()=>{
//     try{
//       const response = await axios.get("http://localhost:6005/login/sucess",{withCredentials:true});
      
//       setUserdata(response.data.user)
//     }catch(error){
//       console.log("error",error)
//      }
//   }
//   const logout =()=>{
//     window.open("http://localhost:6005/logout","_self")
//   }

//   useEffect(()=>{
//     getUser()
//   },[])
//   return (
//     <AppBar position="static" sx={{backgroundColor: '#2c387e'}}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} padding={3}>
//           Finserv
//         </Typography>
//         <Button color="inherit" component={NavLink} to="/" sx={{mr: 3}}>
//           Home
//         </Button>
      
//         {
//           Object?.keys(userdata).length > 0 ? (
//             <>
//             <GooglePayButton 
//         environment="TEST"
//         paymentRequest={{
//           apiVersion: 2,
//           apiVersionMinor: 0,
//           allowedPaymentMethods: [
//             {
//               type: 'CARD',
//               parameters: {
//                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                 allowedCardNetworks: ['MASTERCARD', 'VISA'],
//               },
//               tokenizationSpecification: {
//                 type: 'PAYMENT_GATEWAY',
//                 parameters: {
//                   gateway: 'example',
//                   gatewayMerchantId: 'exampleGatewayMerchantId',
//                 },
//               },
//             },
//           ],
//           merchantInfo: {
//             merchantId: '12345678901234567890',
//             merchantName: 'Demo Merchant',
//           },
//           transactionInfo: {
//             totalPriceStatus: 'FINAL',
//             totalPriceLabel: 'Total',
//             totalPrice: '1',
//             currencyCode: 'USD',
//             countryCode: 'US',
//           },
//           shippingAddressRequired: true,
//           callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
//         }}
//         onLoadPaymentData={paymentRequest => {
//           console.log('Success', paymentRequest);
//         }}
//         onPaymentAuthorized={paymentData => {
//             console.log('Payment Authorised Success', paymentData)
//             return { transactionState: 'SUCCESS'}
//           }
//         }
//         onPaymentDataChanged={paymentData => {
//             console.log('On Payment Data Changed', paymentData)
//             return { }
//           }
//         }
//         existingPaymentMethodRequired='false'
//         buttonColor='white'
//         buttonType='pay'
//         buttonRadius={5}
//       />
//              <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold' }} padding={3}>
//                 {userdata.displayName}
//               </Typography>
//             <Button color="inherit" component={NavLink} to="/dashboard" sx={{mr: 3}}>Dashboard</Button>
//             <Button color="inherit" component={NavLink} to="/dashboard" onClick={logout} sx={{mr: 3}}>logout</Button>
            
//              <img
//              src={userdata?.image}
//              style={{ width: "50px", borderRight: "50%" }}
//              alt=""
//            />
//            </>
//           ):
//           <Button color="inherit" component={NavLink} to="/login">Login</Button>
          
//         }
        
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Headers;