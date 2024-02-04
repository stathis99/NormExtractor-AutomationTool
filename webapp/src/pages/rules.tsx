/* eslint-disable no-unused-vars */
// pages/rules/index.tsx

import React, { useState } from 'react'

import { TextField, Button } from '@mui/material'
import Link from 'next/link'
import router from 'next/router'
import toast from 'react-hot-toast'

import { FlexBox } from '@/components/common/generic/flexbox.styled'
import { parseRules } from '@/helpers/parse-rules'
import { Frames } from '@/types/frames'

type ResponseData = {
  backendData: Array<backendData>
  successMsg: boolean
}

type backendData = {
  sentence: string
  frames: object
}

const exampleRules =
  "If the other players can't do so, then on the original player's next turn, they may pair up their 5 with the 2 and the 3. Before gameplay can begin, a caller must be selected. The caller shuffles both decks and then passes out five cards, faced up, to each player."
const AddRules = () => {
  const [text, setText] = useState('')
  const [gameTitle, setGameTitle] = useState('')
  const [error, setError] = useState('')
  const [responseData, setResponseData] = useState<ResponseData>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    setGameTitle(event.target.value)
    setError('') // clear error message when user types
  }

  const handleGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameTitle(event.target.value)
  }

  const AddExampleRules = () => {
    setGameTitle('Monopoly')
    setText(exampleRules)
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (text.trim() === '') {
      setError('Please enter some text before submitting.')
    } else {
      const toastId = toast.loading('Fetching data from API')

      const parsedRules = parseRules(text)

      // Only clear the text and error if the text is not empty
      setText('')
      setError('')

      try {
        const response = await fetch('/api/handle-list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rules: parsedRules }),
        })

        if (!response.ok) {
          throw new Error(`There was an error ${response.status}`)
        }

        const data = await response.json()

        // Create a new object with game title and details
        const newGameDetails = {
          game: gameTitle,
          details: data.backendData.map(({ sentence, frames }: { sentence: any; frames: any }) => ({
            sentence,
            frames,
          })),
        }

        // Check if there are existing game details in localStorage
        let existingGameDetails = JSON.parse(localStorage.getItem('gameDetails') || '[]')

        // If existingGameDetails is an array, append the new game, else create a new array with the new game
        if (Array.isArray(existingGameDetails)) {
          existingGameDetails.push(newGameDetails)
        } else {
          existingGameDetails = [newGameDetails]
        }

        // Store the updated array in localStorage
        localStorage.setItem('gameDetails', JSON.stringify(existingGameDetails))

        setResponseData(data)

        router.push('/frame-viewer')

        toast.success('Retrieval successful.', { id: toastId })
      } catch (error: any) {
        setError(error.message)
        toast.error(error.message, { id: toastId })
      }
    }
  }

  return (
    <div>
      <FlexBox flexDirection="column" alignItems="flex-end" gap={2}>
        <TextField
          id="game-title"
          label="Game Title"
          fullWidth
          value={gameTitle}
          placeholder="Game title"
          onChange={handleGameChange}
        />
        <TextField
          id="outlined-textarea"
          label="Add Game Rules"
          placeholder="Game rule 1. Game rule 2."
          fullWidth
          multiline
          minRows={5}
          onChange={handleChange}
          value={text}
          error={!!error}
        />
        <FlexBox gap={2}>
          <Button variant="outlined" onClick={AddExampleRules}>
            Add example rules
          </Button>

          <Link href="/frame-viewer" passHref>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </FlexBox>
      </FlexBox>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  )
}

export default AddRules
