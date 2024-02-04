import { FC, useState, useEffect } from 'react'
import { Chip, Container, Divider, Grid } from '@mui/material'
import Link from 'next/link'

import SearchBar from '@/components/common/generic/search-bar'
import { GameCard } from '@/components/game-card/game-card'
import { titleToSlug } from '@/helpers/slug'

interface Game {
  title: string
  image?: string
}

const Home: FC = () => {
  const [games, setGames] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedGames = localStorage.getItem('gameDetails')
    if (storedGames) {
      const gameDetailsArray = JSON.parse(storedGames)
      const gamesArray = gameDetailsArray.map((gameDetail: { game: any }) => ({
        title: gameDetail.game,
        image: `https://picsum.photos/seed/${gameDetail.game}/300/200`,
      }))
      setGames(gamesArray)
    }
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const storedGames = localStorage.getItem('gameDetails')
    if (storedGames) {
      const gameDetailsArray = JSON.parse(storedGames)
      const filteredGames = gameDetailsArray
        .filter(({ game }: { game: any }) => game.toLowerCase().includes(term.toLowerCase()))
        .map((gameDetail: { game: any }) => ({
          title: gameDetail.game,
          image: `https://picsum.photos/seed/${gameDetail.game}/300/200`,
        }))
      setGames(filteredGames)
    }
  }

  return (
    <Container maxWidth="lg">
      <SearchBar onSearch={handleSearch} />
      <Divider
        sx={{
          my: 2,
        }}
      >
        <Chip label="Games" size="small" />
      </Divider>
      <Grid container spacing={4}>
        {games.map(({ title, image }) => (
          <Grid item key={title} xs={12} sm={6} md={4}>
            <Link href={`/games/${titleToSlug(title)}`}>
              <GameCard image={image ?? 'defaultImageURL'} title={title} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
