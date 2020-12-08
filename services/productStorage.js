import Datastore from 'react-native-local-mongodb';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = new Datastore({
  filename: 'fundManagerStorage',
  storage: AsyncStorage
});

const addToStorage = (item) => {
  db.insert(item, (err, newDoc) => {
    if (err) {
      console.log(err);
    }
  });
}

const removeOneFromStorage = () => {
  DevSettings.remove({key})
}

module.exports = {
  addToStorage,
};