import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
} else {
    console.error('Enviroment file not found.');
}

export const ENV = process.env.NODE_ENV as string;

export const PORT = (process.env.PORT || 3000) as number;

export const MONGO_URI = process.env['MONGO_URI'] as string;

if (!MONGO_URI) {
    console.error(
        'No mongo connection string.'
    );

    process.exit(1);
}

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

export const COOKIE_KEY = process.env.COOKIE_KEY as string;