import { Chart } from '@antv/g2';

const Data = [
  [
    '01-01',
    -0.489863522578899,
    0.848138677816903,
    0.559142254786167,
    1.15073035819645,
  ],
  [
    '01-02',
    -0.385774774190865,
    0.779071607989758,
    0.592110810844279,
    0.742753777067528,
  ],
  [
    '01-03',
    0.085320462046806,
    0.665356275004035,
    0.963570246688821,
    1.27494822331159,
  ],
  [
    '01-04',
    0.661951933364362,
    1.48857802967009,
    1.21299384683976,
    1.37876710872108,
  ],
  [
    '01-05',
    0.275939368771361,
    1.78112017585948,
    1.54658801436731,
    1.87892635502492,
  ],
  [
    '01-06',
    0.327782217100161,
    0.910945756785081,
    1.27208083065789,
    1.61986408054512,
  ],
  [
    '01-07',
    -0.353034448974316,
    0.51492272900181,
    0.121225112639938,
    0.90211963105735,
  ],
  [
    '01-08',
    -1.52464778559499,
    0.260972126042923,
    -0.508864567386389,
    0.417885699969663,
  ],
  [
    '01-09',
    -0.593361686260142,
    0.162759391666744,
    0.218089944784571,
    0.360869923308897,
  ],
  [
    '01-10',
    -0.282102011275525,
    0.828140289442679,
    0.721611369970074,
    0.891552722962365,
  ],
  [
    '01-11',
    -1.23059300530264,
    0.451152587985225,
    -0.140103248944554,
    0.834414544127764,
  ],
  [
    '01-12',
    -1.24995265027972,
    -0.31266194270582,
    -0.0300106962816838,
    -0.41142281971162,
  ],
  [
    '01-13',
    -1.37795240635888,
    -0.589722591726911,
    -0.191006845650732,
    -0.516505539657783,
  ],
  [
    '01-14',
    -2.52518734732884,
    -0.95184304656081,
    -0.814311553870472,
    -1.27462030634033,
  ],
  [
    '01-15',
    -1.70164913297708,
    -1.54184969446708,
    -1.08826628121932,
    -1.5093101152107,
  ],
  [
    '01-16',
    -2.80066758524658,
    -1.31031245938982,
    -1.96278720556888,
    -1.75105038956633,
  ],
  [
    '01-17',
    -2.21871327339612,
    -0.895693067878342,
    -0.950375849823643,
    -0.800329750310783,
  ],
  [
    '01-18',
    -1.86045028588756,
    -1.26512897818588,
    -0.92443255447989,
    -0.574178518063472,
  ],
  [
    '01-19',
    -2.13514441304614,
    -1.08943821214579,
    -1.30296034566265,
    -0.739220801309009,
  ],
  [
    '01-20',
    -1.36106428148275,
    -0.751109295408758,
    -0.866142934125915,
    -0.833248083867714,
  ],
  [
    '01-21',
    -1.13448325969953,
    -0.208866920419441,
    -0.358324443622643,
    -0.3304939374004,
  ],
  [
    '01-22',
    -1.16113158648886,
    -0.460193104790614,
    -0.0795243445688507,
    -0.671877235487046,
  ],
  [
    '01-23',
    -0.709834207179879,
    0.0739745344379797,
    0.0871865696214076,
    0.706678090635692,
  ],
  [
    '01-24',
    -0.855133081253214,
    0.568682381682416,
    0.332247453197952,
    0.355934290536338,
  ],
  [
    '01-25',
    -0.460984145040151,
    -0.0533268121319483,
    0.1927909935791,
    0.520116262690529,
  ],
  [
    '01-26',
    -0.274001486727037,
    0.790086619458202,
    0.372433776442163,
    0.503192650078109,
  ],
  [
    '01-27',
    -0.0632578758817437,
    0.790173258069052,
    1.30182293816554,
    0.89441218858635,
  ],
  [
    '01-28',
    0.533488666887157,
    1.09171550073275,
    1.23616453434162,
    1.07309866451647,
  ],
  [
    '01-29',
    0.328739731259988,
    1.62978411402078,
    1.83852277548915,
    1.45231138640967,
  ],
  [
    '01-30',
    1.07776428203926,
    1.93809648786583,
    2.46108589692092,
    1.81206626995097,
  ],
  [
    '01-31',
    2.90989593458823,
    3.50255848816715,
    3.23630685370243,
    3.7031428949146,
  ],
  [
    '02-01',
    1.1413167338545,
    2.07317462613488,
    1.79941129279295,
    2.01052999279642,
  ],
  [
    '02-02',
    2.01265969966196,
    2.45369696032894,
    3.03709651601366,
    2.57524967204869,
  ],
  [
    '02-03',
    1.02418266284474,
    2.27795353731045,
    2.34181116863238,
    2.31776394989237,
  ],
  [
    '02-04',
    1.45227269430285,
    2.74092153168326,
    2.76797387808001,
    2.4385315669259,
  ],
  [
    '02-05',
    1.45852270324646,
    2.91238500034082,
    2.9853266952491,
    2.74537569070796,
  ],
  [
    '02-06',
    1.21129207788561,
    2.08667480157999,
    2.09530458603767,
    2.6727308809475,
  ],
  [
    '02-07',
    0.462011042266158,
    1.98370918491097,
    1.53394095461533,
    1.54720222137272,
  ],
  [
    '02-08',
    0.428062670597836,
    1.42756198832186,
    1.91677613366245,
    1.69525540140237,
  ],
  [
    '02-09',
    0.571998651405796,
    1.20777016841237,
    0.959778428990291,
    1.38939401587598,
  ],
  [
    '02-10',
    -0.123659449221408,
    1.10974150901183,
    0.503938262585522,
    1.06081365610511,
  ],
  [
    '02-11',
    0.220265810946126,
    0.889550892119087,
    0.625835436920559,
    0.778387089467167,
  ],
  [
    '02-12',
    -0.574641417979562,
    0.8583990372058,
    0.654221831427059,
    1.37533696416859,
  ],
  [
    '02-13',
    0.19221674566726,
    0.86959932086505,
    1.47852533542482,
    0.83455121493955,
  ],
  [
    '02-14',
    0.186659862839924,
    1.04903473940167,
    0.68172447764395,
    1.03171445911985,
  ],
  [
    '02-15',
    0.218706499887028,
    1.23923064220661,
    0.853395074770504,
    1.50111427755768,
  ],
  [
    '02-16',
    -0.27220251796404,
    1.3295116016313,
    1.19709576605684,
    0.990366511352841,
  ],
  [
    '02-17',
    0.0909752720459248,
    0.930787133486377,
    1.13540425926233,
    1.01885304957885,
  ],
  [
    '02-18',
    0.500678865937832,
    1.28945886403763,
    1.86872639477659,
    1.66757062636358,
  ],
  [
    '02-19',
    -0.378876145639865,
    1.29116025999708,
    0.520386030441329,
    1.72399982300463,
  ],
  [
    '02-20',
    0.385505543735579,
    1.03897914012846,
    1.2105370970492,
    1.49365049359714,
  ],
  [
    '02-21',
    0.135932482376663,
    0.92778787386035,
    1.16066757224531,
    1.25969273609095,
  ],
  [
    '02-22',
    0.0126490029565284,
    0.941856901134297,
    0.617806318969375,
    1.14962996968517,
  ],
  [
    '02-23',
    0.773063369455311,
    1.5541058613705,
    1.39784724912506,
    2.21431623455804,
  ],
  [
    '02-24',
    1.08056863447678,
    1.60549846831965,
    1.98786092502431,
    1.78155744981404,
  ],
  [
    '02-25',
    1.06819268645169,
    2.21075515924522,
    2.5816314847123,
    1.897312677728,
  ],
  [
    '02-26',
    0.89600108139962,
    2.0627506436141,
    2.39647499467082,
    2.00303588512805,
  ],
  [
    '02-27',
    1.60601329459157,
    2.69928369983066,
    2.9546767824584,
    3.13972422952751,
  ],
  [
    '02-28',
    2.12052520649532,
    3.00114926835576,
    2.97818682108921,
    3.57049829244482,
  ],
  [
    '03-01',
    3.09657732168984,
    3.93689422073629,
    4.42818757143253,
    4.56240590486167,
  ],
  [
    '03-02',
    3.32321329150499,
    3.90890881368374,
    4.21758475211336,
    4.3691811133343,
  ],
  [
    '03-03',
    3.14178105822847,
    4.27111998864967,
    3.80688097575068,
    4.44824771836784,
  ],
  [
    '03-04',
    2.95886009091458,
    4.15810698557557,
    3.66153037695285,
    4.65229859699136,
  ],
  [
    '03-05',
    3.83183059088505,
    4.53247535253525,
    4.67163846440224,
    4.70724246311339,
  ],
  [
    '03-06',
    4.40063335904881,
    5.20075380392408,
    5.47861446159827,
    5.12239434498163,
  ],
  [
    '03-07',
    4.47478320238869,
    5.05301123068342,
    5.55733815443578,
    5.23378335462593,
  ],
  [
    '03-08',
    4.47232398366198,
    5.44402577422747,
    5.68401509811357,
    5.31899376787198,
  ],
  [
    '03-09',
    3.98286212328023,
    5.01902798238165,
    4.92824550854426,
    4.85197161798612,
  ],
  [
    '03-10',
    3.59183589955411,
    4.85673224919323,
    5.21664200314164,
    5.336122542621,
  ],
  [
    '03-11',
    4.10246999007764,
    4.80323089976014,
    4.84179665234023,
    5.44519702784959,
  ],
  [
    '03-12',
    4.751210298739,
    5.33256459577594,
    5.08356909085231,
    6.0515889109663,
  ],
  [
    '03-13',
    3.95250246625044,
    5.47631574490867,
    5.12512520171009,
    5.54641631954027,
  ],
  [
    '03-14',
    3.65861405462893,
    4.93258521330197,
    4.72926384244545,
    5.36960110939244,
  ],
  [
    '03-15',
    3.9432032257054,
    4.94316527477613,
    5.15369204112966,
    5.53350321274879,
  ],
  [
    '03-16',
    2.54278602988589,
    3.70206371820628,
    3.62703352404155,
    3.65412513259214,
  ],
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(Data);

chart
  .area()
  .encode('x', (d) => new Date(d[0]))
  .encode('y', [(d) => d[1], (d) => d[2]])
  .encode('shape', 'smooth')
  .style('fillOpacity', 0.1)
  .style('fill', 'orange');

chart
  .line()
  .encode('x', (d) => new Date(d[0]))
  .encode('y', (d) => d[3])
  .encode('color', '#FF6B3B')
  .encode('shape', 'smooth');

chart
  .line()
  .encode('x', (d) => new Date(d[0]))
  .encode('y', (d) => d[4])
  .encode('color', '#5B8FF9')
  .style('lineWidth', 2);

chart
  .point()
  .data([
    ['01-08', 0.417885699969663],
    ['01-23', 0.706678090635692],
    ['01-31', 3.703],
    ['03-12', 6.0515889109663],
  ])
  .encode('x', (d) => new Date(d[0]))
  .encode('y', (d) => d[1])
  .encode('color', '#FF6B3B')
  .encode('shape', 'point')
  .encode('size', 3)
  .style('lineWidth', 1)
  .style('stroke', '#FFF');

chart.render();
