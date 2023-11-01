import Link from 'next/link';
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import JsonPlaceholderAPI from "@/api/JsonPlaceholderAPI/JsonPlaceholderAPI";

const Posts = async () => {
  const posts = await JsonPlaceholderAPI.getPosts({
    signal: new AbortController().signal,
    cache: 'no-cache'
  });

  return (
    <>
    <Typography variant="h4" gutterBottom>
      Posts
    </Typography>
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} component={Link} href={`/posts/${post.id}`}>
          <ListItemText primary={post.title} secondary={post.body} />
        </ListItem>
      ))}
    </List>
</>
  );
};

export default Posts;
