export const parseRules = (inputText: string): { component: string }[] => {
  const rulesArray = inputText
    .split('.')
    .map((rule) => rule.trim())
    .filter(Boolean)

  // Ensure each rule has a final dot
  const parsedRules = rulesArray.map((rule) => {
    return { component: rule.endsWith('.') ? rule : rule + '.' }
  })

  return parsedRules
}
