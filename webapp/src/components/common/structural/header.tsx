import React from 'react'

import { Typography, styled, useTheme } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', // Display columns on small screens
  alignItems: 'center', // Center items on small screens
  gap: theme.spacing(5), // Adjust the gap as needed
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Switch back to row layout on medium screens and above
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
}))

const Column = styled('div')(({ theme }) => ({
  flex: '1 1 40%', // 40% of the available space on small screens
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 40%', // 1/3 of the available space on medium screens and above
  },
}))

const Header = () => {
  const theme = useTheme() // Add this line to get the theme

  return (
    <Container theme={theme}>
      <Column>
        <Typography variant="h3" fontWeight="bold" color="textPrimary" gutterBottom>
          Simple Game Rules
        </Typography>

        <Typography variant="body1" fontWeight="300">
          We do have a purpose.
        </Typography>
      </Column>
    </Container>
  )
}

export default Header
