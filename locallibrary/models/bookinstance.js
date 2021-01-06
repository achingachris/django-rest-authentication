const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookInstanceShema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  due_back: { type: Date, default: Date.now },
})

// virtual for bookinstance url
BookInstanceShema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id
})

module.exports = mongoose.model('BookInstance', BookInstanceShema)
