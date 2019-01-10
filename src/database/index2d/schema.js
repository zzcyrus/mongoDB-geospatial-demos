import mongoose from '../../utils/mongoose'

const stationSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  tem: Number,
  province: String,
  city: String,
  level: Number,
  uid: String,
  location: {
    type: Array,
    index: '2d'
  }
}, {
  versionKey: false
})

export default mongoose.model('station2d', stationSchema)
