import { Chart } from '../../../src';

export function chartEmitItemTooltip(context) {
  const { container, canvas } = context;

  // wrapperDiv
  const wrapperDiv = document.createElement('div');
  container.appendChild(wrapperDiv);

  // button
  const button = document.createElement('button');
  button.innerText = 'Hide tooltip';
  container.appendChild(button);

  // p
  const p = document.createElement('p');
  p.innerText = '';
  container.appendChild(p);

  const chart = new Chart({
    container: wrapperDiv,
    canvas,
  });

  chart
    .interval()
    .data([
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ])
    .encode('x', 'genre')
    .encode('y', 'sold')
    .encode('color', 'genre')
    .interaction('tooltip', {
      offset: [0, 0],
      css: {
        '.g2-tooltip': {
          transform: 'translate(-50%, -100%)',
        },
      },
    });

  const finished = chart.render();

  finished.then((chart) =>
    chart.emit('tooltip:show', {
      offsetY: 0,
      data: { data: { sold: 115 } },
    }),
  );

  chart.on('tooltip:show', ({ data }) => {
    p.innerText = JSON.stringify(data);
  });

  const hide = () => {
    console.log('hide');
  };
  chart.on('tooltip:hide', hide);

  button.onclick = () => {
    chart.emit('tooltip:hide');
  };

  return {
    chart,
    button,
    finished,
    clear: () => {
      chart.off('tooltip:hide', hide);
    },
  };
}
