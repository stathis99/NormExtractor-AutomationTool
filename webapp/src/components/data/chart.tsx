import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'

import { Title } from '@/components/common/generic/title'

// Generate Sales Data
function createData(time: string, amount: number) {
  return { time, amount }
}

const data = [
  createData('10 Jan', 0),
  createData('12 Jan', 20),
  createData('14 Jan', 25),
  createData('16 Jan', 30),
  createData('18 Jan', 30),
  createData('20 Jan', 70),
  createData('22 Jan', 89),
  createData('24 Jan', 89),
  createData('26 Jan', 98),
]

export const Chart = () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Title>Model Accuracy</Title>

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} style={theme.typography.body2} />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              % Accuracy
            </Label>
          </YAxis>
          <Line isAnimationActive={true} type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
