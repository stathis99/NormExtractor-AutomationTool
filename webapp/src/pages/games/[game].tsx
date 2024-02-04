// pages/games/[game].tsx
import React from 'react'

import { Chip } from '@mui/material'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { FlexBox } from '@/components/common/generic/flexbox.styled'
import { titleToSlug } from '@/helpers/slug'

import { initialGames } from '../../helpers/games-list'

interface GameProps {
  title: string
  image: string
  rules: Rules[]
}

interface Rules {
  sentence: string
  tag: string[]
}

const Game: React.FC<GameProps> = ({ title, rules }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <ol>
          {rules.map(({ sentence, tag }, index) => (
            <FlexBox key={index}>
              <li>{sentence}</li>
              {Array.isArray(tag) ? (
                tag.map((singltag) => (
                  <Chip
                    key={singltag}
                    label={singltag}
                    color={singltag === 'duty' ? 'primary' : singltag === 'act' ? 'secondary' : 'success'}
                  />
                ))
              ) : (
                // Handle the case where tag is not an array, e.g., display an error message
                <div>Invalid tag format for rule {index + 1}</div>
              )}
            </FlexBox>
          ))}
        </ol>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all games
  const paths = initialGames.map(({ title }) => ({
    params: { game: titleToSlug(title) },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<GameProps> = async ({ params }) => {
  const game = initialGames.find((g) => titleToSlug(g.title) === params?.game)

  if (!game) {
    return {
      notFound: true,
    }
  }

  // Ensure rules is an array of objects with `tag` as an array of strings
  const rules = game.rules.map((rule) => ({
    ...rule,
    tag: Array.isArray(rule.tag) ? rule.tag : [rule.tag],
  }))

  return {
    props: {
      ...game,
      rules,
    },
    revalidate: 1,
  }
}

export default Game
