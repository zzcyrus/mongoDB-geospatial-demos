import sphere from './schema'
import logger from '../../utils/logger'
import { m2degree, m2rad, arry2polygon } from '../../utils/tool'

const near = async (lon, lat, max, min) => {
  const query = {
    geometry: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lon, lat]
        },
        $maxDistance: max,
        $minDistance: min
      }
    }
  }
  logger.info(`[sphere-query-near] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const nearSphere = async (lon, lat, max, min) => {
  const query = {
    geometry: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [lon, lat]
        },
        $maxDistance: max,
        $minDistance: min
      }
    }
  }
  logger.info(`[sphere-query-near] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const withinCenter = async (location, radius) => {
  const query = {
    geometry: {
      $geoWithin: {
        $center: [location, m2degree(radius)]
      }
    }
  }
  logger.info(`[sphere-query-withinCenter] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const withinCenterSphere = async (location, radius) => {
  const query = {
    geometry: {
      $geoWithin: {
        $centerSphere: [location, m2rad(radius)]
      }
    }
  }
  logger.info(`[sphere-query-withinCenterSphere] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const withinBox = async (box) => {
  const query = {
    geometry: {
      $geoWithin: {
        $box: [[box[0], box[1]], [box[2], box[3]]]
      }
    }
  }
  logger.info(`[sphere-query-withinBox] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const withinPolygon = async (polygon) => {
  const query = {
    geometry: {
      $geoWithin: {
        $polygon: arry2polygon(polygon)
      }
    }
  }
  logger.info(`[sphere-query-withinPolygon] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const withinGeo = async (polygon) => {
  const query = {
    geometry: {
      $geoWithin: {
        $geometry: {
          type: 'Polygon',
          coordinates: [arry2polygon(polygon)]
        }
      }
    }
  }
  logger.info(`[sphere-query-withinGeo] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

const intersects = async (polygon) => {
  const query = {
    geometry: {
      $geoIntersects: {
        $geometry: {
          type: 'Polygon',
          coordinates: [arry2polygon(polygon)]
        }
      }
    }
  }
  logger.info(`[sphere-query-withinGeo] ${JSON.stringify(query)}`)
  return sphere.find(query)
}

export default {
  near,
  nearSphere,
  withinCenter,
  withinCenterSphere,
  withinBox,
  withinPolygon,
  withinGeo,
  intersects
}
