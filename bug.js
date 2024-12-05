```javascript
// Incorrect use of $inc operator within a findAndUpdate operation
db.collection('counters').findOneAndUpdate( { _id: 'myCounter' }, { $inc: { sequence: -1 } } );
```