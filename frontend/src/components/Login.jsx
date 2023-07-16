import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import React from 'react'
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'

function Login() {

  const toast = useToast();
  const signIn = useSignIn();
  const [redirect , setRedirect] = React.useState(false);

  function handleSubmit(e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const res = axios.post('http://localhost:5050/api/login', {email,password})
    .then((res) =>{
      const token = res.data.token
      signIn({
        token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: {email : email}
      })
      setRedirect(true , toast({
        title: 'Login Successful',
        description: 'Redirecting in 3 seconds...',
        status: 'success',
        duration: 3000,
        isClosable: true
      }))
      setTimeout(()=>{window.location.href = "http://localhost:5173/content"}, 4000)
    })
    .catch((err) =>{
      console.log(err)
    })

  }

  return (
    <Box p={4} mx="auto" height="90vh" justifyContent="center" alignItems="center" display="flex">
      <form onSubmit={handleSubmit}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" name="email"/>
      </FormControl>

      <FormControl id="password" mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      
      <Button 
      type="submit" 
      colorScheme="blue" 
      mt={4}
      >Login</Button>
      </form>
    </Box>
  )
}

export default Login