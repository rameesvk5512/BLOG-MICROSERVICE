import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['user', 'author', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
