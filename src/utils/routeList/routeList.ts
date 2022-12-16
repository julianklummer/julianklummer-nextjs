type Route = {
  to: string
  title: string
}

type RouteList = Route[]

export const routeList: RouteList = [
  {
    to: '/',
    title: 'Start'
  },
  {
    to: '/portfolio',
    title: 'Portfolio'
  },
  {
    to: '/cv',
    title: 'CV'
  },
  {
    to: '/about',
    title: 'About'
  }
]
