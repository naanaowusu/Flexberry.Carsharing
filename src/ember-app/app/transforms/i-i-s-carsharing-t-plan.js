import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tPlanEnum from '../enums/i-i-s-carsharing-t-plan';

export default FlexberryEnum.extend({
  enum: tPlanEnum,
  sourceType: 'IIS.Carsharing.tPlan'
});
