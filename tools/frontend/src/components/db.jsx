import PouchDB from 'pouchdb';

let pouches = {
  equipment: new PouchDB('equipment')
};

for(const pouch in pouches) {
  pouches[pouch].replicate.to('http://localhost:32769/'+pouch, {live: true, retry: true});
}

export default pouches;
