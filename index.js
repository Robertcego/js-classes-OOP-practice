import UserDetails from "./UserDetails.js";
import User from "./User.js";

const user1 = new User("JohnDoe");
user1._details = new UserDetails(30, "New York", "Software Developer");


const user2 = new User("JaneDoe");
user2._details = new UserDetails(25, "Los Angeles", "Graphic Designer");    


const usersData = [user1, user2].map(user => user.getProfile());
console.log(usersData);