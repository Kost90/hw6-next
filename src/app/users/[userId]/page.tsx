import DeletUserForm from '@/app/users/[userId]/DeletUserForm';
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import JsonPlaceholderAPI, { User } from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import Link from 'next/link';

const FIELDS = [
  { name: 'Name', key: 'name' },
  { name: 'Username', key: 'username' },
  { name: 'Email', key: 'email' },
  { name: 'Phone', key: 'phone' },
  { name: 'Website', key: 'website' },
] satisfies { name: string; key: keyof Pick<User, 'name' | 'username' | 'email' | 'phone' | 'website'> }[]

interface UserDetailsProps {
  params: {
    userId: string;
  }
}

const UserDetails = async ({ params: { userId } }: UserDetailsProps) => {
  const user = await JsonPlaceholderAPI.getUser({
    userId: Number(userId),
  })

  return (
    <>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      {user && (
        <Card>
          <CardContent>
            <List>
              {FIELDS.map((field) => (
                <ListItem key={field.key}>
                  <ListItemText primary={field.name} secondary={user[field.key]} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box mt={2} display="flex" flexDirection="row">
        <Box mr={2}>
          <Button component={Link} variant="contained" color="primary" href={`${user.id}/edit`}>
            Edit User
          </Button>
        </Box>
        <DeletUserForm userId={userId} />
      </Box>
    </>
  );
};

export default UserDetails;
