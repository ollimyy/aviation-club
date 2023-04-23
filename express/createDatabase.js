const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('aviation-club.db');

db.serialize( () => {

    // Create Event
	let sql = "CREATE TABLE event (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "title text NOT NULL, " +
			  "start datetime NOT NULL, " +
			  "location text, " +
			  "description text )";

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table event created");
	})

    // Create Aircraft
    // might get some more information later
	sql = "CREATE TABLE aircraft (" +
              "registration text PRIMARY KEY NOT NULL, " +
              "manufacturer text NOT NULL, " +
              "model text NOT NULL, " +
              "year integer, " +
              "engine text, " +
              "seating_capacity integer, " +
              "rent_price numeric, " +
              "image text)";

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table aircraft created");
	})

    // Create Bulletin
	sql = "CREATE TABLE bulletin (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "title text NOT NULL, " +
			  "date date NOT NULL, " +
			  "text text NOT NULL)";

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table bulletin created");
	})

	// Create Booking
	sql = "CREATE TABLE booking (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "start datetime NOT NULL, " +
			  "end datetime NOT NULL, " +
			  "aircraft text NOT NULL," +
			  "FOREIGN KEY (aircraft) REFERENCES aircraft(registration))";

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table booking created");
	})

    // Event inserts
	sql = "INSERT INTO `event` (`id`, `title`, `start`, `location`, `description`) "+
	" VALUES (1, 'Summer Party', '2023-06-20 16:00', 'Clubroom', 'The annual club summer party is here again! Enjoy sauna, barbeque, cold drinks and share your best flying stories of the summer!')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row1 added to event");
	})

	sql = sql = "INSERT INTO 'event' ('id', 'title', 'start', 'location', 'description') " +
    "VALUES (2, 'Maintenace Day', '2023-09-10 13:00', 'Clubroom, Sauna, Hangar', 'Help us keep our premises clean and organized! The club will provide food and refreshments.')"
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row2 added to event");
	})

	sql = "INSERT INTO 'event' ('id', 'title', 'start', 'location', 'description') " +
    "VALUES (3, 'Precision Landing Contest', '2023-08-05 09:00', 'EFPR', 'Put your piloting skills to the test in our precision landing contest! Compete against other pilots for prizes and bragging rights. Copmetiton will be flown with our C152 aircraft. Registrations to anni.ehrnrooth@heac.net')"
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row3 added to event");
	})
	
    sql = "INSERT INTO `event` (`id`, `title`, `start`, `location`, `description`) " +
    "VALUES (4, 'Drone Safety Course', '2023-07-15 15:00', 'Classroom', 'Learn how to operate your drone safely and responsibly in our comprehensive drone safety course. Open to all drone enthusiasts, regardless of experience level.')"
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row4 added to event");
	})

	db.each("SELECT id, title FROM event", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.title);
	})

    // Bulletin inserts
    sql = "INSERT INTO `bulletin` (`id`, `title`, `date`, `text`) " +
            "VALUES (1, 'Warning: Heavy Bird Activity', '2023-06-01', 'Due to the summer migration of birds, we are experiencing heavy bird activity in and around the airfield. Please take extra precautions when taking off and landing, and be sure to scan the runway and surrounding areas for birds before each flight.')"
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row1 added to bulletin");
	})

    sql = "INSERT INTO `bulletin` (`id`, `title`, `date`, `text`) " +
            "VALUES (2, 'Runway Construction Work', '2023-07-01', 'Construction work will be taking place on the runway from July 5th to July 15th. During this time, the runway will be closed and unavailable for use. We apologize for any inconvenience this may cause and appreciate your cooperation.')"
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row2 added to bulletin");
	})

    db.each("SELECT id, title FROM bulletin", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.title);
	})

    // Aircraft inserts
    sql = "INSERT INTO aircraft (registration, manufacturer, model, year, engine, seating_capacity, rent_price, image) " +
              "VALUES ('OH-CFF', 'Cessna', 'C152', 1979, 'Lycoming O-235', 2, 2.5, 'cessna152.jpg'), " +
              "('OH-CHZ', 'Cessna', 'C172', 1998, 'Lycoming IO-360', 4, 3, 'cessna172.jpg'), " +
              "('OH-DAZ', 'Diamond Aircraft', 'DA40', 2014, 'Austro AE300', 4, 3.75, 'diamond-da40.jpg')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("3 rows added to aircraft");
	})

    db.each("SELECT registration FROM aircraft", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.registration);
	})

	// Booking inserts
	sql = "INSERT INTO booking (id, start, end, aircraft) VALUES (1, '2023-04-25 10:00:00', '2023-04-25 12:00:00', 'OH-CFF'), " +
	"(2, '2023-04-27 08:00:00', '2023-04-27 10:00:00', 'OH-DAZ');";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("2 rows added to booking");
	})

    db.each("SELECT id FROM booking", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id);
	})

	db.close();
})
