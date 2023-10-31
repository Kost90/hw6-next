'use client'

import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'
import JsonPlaceholderAPI, { User } from "@/api/JsonPlaceholderAPI/JsonPlaceholderAPI";

interface EditUserDetailsProps {
  params: {
    userId: string;
  }
}

const EditUser = ({params: { userId }}: EditUserDetailsProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchUser = async () => {
      try {
        const user = await JsonPlaceholderAPI.getUser({ signal: controller.signal, userId: Number(userId) })
        setUser(user)
      } catch (e) {
        console.log('isAborted', controller.signal.aborted);
        if (!controller.signal.aborted) {
          console.log('Error', e)
        }
      }
    }
    fetchUser()

    return () => {
      controller.abort()
    };
  }, [userId]);

  if (!user) {
    return null
  }


  return (
    <>
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <Card>
        <CardContent>
          <form>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="name" name="name" label="Name" fullWidth defaultValue={user.name} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <OutlinedInput id="email" name="email" label="E-mail" fullWidth defaultValue={user.email} required />
              </FormControl>
            </Box>
            <Button variant={'contained'} type="submit" color={'primary'}>
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default EditUser;
