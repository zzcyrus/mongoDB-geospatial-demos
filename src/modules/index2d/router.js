
import * as controller from './controller'

export const baseUrl = '/api/index2d'

const modules = [
  // http://localhost:9988/api/index2d/near?lon=117.55&lat=36.51&max=80000
  {
    method: 'GET',
    route: '/near',
    handlers: [
      controller.near
    ]
  },
  // http://localhost:9988/api/index2d/nearSphere?lon=117.55&lat=36.51&max=80000
  {
    method: 'GET',
    route: '/nearSphere',
    handlers: [
      controller.nearSphere
    ]
  },
  // http://localhost:9988/api/index2d/withinCenter?center=117.55,36.51&radius=80000
  {
    method: 'GET',
    route: '/withinCenter',
    handlers: [
      controller.withinCenter
    ]
  },
  // http://localhost:9988/api/index2d/withinCenterSphere?center=117.55,36.51&radius=80000
  {
    method: 'GET',
    route: '/withinCenterSphere',
    handlers: [
      controller.withinCenterSphere
    ]
  },
  // http://localhost:9988/api/index2d/withinBox?box=119.792356,35.572161,122.862,38.054373
  {
    method: 'GET',
    route: '/withinBox',
    handlers: [
      controller.withinBox
    ]
  },
  // http://localhost:9988/api/index2d/withinPolygon?polygon=122.272885,37.690000,122.259612,36.697165,123.430117,37.307347
  {
    method: 'GET',
    route: '/withinPolygon',
    handlers: [
      controller.withinPolygon
    ]
  }
]

export default modules
