import { Box, Typography, Paper, Container, Grid, Button } from '@mui/material'

import { Chart } from '@/components/data/chart'
import Sentences from '@/components/data/sentences'
import { SingleStat } from '@/components/data/single-stat'

export default function ModelData() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* <Box display="flex" pb={3} alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
          <Box flex={{ xs: '1', md: '40%' }}>
            <Typography
              fontWeight="bold"
              mb={2}
              style={{
                marginTop: '20px',
                fontSize: '1.2rem',
                lineHeight: '1.5',
              }}
            >
              Explore the insights from our dataset on
              <a
                href="https://www.kaggle.com/datasets/arnabchaki/data-science-salaries-2023"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#007BFF',
                  marginLeft: '5px',
                  textDecoration: 'none',
                }}
              >
                Kaggle
              </a>
              .
            </Typography>
            <Typography variant="body2" mb={2}>
              A snapshot of our dashboard is also included in this page, which offers a comprehensive view of the most relevant
              information for informed decision-making. It provides a concise and user-friendly way to present complex data,
              allowing users to monitor trends, make data-driven decisions, and gain a quick understanding of important metrics.
            </Typography>
            <Typography variant="body2" mb={1}>
              Its purpose is to make the dataset more easily understandable, so the user can more easily sort or filter through
              our dataset. To sort or filter through the dataset below, hover over the first row and click on the horizontal three
              dots.
            </Typography>
          </Box>
        </Box> */}
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Single Stat */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <SingleStat />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Sentences />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4} mt={2}>
          <Button variant="outlined" color="success">
            Retrain Model
          </Button>
        </Grid>
      </Container>
    </>
  )
}
