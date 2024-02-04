import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import { FlexBox } from '../generic/flexbox.styled'

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="left">
      {'Copyright © '}
      {/* <Link
        color="inherit"
        href="https://mui.com/">
        Your Website
      </Link> */}
      {new Date().getFullYear()}
    </Typography>
  )
}

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'backgrund.paper', p: 6 }} component="footer">
      <FlexBox justifyContent="center" alignItems="flex-start" gap={3}>
        <Box
          sx={{
            opacity: '85%',
          }}
        >
          <Image src="/assets/uva-logo.png" width={80} height={80} alt="Picture of the author" />
        </Box>

        <Box>
          <Typography variant="h6" align="left">
            University of Amsterdam | Data Systems Project
          </Typography>
          <Typography variant="subtitle1" align="left" color="text.secondary" component="p">
            Group D2 | TNO | Board Game Rules Norm Extractor
          </Typography>
          <Copyright />
        </Box>
      </FlexBox>
    </Box>
  )
}
