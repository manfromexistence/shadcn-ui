import { G2Spec } from '../../../src';

export function mockPieSpiderRight(): G2Spec {
  return {
    type: 'interval',
    data: [
      { type: '微博', value: 93.33 },
      { type: '其他', value: 6.67 },
      { type: '论坛', value: 4.77 },
      { type: '网站', value: 1.44 },
      { type: '微信', value: 1.12 },
      { type: '客户端', value: 1.05 },
      { type: '新闻', value: 0.81 },
      { type: '视频', value: 0.39 },
      { type: '博客', value: 0.37 },
      { type: '报刊', value: 0.17 },
    ].reverse(),
    encode: {
      y: 'value',
      color: 'type',
    },
    labels: [
      {
        position: 'spider',
        text: (obj) => `${obj.type} (${obj.value})`,
        labelHeight: 30,
      },
    ],
    transform: [{ type: 'stackY' }],
    coordinate: { type: 'theta' },
  };
}
