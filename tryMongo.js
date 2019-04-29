var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const kittyName = 'puf';

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
    // we're connected!

    // Create Schema.
    var kittySchema = new mongoose.Schema({
        name: String
    });

    // Add method.
    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }

    // Create new model.
    var Kitten = mongoose.model('Kitten', kittySchema);

    // // Create new record.
    // var silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name); // 'Silence';

    // Use method of new record.
    var fluffy = new Kitten({ name: kittyName });
    // fluffy.speak();

    // Save to db.
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
    });

    // Find all records.
    // Kitten.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     console.log(kittens);
    // })

    // Find with filtering.
    Kitten.find({ name: kittyName }, function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    }); 
    // db.close();

// });