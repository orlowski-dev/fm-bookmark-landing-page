export const arrayToStringWithSpaces = (arrayList: string[] | number[]): string => {
  let result = ''
  for (let item of arrayList) {
    result += ` ${item}`
  }

  return result
}