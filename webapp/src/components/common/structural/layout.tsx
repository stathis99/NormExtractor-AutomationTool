import { PropsWithChildren } from 'react'

import { Box, Container, ThemeProvider, Toolbar, createTheme, useTheme } from '@mui/material'

import { Footer } from './footer'
import { Navbar } from './navbar'

export default function Layout({ children }: PropsWithChildren) {
  const theme = useTheme()
  const defaultTheme = createTheme()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Toolbar />
      <Box
        style={{
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(6),
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Footer />
    </ThemeProvider>
  )
}
