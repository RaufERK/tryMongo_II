const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


async function getNewKittens() {
    // Create Schema.
    const kittySchema = new mongoose.Schema({
        name: String
    });

    // Add method.
    kittySchema.methods.speak = function () {
        const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }

    // Create new model.
    const Kitten = mongoose.model('Kitten', kittySchema);


    const kittyName = 'pyh';
    // Use method of new record.
    let fluffy = new Kitten({ name: kittyName });
    // fluffy.speak();

    // Save to db.
    fluffy = await fluffy.save();


    // Find all records.
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })

    // Find with filtering.
    let kittens = await Kitten.find({ name: kittyName });
    console.log(kittens);
    db.close();
}

db.once('open', function () {
    // we're connected!
    getNewKittens();
});