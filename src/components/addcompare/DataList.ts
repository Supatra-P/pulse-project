let interestList: any[] = []

export const addReslt = (item: any) => {
  if (interestList.length < 3) {
    interestList.push(item)
  }
}

export const getInterestList = () => {
  return interestList
}

export const setInterestList = (newOrderList: any[]) => {
  interestList = newOrderList
}