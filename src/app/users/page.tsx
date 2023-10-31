import Link from 'next/link';
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';

const Users = async () => {
  const users = await JsonPlaceholderAPI.getUsers({
    signal: new AbortController().signal,
    cache: 'no-cache'
  });

  console.log({ users })

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} component={Link} href={`/users/${user.id}`}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Users;
