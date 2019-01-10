import stationData from './data'
import model2d from '../src/database/index2d/schema'
import modelSphere from '../src/database/indexsphere/schema'

try {
  model2d.collection.drop()
} catch (error) {
}

try {
  modelSphere.collection.drop()
} catch (error) {
}

const data = stationData.temperature.map(item => {
  item.location = [item.lon, item.lat]
  return item
})

const sphereData = stationData.temperature.map(item => {
  item.geometry = {
    coordinates: [item.lon, item.lat],
    type: 'Point'
  }
  return item
})

const run = () => {
  const task = Promise.all([model2d.insertMany(data), modelSphere.insertMany(sphereData)])
  task.then(res => {
    console.log('站点天气数据初始化成功')
    process.exit()
  })
}

export default run
