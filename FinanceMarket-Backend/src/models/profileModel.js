import mongoose from "mongoose";
const { Schema } = mongoose;

const profileSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  notification: [{ body: String, read: Boolean, createdAt: { type: Date, default: Date.now } }],
  lastActive: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;