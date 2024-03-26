export function formatedDate(data: string) {
  const [year, month, day] = data.split('-')

  return `${day}-${month}-${year}`
}
