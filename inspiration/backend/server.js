import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

let cachedQuote = null;
let cacheTime = null;
const CACHE_DURATION_MS = 60 * 1000;

app.get('/quote', async(req, res) =>{
    console.log('Received /quote request')

        const now = Date.now();
        
        if (cachedQuote && (now - cacheTime < CACHE_DURATION_MS)){
            console.log('Serving quote from cache');
            return res.json(cachedQuote)
        }
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        console.log('Fetched from API, status:', response.status)
        if (!response.ok){
            throw new Error (`Fetch failed with status ${response.status}`)
        }
        const data = await response.json();
        cachedQuote = data;
        cacheTime = now;

        res.json(data);
    }
    catch(e){
        console.error('Error fetching quote:', e.message);

        if(cachedQuote){
            console.warn('Serving stale cached quote due to the error');
            return res.json(cachedQuote)
        }
        res.status(500).json({error: 'Failed to fetch quote'});
    }
}
);

app.get('/photos/random', async(req, res)=>{
    const accessKey= process.env.UNSPLASH_ACCESS_KEY;
    const count = req.query.count ||5;
    try{
        const response = await fetch (`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`);
        console.log('Fetched from API, status:', response.status)
        if(!response.ok){
            throw new Error (`Fetch failed with status ${response.status}`)
        }
        const data = await response.json();
        res.json(data)
    }
    catch (e){
        console.error('Error fetching images', e.message);
        res.status(500).json({error: 'Failed to fetch images'})
    }
})

app.listen(PORT, ()=>{
    console.log(`Proxy server running on http://localhost:${PORT}`)
})

