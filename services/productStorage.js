import Datastore from 'react-native-local-mongodb';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = new Datastore({
  filename: 'fundManagerStorage',
  storage: AsyncStorage,
  autoload: true
});

const addToStorage = (item) => {
  db.find({ barCode: item.barCode }, (err, docs) => {
    if (err) {
      console.log(`[database]: error adding item: ${err}`);
      return {
        success: false,
      }
    }
    else {
      if (!docs.length) {
        db.insert(item, (err, newDoc) => {
          if (err) {
            console.log(`[database]: error adding item: ${err}`);
            return {
              success: false,
            }
          }
          else {
            console.log(`[database]: added item with barcode: ${item.barCode}`);
            return {
              success: true,
            }
          }
        });
      }
      else {
        console.log(`[database]: product with barcode ${item.barCode} already exists`);
        return {
          success: false,
        }
      }
    }
  });
}

const removeFromStorage = (code) => {
  db.remove({ barCode: code }, {}, (err, numRemoved) => {
    if (err) {
      console.log(`[database]: error removing item: ${err}`);
      return {
        success: false,
      }
    }
    else {
      if (numRemoved > 0) {
        console.log(`[database]: removed item with barcode: ${code}`);
        return {
          success: true,
        }
      }
      else {
        console.log(`[database]: item with ${barCode} does not exist`);
        return {
          success: false,
        }
      }
    }
  });
}

const getAllFromStorage = ()=> {return new Promise((resolve, reject) => {
  db.find({}, (err, docs) => {
    if (err) {
      console.log('[database]: error retrieving all items from storage');
      reject({
        success: false,
      });
    }
    else {
      console.log(docs);
      resolve({
        success: true,
        items: docs,
      });
    }
  })
});}

module.exports = {
  addToStorage,
  removeFromStorage,
  getAllFromStorage,
};