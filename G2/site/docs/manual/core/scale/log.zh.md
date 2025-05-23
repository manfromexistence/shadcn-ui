---
title: log
order: 2
---

log 是使用对数函数进行数据映射，它的映射函数为 `y = log(x) + b`。

## 开始使用

```ts
chart
  .line()
  .encode('x', 'year')
  .encode('y', 'sale')
  .scale('y', {
    type: 'log',
    /* 其他配置项 */
  });
```

## 选项

| 属性 | 描述 | 类型 | 默认值|
| -------------| ----------------------------------------------------------- | -----| -------|
| domain      | 设置数据的定义域范围                                            | `number[]` | 输入数据的最大最小值范围 |
| domainMin      | 设置数据的定义域最小值                                     | `number` | 输入数据的最小值 |
| domainMax      | 设置数据的定义域最大值                                           | `number` | 输入数据的最大 |
| range       | 设置数据映射的值域范围                                           | `number[]` \| `string[]` | `[0, 1]` |
| rangeMin       | 设置数据映射的值域最小值                                        | `number \| string` | `0` |
| rangeMax       | 设置数据映射的值域最大值                                      | `number \| string` | `1` |
| unknown     | 对于 `undefined`， `NaN`，`null` 空值，返回的数据                | `any` | `undefined` |
| tickCount   | 设置推荐的 tick 生成数量，tickCount 只是建议值，不会完全按照这个值产生 tick | `number` | `5` |
| tickMethod  | 设置生成 tick 的方法，常用于自定义 tick                           | `(min: number, max: number, count: number) => number[]`      | `calculateLogTicks` |
| round       | 输出值去四舍五入                                                | `boolean` | `false` |
| clamp       | 将映射值限定在 range 的范围内                                     | `boolean` | `false` |
| nice        | 扩展 domain 范围，让输出的 tick 展示得更加友好                     | `boolean` | `false` |
| interpolate | 自定义差值函数                                                  | `(a: number, b: number) => (t: number) => T` | `(a, b) => (t) => a * (1 - t) + b * t` |
| base      | 设定对数底                                                       | `number` | `10` |

- log 底数默认为 10，怎么设定 log 的底数

```ts
chart
  .line()
  // ...
  .scale('y', {
    type: 'log',
    base: 100,
  });
```
