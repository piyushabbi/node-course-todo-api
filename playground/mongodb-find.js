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

  // Find all the docs
  // db.collection('Todos')
  //   .find()
  //   .toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log(err);
  //   })

  // Find all the tasks that are not completed
  // db.collection('Todos')
  //   .find({
  //     completed: false
  //   })
  //   .toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log(err);
  //   })

  // Find the doc with the given id
  db.collection('Todos')
    .find({
      _id: ObjectID('5a70627bd09029463cf741dd')
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log(err);
    })

});
