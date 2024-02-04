import { NextApiRequest, NextApiResponse } from 'next'

export const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { rules } = req.body
      const rulesList: string[] = []

      rules.map(({ component }: { component: string }) => rulesList.push(component))

      console.log(rulesList)

      // Send a POST request to the backend
      const backendUrl = 'http://localhost:8000/predict_frame'
      const backendResponse = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rulesList),
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

export default apiHandler
