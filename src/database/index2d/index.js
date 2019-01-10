import station2d from './schema'
import logger from '../../utils/logger'
import { m2degree, m2rad, arry2polygon } from '../../utils/tool'

/**
 * 查询与指定经纬度平面距离之内的点
 * @param {*} lon 经度
 * @param {*} lat 纬度
 * @param {*} max 最大距离米
 */
const near = async (lon, lat, max) => {
  const query = {
    location: {
      $near: [lon, lat],
      $maxDistance: m2degree(max)
    }
  }
  logger.info(`[2d-query-near] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

/**
 * 查询与指定经纬度球面距离之内的点
 * @param {*} lon 经度
 * @param {*} lat 纬度
 * @param {*} max 最大距离米
 */
const nearSphere = async (lon, lat, max) => {
  const query = {
    location: {
      $nearSphere: [lon, lat],
      $maxDistance: m2rad(max)
    }
  }
  logger.info(`[2d-query-nearSphere] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

/**
 * 查询指定经纬度圆范围之内的点
 * @param {*} location [经度，纬度]
 * @param {*} radius 半径米
 */
const withinCenter = async (location, radius) => {
  const query = {
    location: {
      $geoWithin: {
        $center: [location, m2degree(radius)]
      }
    }
  }
  logger.info(`[2d-query-withinCenter] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

/**
 * 查询指定经纬度圆范围之内的点
 * @param {*} location [经度，纬度]
 * @param {*} radius 半径米
 */
const withinCenterSphere = async (location, radius) => {
  const query = {
    location: {
      $geoWithin: {
        $centerSphere: [location, m2rad(radius)]
      }
    }
  }
  logger.info(`[2d-query-withinCenterSphere] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

/**
 * 查询指定矩形范围之内的点
 * @param {*} box [最小经度，最小纬度，最大经度，最大纬度]
 */
const withinBox = async (box) => {
  const query = {
    location: {
      $geoWithin: {
        $box: [[box[0], box[1]], [box[2], box[3]]]
      }
    }
  }
  logger.info(`[2d-query-withinBox] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

/**
 * 查询任意图形范围之内的点
 * @param {*} polygon
 */
const withinPolygon = async (polygon) => {
  const query = {
    location: {
      $geoWithin: {
        $polygon: arry2polygon(polygon)
      }
    }
  }
  logger.info(`[2d-query-withinPolygon] ${JSON.stringify(query)}`)
  return station2d.find(query)
}

export default {
  near,
  nearSphere,
  withinCenter,
  withinCenterSphere,
  withinBox,
  withinPolygon
}
