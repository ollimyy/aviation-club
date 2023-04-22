const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('aviation-club.db');

db.serialize( () => {

    // Create Event
	let sql = "CREATE TABLE event (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "title text NOT NULL, " +
			  "date date NOT NULL, " +
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
              "rent_price integer, " +
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

    // Event inserts
	sql = "INSERT INTO `event` (`id`, `title`, `date`, `location`, `description`) "+
	" VALUES (1, 'Club Summer Party', '2022-06-20', 'Clubroom', 'The annual club summer party is here again! Enjoy sauna, barbeque, cold drinks and come tell your best flying stories of the summer!')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row1 added to event");
	})

	sql = sql = "INSERT INTO `event` (`id`, `title`, `date`, `location`, `description`) " +
    "VALUES (2, 'Club Maintenace Day', '2022-07-15', 'Clubroom, Sauna, Hangar', 'Help us keep our premises clean and organized! The club will provide lunch and refreshments.')"
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row2 added to event");
	})

	sql = "INSERT INTO `event` (`id`, `title`, `date`, `location`, `description`) " +
    "VALUES (3, 'Precision Landing Contest', '2022-08-05', 'EFPR', 'Put your piloting skills to the test in our precision landing contest! Compete against other pilots for prizes and bragging rights. Copmetiton will be flown with our C152 aircraft. Registrations to anni.ehrnrooth@heac.net')"
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row3 added to event");
	})

    sql = "INSERT INTO `event` (`id`, `title`, `date`, `location`, `description`) " +
    "VALUES (4, 'Drone Safety Course', '2022-09-10', 'Classroom', 'Learn how to operate your drone safely and responsibly in our comprehensive drone safety course. Open to all drone enthusiasts, regardless of experience level.')"
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
            "VALUES (1, 'Warning: Heavy Bird Activity', '2022-06-01', 'Attention all pilots: Due to the summer migration of birds, we are experiencing heavy bird activity in and around the airfield. Please take extra precautions when taking off and landing, and be sure to scan the runway and surrounding areas for birds before each flight.')"
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row1 added to bulletin");
	})

    sql = "INSERT INTO `bulletin` (`id`, `title`, `date`, `text`) " +
            "VALUES (2, 'Runway Construction Work', '2022-07-01', 'Attention all pilots: Construction work will be taking place on the runway from July 5th to July 15th. During this time, the runway will be closed and unavailable for use. We apologize for any inconvenience this may cause and appreciate your cooperation.')"
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
              "VALUES ('OH-CFF', 'Cessna', 'C152', 1979, 'Lycoming O-235', 2, 8, 'cessna152.jpg'), " +
              "('OH-CHZ', 'Cessna', 'C172', 1998, 'Lycoming IO-360', 4, 10, 'cessna172.jpg'), " +
              "('OH-DAZ', 'Diamond Aircraft', 'DA40', 2014, 'Austro AE300', 4, 12, 'diamond-da40.jpg')";
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

	db.close();
})
