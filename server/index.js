import express from 'express';
import connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
const app = express();
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/', Router)


connection();





app.listen(8000, () => {
    console.log('Server is running on port 8000');
})