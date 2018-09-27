import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  company: {
    type: String
  },
  department: {
    type: String
  },
  position: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

userSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      department: this.department,
      position: this.position,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
