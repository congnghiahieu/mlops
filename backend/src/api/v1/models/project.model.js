import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    expectation_accuracy: { type: Number, required: true },
    description: { type: String },
    thumbnail_url: { type: String },
    uploaded: { type: Boolean },
  },
  { timestamps: true }
)

const Project = model('Project', schema)
export default Project
