import Profile from "../../models/profileModel.js";

const users = [
  {
    fullName: "Adam Blake",
    email: "adamblake@email.com",
    password: "123",
    userType: "Admin",
    notification: [{ body: "First", read: true }, { body: "Second", read: false }, { body: "Third", read: false }],
    lastActive: Date.now()
  },
  {
    fullName: "Elijah Cake",
    email: "elijahcake@email.com",
    password: "123",
    userType: "User",
    notification: [{ body: "First", read: true }, { body: "Second", read: false }, { body: "Third", read: false }],
    lastActive: Date.now()
  },
  {
    fullName: "Stefan Tate",
    email: "stefantate@email.com",
    password: "123",
    userType: "User",
    notification: [{ body: "First", read: true }, { body: "Second", read: true }, { body: "Third", read: false }],
    lastActive: Date.now()
  }
];

const insertProfile = async () => {
  try {
    const result = await Profile.insertMany(users);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export default insertProfile;