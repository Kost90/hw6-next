import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import JsonPlaceholderAPI, {
  Posts,
} from "@/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import DeletePostForm from "./DeletePostForm";

const FIELDS = [
  { name: "Titel", key: "title" },
  { name: "Body", key: "body" },
] satisfies {
  name: string;
  key: keyof Pick<Posts, "userId" | "id" | "title" | "body">;
}[];

interface PostDetailsProps {
  params: {
    id: number;
  };
}

const PostDetails = async ({ params: { id } }: PostDetailsProps) => {
  const post = await JsonPlaceholderAPI.getPost({
    id: Number(id),
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Post Details
      </Typography>
      {post && (
        <List>
          {FIELDS.map((field) => (
            <ListItem key={field.key}>
              <ListItemText primary={field.name} secondary={post[field.key]} />
            </ListItem>
          ))}
        </List>
      )}
      <DeletePostForm id={post.id}/>
    </>
  );
};

export default PostDetails;
