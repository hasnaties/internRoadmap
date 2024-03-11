import Profile from "../../models/profileModel";

const users = [
  {
    fullName: "Adam Blake",
    userType: "Admin",
    notification: [{ body: "First", read: true }, { body: "Second", read: false }, { body: "Third", read: false }],
    lastActive: Date.now()
  },
  {
    fullName: "Elijah Cake",
    userType: "User",
    notification: [{ body: "First", read: true }, { body: "Second", read: false }, { body: "Third", read: false }],
    lastActive: Date.now()
  },
  {
    fullName: "Stefan Tate",
    userType: "User",
    notification: [{ body: "First", read: true }, { body: "Second", read: true }, { body: "Third", read: false }],
    lastActive: Date.now()
  }
]