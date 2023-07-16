import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import axios from 'axios'

function Signup() {


  const toast = useToast();
  
  async function handleSubmit(e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const res = await axios.post('http://localhost:5050/api/signup', {email,password})
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Box p={4} mx="auto" height="90vh" justifyContent="center" alignItems="center" display="flex">
    <form onSubmit={handleSubmit}>
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input 
      type="email" 
      name="email"
      
      />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Password</FormLabel>
      <Input type="password" name='password' />
    </FormControl>
    
    <Button 
    type='submit' 
    colorScheme="blue" mt={4}
    >Register</Button>
    </form>
    </Box>
  )
}

export default Signup