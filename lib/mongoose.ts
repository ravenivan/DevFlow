import mongoose from 'mongoose'; 

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) return console.log('MISSING MONGODB_URI')

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'devflow',
    })

    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
}