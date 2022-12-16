import { getEarthBenders } from './snapshotFunction'

test('getEarthBenders', () => {
  expect(getEarthBenders()).toMatchSnapshot()
})
