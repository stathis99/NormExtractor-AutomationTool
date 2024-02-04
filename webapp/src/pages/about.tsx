import React from 'react'

import { Typography, Box } from '@mui/material'

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Simple Game Rules
      </Typography>

      <Typography variant="h4" gutterBottom>
        Our Purpose
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        We do have a purpose.
      </Typography>
    </Box>
  )
}

export default AboutPage
