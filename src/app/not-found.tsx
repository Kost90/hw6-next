import Link from 'next/link'

import { Typography } from '@mui/material'

const NotFound = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Page not found
      </Typography>
      <p>The page you are looking does not exist.</p>
      <Link href="/">Go to the home page</Link>
    </div>
  )
}

export default NotFound
