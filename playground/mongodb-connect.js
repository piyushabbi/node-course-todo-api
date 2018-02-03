const {
  MongoClient,
  ObjectID
} = require('mongodb');

// Connect to mongodb database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to conenct to mongodb server!');
  }
  console.log('Connected to Mongodb server');

  // Insert new record to collection
  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert. ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users {name, age, location}
  // db.collection('Users').insertOne({
  //   name: "Piyush",
  //   age: 28,
  //   location: "Bengaluru"
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert. ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
