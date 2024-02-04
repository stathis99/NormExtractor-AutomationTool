import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { Title } from '@/components/common/generic/title'

// Generate Order Data
function createData(id: number, sentence: string, accuracy: number) {
  return { id, sentence, accuracy }
}

const rows = [
  createData(0, '20 Questions is a classic game that has been redone with new people, places, and things.', 18),
  createData(1, '20 Questions has creative clues that the whole family can enjoy together.', 14),
  createData(
    2,
    'The object of 20 Questions is to correctly identify well-known people, places and things through a series of clues.',
    57,
  ),
  createData(
    3,
    'Kids and parents may not know the answers to the same questions, so this is a great game for the entire family.',
    85,
  ),
  createData(
    4,
    'If you feel the itch to play detective and ask a bunch of questions then play 20 Questions with the entire family today.',
    75,
  ),
]

export default function Sentences() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Sentence</TableCell>
            {/* <TableCell>Accuracy</TableCell> */}
            <TableCell align="right">Accuracy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, sentence, accuracy }) => (
            <TableRow key={id}>
              <TableCell>{sentence}</TableCell>
              {/* <TableCell>{accuracy}</TableCell> */}

              <TableCell align="right">{`${accuracy} %`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
