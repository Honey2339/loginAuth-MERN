import React from 'react'
import {Link} from 'react-router-dom' 
import { Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useSignOut } from 'react-auth-kit'

function Navbar() {

  const signOut = useSignOut()

  return (
    <Flex bgColor="gray.400" padding="10px" gap="10px" justify="center">

      <Heading>Project</Heading>

      <Spacer />

      <Button colorScheme='purple'><Link to='/login'>Log in</Link></Button>
      <Button colorScheme='purple'><Link to='/login' onClick={()=>signOut()}>Log Out</Link></Button>
      <Button colorScheme='purple'><Link to='/signup'>Sign up</Link></Button>
    </Flex>
  )
}

export default Navbar