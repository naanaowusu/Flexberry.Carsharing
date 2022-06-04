import { Serializer as ParkSerializer } from
  '../mixins/regenerated/serializers/i-i-s-carsharing-park';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ParkSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
