export const getLocalStorage = (key: string) => {
  const storedData = localStorage.getItem(key)
  if (storedData) {
    const parsedData = JSON.parse(storedData)
    return parsedData
  }
}

export const setLocalStorage = (key: string, payload: any) => {
  console.log('somth')
}
