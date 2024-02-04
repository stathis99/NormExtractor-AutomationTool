import { getLocalStorage } from '@/helpers/local-storage'
import { NextApiRequest, NextApiResponse } from 'next'

export const submitFrame = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { sentencesAndFrames } = req.body
      const rulesList: string[] = []

      // console.log(sentencesAndFrames)

      const payload = [
        {
          game: 'Monopoly',
          details: [
            {
              sentence:
                "If the other players can't do so, then on the original player's next turn, they may pair up their 5 with the 2 and the 3.",
              frames: {
                acts: [
                  {
                    id: '887b4f51-e83b-4334-97bd-b600baf87d8b',
                    act: 'may pair ',
                    actor: 'they ',
                    action: 'may pair ',
                    object: 'up their 5 with the 2 and the 3 ',
                    recipient: '',
                    preconditions: ['ece6d4b5-ee68-424c-a4ca-9987d248b55b'],
                    create: [],
                    terminate: [],
                    sources: [],
                    explanation: '',
                  },
                ],
                facts: [
                  {
                    id: 'ece6d4b5-ee68-424c-a4ca-9987d248b55b',
                    fact: "if the other players can t do so on the original player ' s next turn ",
                    function: [],
                    sources: [],
                    explanation: '',
                  },
                ],
                duties: [],
              },
            },
            {
              sentence: 'Before gameplay can begin, a caller must be selected.',
              frames: {
                acts: [
                  {
                    id: 'a97ded88-96c2-4114-82e2-184bf7332982',
                    act: 'must be selected ',
                    actor: '',
                    action: 'must be selected ',
                    object: '',
                    recipient: 'a caller ',
                    preconditions: [],
                    create: ['63f752f3-bd9e-4f8a-80a5-617ecd9214d2'],
                    terminate: [],
                    sources: [],
                    explanation: '',
                  },
                ],
                facts: [
                  {
                    id: '63f752f3-bd9e-4f8a-80a5-617ecd9214d2',
                    fact: 'before gameplay can begin ',
                    function: [],
                    sources: [],
                    explanation: '',
                  },
                ],
                duties: [],
              },
            },
            {
              sentence: 'The caller shuffles both decks and then passes out five cards, faced up, to each player.',
              frames: {
                acts: [
                  {
                    id: '3ef686dd-abea-4ffe-bbf6-9941a55019e5',
                    act: 'shuffle ##s passes ',
                    actor: 'the caller player ',
                    action: 'shuffle ##s passes ',
                    object: 'both decks out five cards faced up to each ',
                    recipient: '',
                    preconditions: [],
                    create: [],
                    terminate: [],
                    sources: [],
                    explanation: '',
                  },
                ],
                facts: [],
                duties: [],
              },
            },
          ],
        },
      ]

      console.log(payload)
      // const sentencesAndFrames = getLocalStorage('sentencesAndFrames')

      // Send a POST request to the backend
      const backendUrl = 'http://localhost:8000/save_data'
      const backendResponse = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (backendResponse.ok) {
        // Backend successfully processed the rules
        const backendData = await backendResponse.json()
        res.status(200).json({ success: true, backendData })
      } else {
        // Backend returned an error
        console.error('Backend error:', backendResponse.statusText)
        res.status(500).json({ success: false, error: 'Backend Error' })
      }
    } catch (error) {
      console.error('Error processing rules:', error)
      res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }
}

export default submitFrame
