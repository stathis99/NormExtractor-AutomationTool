export type Act = {
  id: string
  act: string
  actor: string
  action: string
  object: string
  recipient: string
  preconditions: {
    expression: string
    operand: boolean
  }
  create: string[]
  terminate: string[]
  sources: string[]
  explanation: string
}

export type Fact = {
  id: string
  fact: string
  function: string[]
  sources: string[]
  explanation: string
}

export type Duty = {
  id: string
  duty: string
  dutyHolder: string
  claimant: string
  terminatingAct: string[]
  creatingAct: string[]
  enforcingAct: string
  sources: string[]
}

export type Frames = {
  acts?: Act[]
  facts?: Fact[]
  duties?: Duty[]
}

export type SentenceAndFrames = {
  sentence: string
  frames: Frames
}

export type GameDetails = {
  game: string
  details: SentenceAndFrames[]
}

type HandleDeleteFrameType = (sentence: string, index: number) => void
type HandleAddFrameType = (sentence: string, frameType: string) => void

export type RuleDetailsProps = {
  sentence: string
  frames: Frames
  onDelete: HandleDeleteFrameType
  onFrameAdd: HandleAddFrameType
  onFrameEdit: any
}
