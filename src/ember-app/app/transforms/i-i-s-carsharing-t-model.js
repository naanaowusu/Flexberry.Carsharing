import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tModelEnum from '../enums/i-i-s-carsharing-t-model';

export default FlexberryEnum.extend({
  enum: tModelEnum,
  sourceType: 'IIS.Carsharing.tModel'
});
