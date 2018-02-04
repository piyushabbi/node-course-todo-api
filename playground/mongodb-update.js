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

  // findOneAndUpdate: finds the doc that matches the condition, performs update operation, returns the updated doc
  // Look for MongoDB update operators
  db.collection('Todos')
    .findOneAndUpdate({
      _id: ObjectID('5a759da9b0003b2ff05de8ba')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then(res => {
      console.log(res);
    })

  // db.close

});
