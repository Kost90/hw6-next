import { ImageList, ImageListItem, Skeleton } from '@mui/material'

const Loader = () => {
  return (
    <ImageList cols={4} gap={16}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ImageListItem key={index}>
          <Skeleton animation="wave" variant="rectangular" width={280} height={280} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export { Loader }
