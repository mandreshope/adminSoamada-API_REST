const mongoose = require('mongoose')
let Schema = mongoose.Schema

let NotificationSchema = new Schema({
  encadreur: { type: Schema.ObjectId },
  membre: { type: Schema.ObjectId },
  objet: { type: Schema.ObjectId },
  type: {type: String, default: ''},
  message: {type: String, default: ''},
  isOpened: {type: Boolean, default: false},
  date: { type: Date, default:''},
  dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true})
 
module.exports = mongoose.model('notification', NotificationSchema)