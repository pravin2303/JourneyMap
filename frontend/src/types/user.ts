export interface User {
  _id: string;
  name: string;
  email: string;
  profilePic?: string;
  bio?: string;
  role: "admin" | "member";
}