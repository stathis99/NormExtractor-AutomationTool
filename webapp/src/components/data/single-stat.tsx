import * as React from 'react'

import Typography from '@mui/material/Typography'

import { Title } from '@/components/common/generic/title'

export const SingleStat = () => {
  return (
    <React.Fragment>
      <Title>Highlights</Title>
      <Typography component="p" variant="h4">
        5128
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Sentences used in training
      </Typography>
      {/* SPLIT */}

      <Typography component="p" variant="h4">
        9761
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Sentences in the database
      </Typography>
    </React.Fragment>
  )
}
