import app from './app';
import { connectDB } from './utils/db';

const start = async () => {
  try {
    await connectDB();
    
    app.listen(3000, () => {
      console.log('Server is up on port 3000');
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();