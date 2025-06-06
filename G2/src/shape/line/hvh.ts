import { curveStep } from '@antv/vendor/d3-shape';
import { ShapeComponent as SC } from '../../runtime';
import { Curve } from './curve';

export type HVHOptions = Record<string, any>;

export const HVH: SC<HVHOptions> = (options, context) => {
  return Curve({ curve: curveStep, ...options }, context);
};

HVH.props = {
  ...Curve.props,
  defaultMarker: 'hvh',
};
