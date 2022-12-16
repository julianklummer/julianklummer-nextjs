const benderList = [
  { name: 'Katara', power: ['water'] },
  { name: 'Aang', power: ['water', 'fire', 'earth', 'air'] },
  { name: 'Toph', power: ['earth', 'metal'] }
]

export const getEarthBenders = () => {
  return benderList.filter((bender) => bender.power.includes('earth'))
}
