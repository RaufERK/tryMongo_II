const kittyName = 'Queen';
const slaveName = '№ 093';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


async function getNewKittens() {
    // Create Schema.
    const kittySchema = new mongoose.Schema({
        name: String,
        slaves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Slave' }]
    });

    const slaveSchema = new mongoose.Schema({
        name: String,
        theKitten: { type: mongoose.Schema.Types.ObjectId, ref: 'Kitten' }
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
    const Slave = mongoose.model('Slave', slaveSchema);


    let fluffy = new Kitten({ name: kittyName });

    let man = new Slave({
        name: slaveName,
        theKitten: fluffy._id
    })

    fluffy.slaves.push(man);

    fluffy = await fluffy.save();
    man = await man.save();




    let cutie = await Kitten.
        findOne({ name: kittyName }).
        populate('slaves').
        exec();
    console.log(cutie);

    console.log('\n______________________________________\n')


    let manSlave = await Slave.
        findOne({ name: slaveName }).
        populate('theKitten').
        exec();
    console.log(manSlave);

    db.close();
}

db.once('open', function () {
    getNewKittens();
});