const DB_URI = "mongodb+srv://merncms:Ct8EYpKMDhFIOoeY@cluster0.wdcna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const API = process.env.NODE_ENV === "production" 
  ? "https://xxx:vercel.com/api" 
  : "http://localhost:3000/api"

module.exports = {
  DB_URI,
  API,
}