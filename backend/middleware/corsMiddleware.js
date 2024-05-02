const allowedOrigins = ["http://localhost:4200", "https://fiberandkraft.com", "https://fiberandkraft.herokuapp.com"];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
		if (allowedOrigins.indexOf(origin) === -1) {
			var msg = "The CORS policy for this site does not allow access from the specified Origin.";
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
	allowedHeaders: ["Content-Type", "Authorization"], // Headers that the client may specify in requests
	credentials: true, // Allow cookies to be sent with requests
	optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = { corsOptions };
