export let interestList: any[] = []

export const addReslt = (item: any) => {
  if (interestList.length < 3) {
    interestList.push(item)
  }
}

export const getInterestList = () => {
  console.log(`interlist`)
  console.log(interestList)
  return interestList
}