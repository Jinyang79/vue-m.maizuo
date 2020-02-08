export function actorFilter (data) {
  if (data) {
    const newList = data.map(item => item.name)
    return newList.join(' ')
  }
}
