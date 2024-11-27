import { Path } from '@antv/g';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';
import { ScaleInY } from './scaleInY';

export type GrowInYOptions = Animation;

/**
 * Scale mark from nothing to desired shape in x direction.
 */
export const GrowInY: AC<GrowInYOptions> = (options, context) => {
  return (from, to, defaults) => {
    const [shape] = from;
    const {
      min: [x, y],
      halfExtents,
    } = shape.getLocalBounds();
    const width = halfExtents[0] * 2;
    const height = halfExtents[1] * 2;
    const clipPath = new Path({
      style: {
        d: `M${x},${y}L${x + width},${y}L${x + width},${y + height}L${x},${
          y + height
        }Z`,
      },
    });
    shape.appendChild(clipPath);
    shape.style.clipPath = clipPath;

    const animation = ScaleInY(options, context)([clipPath], to, defaults);

    return animation;
  };
};

GrowInY.props = {};