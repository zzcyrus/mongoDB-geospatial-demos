import index2d from '../../database/index2d'

export const near = async (ctx) => {
  const { lon, lat, max } = ctx.query
  const result = await index2d.near(...[lon, lat, max].map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const nearSphere = async (ctx) => {
  const { lon, lat, max } = ctx.query
  const result = await index2d.nearSphere(...[lon, lat, max].map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinCenter = async (ctx) => {
  const { center, radius } = ctx.query
  const result = await index2d.withinCenter(center.split(',').map(parseFloat), parseFloat(radius))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinCenterSphere = async (ctx) => {
  const { center, radius } = ctx.query
  const result = await index2d.withinCenterSphere(center.split(',').map(parseFloat), parseFloat(radius))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinBox = async (ctx) => {
  const { box } = ctx.query
  const result = await index2d.withinBox(box.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}

export const withinPolygon = async (ctx) => {
  const { polygon } = ctx.query
  const result = await index2d.withinPolygon(polygon.split(',').map(parseFloat))
  ctx.body = {
    success: true,
    results: result
  }
}
