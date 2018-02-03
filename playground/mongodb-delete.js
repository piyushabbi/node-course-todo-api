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

  // deleteMany: Deletes all the records with the given condition
  // db.collection('Todos')
  //   .deleteMany({
  //     text: 'Eat Pizza'
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })

  // deleteOne: deletes the first record only that matches the given condition
  // db.collection('Todos')
  //   .deleteOne({
  //     text: 'Eat Pizza'
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })

  // findOneAndDelete: gets the last document that matches the given condition, that cab be logged, as well as deletes the document
  db.collection('Todos')
    .findOneAndDelete({
      completed: true
    })
    .then(res => {
      console.log(res);
    })
  // db.close

});
