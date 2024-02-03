var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://arame_190:aralar666@cluster0.jompnul.mongodb.net/Tumo_product';

app.use(express.static('public'));
app.get("/", function (req, res) {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            const result = await mongoose.connection.db.collection('products').find().toArray();
            res.render('../public/form.ejs', {
                info: result
            })

        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        };
    });
});

app.post('/addName', (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const age = req.body.age;
    const password = req.body.password;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            let result = await mongoose.connection.db.collection('products').insertOne({
                 name: name,surname: surname, age: age, password: password,phonenumber: phonenumber, email: email}
            );
                res.redirect('/')
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        };
    });
});

app.get("/delete/:id", function (req, res) {
    var id = req.params.id;
       mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
       const db = mongoose.connection;
       db.on('error', console.error.bind(console, 'Connection error:'));
       db.once('open', async () => {
           try {
               let result = await mongoose.connection.db.collection('products').deleteOne({_id: new ObjectId(id)});
               res.json(result);
           } catch (error) {
               console.error('Error retrieving movies:', error);
           } finally {
               mongoose.connection.close();
           }
       })
   });

   app.get("/update/:id", function (req, res) {
       var id = req.params.id;
       mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
       const db = mongoose.connection;
       db.on('error', console.error.bind(console, 'Connection error:'));
       db.once('open', async () => {
           try {
               let result = await mongoose.connection.db.collection('products').findOne({_id: new ObjectId(id)});
               res.render('../public/update.ejs', {
                   obj: result
               });
           } catch (error) {
               console.error('Error retrieving movies:', error);
           } finally {
               mongoose.connection.close();
           }
       })
   });


   app.post("/updateData", function (req, res) {
       const name = req.body.name;
       const surname = req.body.surname;
       const age = req.body.age;
       const password = req.body.password;
       const phonenumber = req.body.phonenumber;
       const email = req.body.email;
       const id = req.body.id;

       mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
       const db = mongoose.connection;

       db.on('error', console.error.bind(console, 'Connection error:'));

       db.once('open', async () => {
           console.log('Connected to MongoDB!');

           try {
               let result = await mongoose.connection.db.collection('products').updateOne(
                   { _id: new ObjectId(id) },
                   { $set: { name: name, surname: surname, age: age, password: password, phonenumber: phonenumber, email: email, } }
               );

               res.json(result);
           } catch (error) {
               console.error('Error updating product:', error);
           } finally {
               mongoose.connection.close();
           }
       });
   });


app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
