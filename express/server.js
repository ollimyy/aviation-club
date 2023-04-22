const express = require('express');
const app = express();

var helmet = require('helmet');
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json());
app.use(express.urlencoded({ limit: '5mb', extended: true }));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('aviation-club.db');

app.listen(8080, () => {
	console.log('Node working localhost:8080');
});

app.get('/', (req, res, next) => {
	return res.status(200).json({ error: false, message: 'Works!' });
});

app.get('/event/all', (req, res, next) => {
	db.all('SELECT * FROM event', (error, results) => {
		if (error) throwerror;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/event/one/:id', (req, res, next) => {
	let id = req.params.id;
	db.get('SELECT * FROM event where id=?', [id], (error, result) => {
		if (error) throw error;
		if (typeof (result) == 'undefined') {
			return res.status(200).json({});
		}
		return res.status(200).json(result);
	}) // db.get
})

app.get('/bulletin/all', (req, res, next) => {
	db.all('SELECT * FROM bulletin', (error, results) => {
		if (error) throwerror;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/aircraft/all', (req, res, next) => {
	db.all('SELECT * FROM aircraft', (error, results) => {
		if (error) throwerror;
		return res.status(200).json(results);
	}) // db.all
})

const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './images'); // Which folder
	},
	filename: (req, file, callback) => {
		callback(null, file.originalname);  // What is the filename
	}
});

const upload = multer({ storage: storage })


app.get('/download/:file', (req, res, next) => {
	let file = './images/' + req.params.file;
	res.download(file);
});

app.get('*', (req, res, next) => {
	return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' });
})
