
import * as controller from './controller'

export const baseUrl = '/api/sphere'

const modules = [
  // http://localhost:9988/api/sphere/near?lon=117.55&lat=36.51&max=80000&min=0
  {
    method: 'GET',
    route: '/near',
    handlers: [
      controller.near
    ]
  },
  // http://localhost:9988/api/sphere/nearSphere?lon=117.55&lat=36.51&max=80000&min=50000
  {
    method: 'GET',
    route: '/nearSphere',
    handlers: [
      controller.near
    ]
  },
  // http://localhost:9988/api/sphere/withinCenter?center=117.55,36.51&radius=80000
  {
    method: 'GET',
    route: '/withinCenter',
    handlers: [
      controller.withinCenter
    ]
  },
  // http://localhost:9988/api/sphere/withinCenterSphere?center=117.55,36.51&radius=80000
  {
    method: 'GET',
    route: '/withinCenterSphere',
    handlers: [
      controller.withinCenterSphere
    ]
  },
  // http://localhost:9988/api/sphere/withinBox?box=119.792356,35.572161,122.862,38.054373
  {
    method: 'GET',
    route: '/withinBox',
    handlers: [
      controller.withinBox
    ]
  },
  // http://localhost:9988/api/sphere/withinPolygon?polygon=122.272885,37.690000,122.259612,36.697165,123.430117,37.307347
  {
    method: 'GET',
    route: '/withinPolygon',
    handlers: [
      controller.withinPolygon
    ]
  },
  // http://localhost:9988/api/sphere/withinGeo?polygon=122.272885,37.690000,122.259612,36.697165,123.430117,37.307347,122.272885,37.690000
  {
    method: 'GET',
    route: '/withinGeo',
    handlers: [
      controller.withinGeo
    ]
  },
  // http://localhost:9988/api/sphere/intersects?polygon=121.372635,37.768444,120.757546,37.343578,121.860954,37.248143,121.372635,37.768444
  {
    method: 'GET',
    route: '/intersects',
    handlers: [
      controller.intersects
    ]
  }
]

export default modules
