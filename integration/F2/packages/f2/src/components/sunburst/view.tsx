import { jsx } from '@antv/f-engine';
import SunburstView from './sunburstView';
import IcicleView from './icicleView';

export default (props) => {
  const { coord } = props;
  if (coord.type === 'polar') {
    return <SunburstView {...props} />;
  }
  return <IcicleView {...props} />;
};
