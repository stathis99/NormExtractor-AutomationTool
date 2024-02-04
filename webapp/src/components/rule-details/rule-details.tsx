/* eslint-disable no-unused-vars */
import React, { ChangeEvent, FC, KeyboardEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import TaskIcon from '@mui/icons-material/Task'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Grid,
  TableContainer,
  Typography,
  Chip,
  Divider,
  Button,
  MenuItem,
  ClickAwayListener,
  Grow,
  MenuList,
  Popper,
  FormControl,
  Input,
  FormHelperText,
} from '@mui/material'

import { FlexBox } from '@/components/common/generic/flexbox.styled'
import { Title } from '@/components/common/generic/title'
import { RuleDetailsProps } from '@/types/frames'

const RuleDetails = ({ sentence, frames, onDelete, onFrameAdd, onFrameEdit }: RuleDetailsProps) => {
  const [open, setOpen] = useState(false)

  const [inputValues, setInputValues] = useState<any>(frames)

  useEffect(() => {
    setInputValues(JSON.parse(JSON.stringify(frames)))
  }, [frames])

  useEffect(() => {
    const clonedFrames = JSON.parse(JSON.stringify(frames))
    setInputValues(clonedFrames)
  }, [frames])

  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    category: string,
    frameIndex: number,
    key: string
  ) => {
    const newValue = event.target.value

    // Create updatedInputValues here
    let updatedInputValues = JSON.parse(JSON.stringify(inputValues))

    if (!updatedInputValues[category]) {
      updatedInputValues[category] = []
    }
    if (!updatedInputValues[category][frameIndex]) {
      updatedInputValues[category][frameIndex] = {}
    }

    updatedInputValues[category][frameIndex][key] = newValue

    setInputValues(updatedInputValues)
    onFrameEdit(sentence, updatedInputValues)
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" fontWeight={800}>
          {sentence}
        </Typography>
      </Grid>
      {Object.entries(frames).map(([category, data]: any, index: number): React.JSX.Element | undefined => {
        if (data.length > 0) {
          return (
            <Grid key={index} item xs={12}>
              <Paper elevation={5} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TableContainer>
                  <FlexBox alignItems="flex-start" justifyContent="space-between">
                    <Title>{`${category.charAt(0).toUpperCase() + category.slice(1)}`}</Title>
                    <Button
                      component="label"
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => onDelete(sentence, index)}
                    >
                      Delete
                    </Button>
                  </FlexBox>

                  <Table>
                    <TableBody>
                      {data.map((frame: any, frameIndex: any) => (
                        <React.Fragment key={frameIndex}>
                          {Object.entries(frame).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell>{key}</TableCell>
                              <TableCell>
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                  <Input value={value} onChange={(event) => handleChange(event, category, frameIndex, key)} />
                                  <FormHelperText id="standard-weight-helper-text">{`Current Value for: ${key}: ${JSON.stringify(
                                    value
                                  )}`}</FormHelperText>
                                </FormControl>
                              </TableCell>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          )
        }
      })}
      <Grid item xs={12} justifyContent="center">
        <FlexBox justifyContent="center">
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Frame
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={() => onFrameAdd(sentence, 'act')}>Act</MenuItem>
                      <MenuItem onClick={() => onFrameAdd(sentence, 'fact')}>Fact</MenuItem>
                      <MenuItem onClick={() => onFrameAdd(sentence, 'duty')}>Duty</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </FlexBox>
      </Grid>
    </>
  )
}

export default RuleDetails
