import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export const GameCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>This is a media card. You can use this section to describe the content.</Typography>
      </CardContent>
    </Card>
  )
}
