import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb+srv://2015johngtz:Blasm669235!@cluster0.ecqtctj.mongodb.net/project3db'
export const port = process.env.PORT || 3000
export const secret = process.env.SECRET || 'shhhh its a secret'