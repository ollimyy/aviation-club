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
		if (error) throw error;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/event/one/:id', (req, res, next) => {
	const id = req.params.id;
	db.get('SELECT * FROM event where id=?', [id], (error, result) => {
		if (error) throw error;
		if (typeof (result) == 'undefined') {
			return res.status(200).json({});
		}
		return res.status(200).json(result);
	}) // db.get
})

app.get('/event/upcoming', (req, res, next) => {
	db.all('SELECT * FROM event WHERE datetime(start) >= datetime("now") ORDER BY datetime(start) ASC;', (error, results) => {
		if (error) throw error;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/bulletin/all', (req, res, next) => {
	db.all('SELECT * FROM bulletin', (error, results) => {
		if (error) throw error;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/aircraft/all', (req, res, next) => {
	db.all('SELECT * FROM aircraft', (error, results) => {
		if (error) throw error;
		return res.status(200).json(results);
	}) // db.all
})

app.get('/aircraft/one/:id', (req, res, next) => {
	const id = req.params.id;
	db.get('SELECT * FROM aircraft where id=?', [id], (error, result) => {
		if (error) throw error;
		if (typeof (result) == 'undefined') {
			return res.status(200).json({});
		}
		return res.status(200).json(result);
	}) // db.get
})

app.get('/booking/all', (req, res, next) => {
	db.all('SELECT * FROM booking', (error, results) => {
		if (error) throw error;
		return res.status(200).json(results);
	}) // db.all
})

app.post('/booking/add', (req, res, next) => {
	const tap = req.body;

	db.run('INSERT INTO booking (start, end, aircraft) VALUES (?, ?, ?)',
	[tap.start, tap.end, tap.aircraft], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	}) // db.run
})

app.delete('/booking/:id', (req, res, next) => {
	const id = req.params.id;

	db.run('DELETE FROM booking WHERE id = ?', id, (error) =>{
	if (error) throw error;
	
	return res.status(200).json({ message: 'Booking deleted.'})
	});
}
)


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
	return res.status(404).json({ error: true, message: 'Requested service not found.' });
})
