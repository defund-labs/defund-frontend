import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = Number(process.env.PORT || 80);

const app = express();

console.log(__dirname )

app.use(express.static(__dirname));

app.get( "/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});