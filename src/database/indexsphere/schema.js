import mongoose from '../../utils/mongoose'

const stationSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  tem: Number,
  province: String,
  city: String,
  level: Number,
  uid: String,
  geometry: {
    type: Object,
    index: '2dsphere'
  }
}, {
  versionKey: false
})

export default mongoose.model('station2dsphere', stationSchema)
