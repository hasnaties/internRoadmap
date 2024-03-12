import Profile from '../models/profileModel.js';

export const getProfile = async (req, res) => {
  const { _id } = req.body;

  try {
    const user = await Profile.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};