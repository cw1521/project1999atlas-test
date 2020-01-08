import { environment } from '../../src/environments/environment';

//require mongoose module
var mongoose = require('mongoose');


const mongooseOptions = {
    useNewUrlParser: true,
    socketTimeoutMS: 10000,
    useUnifiedTopology: true
  }

//export this function and imported by server.js
export class Database {

      
    public start() {
        
        mongoose.connect(environment.MONGODB_URI, mongooseOptions);

        // mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

        mongoose.connection.on('connected', function() {
            console.log("Mongoose default connection is open.");
        });

        mongoose.connection.on('error', function(err) {
            console.log("Mongoose default connection has occured "+err+" error");
        });

        mongoose.connection.on('disconnected', function() {
            console.log("Mongoose default connection is disconnected");
        });

        process.on('SIGINT', function() {
            mongoose.connection.close(function(){
                console.log("Mongoose default connection is disconnected due to application termination");
                process.exit(0)
            });
        });
    }
}
