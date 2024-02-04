import { v4 as uuidv4 } from 'uuid'

export const emptyActFrame = {
  id: uuidv4(),
  act: '',
  actor: '',
  action: '',
  object: '',
  recipient: '',
  preconditions: {
    expression: '',
    operand: false,
  },
  create: [],
  terminate: [],
  sources: [],
  explanation: '',
}

export const emptyFactFrame = {
  id: uuidv4(),
  fact: '',
  function: [],
  sources: [],
  explanation: '',
}

export const emptyDutyFrame = {
  id: uuidv4(),
  duty: '',
  dutyHolder: '',
  claimant: '',
  terminatingAct: [],
  creatingAct: [],
  enforcingAct: '',
  sources: [],
}
