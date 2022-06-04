import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-carsharing-park', 'Unit | Model | i-i-s-carsharing-park', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
