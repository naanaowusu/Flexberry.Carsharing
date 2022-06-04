import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-carsharing-car', 'Unit | Serializer | i-i-s-carsharing-car', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-carsharing-car',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-carsharing-t-model',
    'transform:i-i-s-carsharing-t-plan',

    'model:i-i-s-carsharing-car',
    'model:i-i-s-carsharing-city',
    'model:i-i-s-carsharing-park',
    'model:i-i-s-carsharing-rent',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
