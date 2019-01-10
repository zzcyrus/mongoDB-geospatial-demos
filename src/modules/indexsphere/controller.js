import indexSphere from '../../database/indexsphere'

export const near = async (ctx) => {
  const { lon, lat, max, min = 0 } = ctx.query
  const result = await indexSphere.near(...[lon, lat, max, min].map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const nearSphere = async (ctx) => {
  const { lon, lat, max, min = 0 } = ctx.query
  const result = await indexSphere.nearSphere(...[lon, lat, max, min].map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinCenter = async (ctx) => {
  const { center, radius } = ctx.query
  const result = await indexSphere.withinCenter(center.split(',').map(parseFloat), parseFloat(radius))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinCenterSphere = async (ctx) => {
  const { center, radius } = ctx.query
  const result = await indexSphere.withinCenterSphere(center.split(',').map(parseFloat), parseFloat(radius))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinBox = async (ctx) => {
  const { box } = ctx.query
  const result = await indexSphere.withinBox(box.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinPolygon = async (ctx) => {
  const { polygon } = ctx.query
  const result = await indexSphere.withinPolygon(polygon.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinGeo = async (ctx) => {
  const { polygon } = ctx.query
  const result = await indexSphere.withinGeo(polygon.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const intersects = async (ctx) => {
  const { polygon } = ctx.query
  const result = await indexSphere.intersects(polygon.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}
