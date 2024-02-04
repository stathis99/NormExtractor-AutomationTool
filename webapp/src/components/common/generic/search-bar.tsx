import React, { ChangeEvent, FC } from 'react'

import { TextField } from '@mui/material'

type SearchBarProps = {
  // eslint-disable-next-line no-unused-vars
  onSearch: (term: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return <TextField fullWidth label="Search" id="fullWidth" onChange={handleChange} />
}

export default SearchBar
