import React from 'react';

import Form from 'react-jsonschema-form';
import db from './db.jsx'

import schema from './../../../../schemas/equipment.json'

const log = (type) => console.log.bind(console, type);

class Equipment extends React.Component {
  render() {
    return (
      <div>
        <Form schema={schema}
              onSubmit={this.save}
              onError={log("errors")} />
      </div>
    )
  }

  save(form) {
    let document = form.formData;
    document._id = 'equipment_'+document.name;
    db.equipment.put(document);
    console.log('Saved form', document);
  }
}

export default Equipment
