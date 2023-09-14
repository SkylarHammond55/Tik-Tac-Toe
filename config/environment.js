import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.4brnzrd.mongodb.net/123DB'
export const port = process.env.PORT || 3001
export const secret = process.env.SECRET || 'shhhh its a secret'