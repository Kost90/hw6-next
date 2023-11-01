import { List, ListItem, ListItemText, Typography } from "@mui/material";
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';

const Comments = async () => {
const comments = await JsonPlaceholderAPI.getComments({signal:new AbortController().signal, cache: 'no-cache'})

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <List>
      {comments.map(coment => (
        <ListItem key={coment.id} alignItems="flex-start">
          <ListItemText primary={coment.name} secondary={
                <>
                  <Typography variant="subtitle1">{coment.email}</Typography>
                  {coment.body}
                </>
              }/>
        </ListItem>
      ))}
      </List>
      </>
  );
};

export default Comments;
