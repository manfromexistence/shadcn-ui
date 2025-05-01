// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
// Import G2 Chart object and potentially other types/functions if needed
import { Chart, type G2Spec, type G2ViewTree } from '@antv/g2';
// Potential external libraries (ensure installed):
// // Chart animation detected - G2 animation API will be used

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radar/demo/complex-radial.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { x: 0, y: 0 },
  //   { x: 1, y: 0.0785 },
  //   { x: 2, y: 0.1568 },
  //   { x: 3, y: 0.2347 },
  //   { x: 4, y: 0.3119 },
  //   { x: 5, y: 0.3882 },
  //   { x: 6, y: 0.4635 },
  //   { x: 7, y: 0.5376 },
  //   { x: 8, y: 0.6101 },
  //   { x: 9, y: 0.681 },
  //   { x: 10, y: 0.75 },
  //   { x: 11, y: 0.817 },
  //   { x: 12, y: 0.8817 },
  //   { x: 13, y: 0.944 },
  //   { x: 14, y: 1.0037 },
  //   { x: 15, y: 1.0607 },
  //   { x: 16, y: 1.1147 },
  //   { x: 17, y: 1.1657 },
  //   { x: 18, y: 1.2135 },
  //   { x: 19, y: 1.258 },
  //   { x: 20, y: 1.299 },
  //   { x: 21, y: 1.3365 },
  //   { x: 22, y: 1.3703 },
  //   { x: 23, y: 1.4004 },
  //   { x: 24, y: 1.4266 },
  //   { x: 25, y: 1.4489 },
  //   { x: 26, y: 1.4672 },
  //   { x: 27, y: 1.4815 },
  //   { x: 28, y: 1.4918 },
  //   { x: 29, y: 1.4979 },
  //   { x: 30, y: 1.5 },
  //   { x: 31, y: 1.4979 },
  //   { x: 32, y: 1.4918 },
  //   { x: 33, y: 1.4815 },
  //   { x: 34, y: 1.4672 },
  //   { x: 35, y: 1.4489 },
  //   { x: 36, y: 1.4266 },
  //   { x: 37, y: 1.4004 },
  //   { x: 38, y: 1.3703 },
  //   { x: 39, y: 1.3365 },
  //   { x: 40, y: 1.299 },
  //   { x: 41, y: 1.258 },
  //   { x: 42, y: 1.2135 },
  //   { x: 43, y: 1.1657 },
  //   { x: 44, y: 1.1147 },
  //   { x: 45, y: 1.0607 },
  //   { x: 46, y: 1.0037 },
  //   { x: 47, y: 0.944 },
  //   { x: 48, y: 0.8817 },
  //   { x: 49, y: 0.817 },
  //   { x: 50, y: 0.75 },
  //   { x: 51, y: 0.681 },
  //   { x: 52, y: 0.6101 },
  //   { x: 53, y: 0.5376 },
  //   { x: 54, y: 0.4635 },
  //   { x: 55, y: 0.3882 },
  //   { x: 56, y: 0.3119 },
  //   { x: 57, y: 0.2347 },
  //   { x: 58, y: 0.1568 },
  //   { x: 59, y: 0.0785 },
  //   { x: 60, y: 0 },
  //   { x: 61, y: 0.0785 },
  //   { x: 62, y: 0.1568 },
  //   { x: 63, y: 0.2347 },
  //   { x: 64, y: 0.3119 },
  //   { x: 65, y: 0.3882 },
  //   { x: 66, y: 0.4635 },
  //   { x: 67, y: 0.5376 },
  //   { x: 68, y: 0.6101 },
  //   { x: 69, y: 0.681 },
  //   { x: 70, y: 0.75 },
  //   { x: 71, y: 0.817 },
  //   { x: 72, y: 0.8817 },
  //   { x: 73, y: 0.944 },
  //   { x: 74, y: 1.0037 },
  //   { x: 75, y: 1.0607 },
  //   { x: 76, y: 1.1147 },
  //   { x: 77, y: 1.1657 },
  //   { x: 78, y: 1.2135 },
  //   { x: 79, y: 1.258 },
  //   { x: 80, y: 1.299 },
  //   { x: 81, y: 1.3365 },
  //   { x: 82, y: 1.3703 },
  //   { x: 83, y: 1.4004 },
  //   { x: 84, y: 1.4266 },
  //   { x: 85, y: 1.4489 },
  //   { x: 86, y: 1.4672 },
  //   { x: 87, y: 1.4815 },
  //   { x: 88, y: 1.4918 },
  //   { x: 89, y: 1.4979 },
  //   { x: 90, y: 1.5 },
  //   { x: 91, y: 1.4979 },
  //   { x: 92, y: 1.4918 },
  //   { x: 93, y: 1.4815 },
  //   { x: 94, y: 1.4672 },
  //   { x: 95, y: 1.4489 },
  //   { x: 96, y: 1.4266 },
  //   { x: 97, y: 1.4004 },
  //   { x: 98, y: 1.3703 },
  //   { x: 99, y: 1.3365 },
  //   { x: 100, y: 1.299 },
  //   { x: 101, y: 1.258 },
  //   { x: 102, y: 1.2135 },
  //   { x: 103, y: 1.1657 },
  //   { x: 104, y: 1.1147 },
  //   { x: 105, y: 1.0607 },
  //   { x: 106, y: 1.0037 },
  //   { x: 107, y: 0.944 },
  //   { x: 108, y: 0.8817 },
  //   { x: 109, y: 0.817 },
  //   { x: 110, y: 0.75 },
  //   { x: 111, y: 0.681 },
  //   { x: 112, y: 0.6101 },
  //   { x: 113, y: 0.5376 },
  //   { x: 114, y: 0.4635 },
  //   { x: 115, y: 0.3882 },
  //   { x: 116, y: 0.3119 },
  //   { x: 117, y: 0.2347 },
  //   { x: 118, y: 0.1568 },
  //   { x: 119, y: 0.0785 },
  //   { x: 120, y: 0 },
  //   { x: 121, y: 0.0785 },
  //   { x: 122, y: 0.1568 },
  //   { x: 123, y: 0.2347 },
  //   { x: 124, y: 0.3119 },
  //   { x: 125, y: 0.3882 },
  //   { x: 126, y: 0.4635 },
  //   { x: 127, y: 0.5376 },
  //   { x: 128, y: 0.6101 },
  //   { x: 129, y: 0.681 },
  //   { x: 130, y: 0.75 },
  //   { x: 131, y: 0.817 },
  //   { x: 132, y: 0.8817 },
  //   { x: 133, y: 0.944 },
  //   { x: 134, y: 1.0037 },
  //   { x: 135, y: 1.0607 },
  //   { x: 136, y: 1.1147 },
  //   { x: 137, y: 1.1657 },
  //   { x: 138, y: 1.2135 },
  //   { x: 139, y: 1.258 },
  //   { x: 140, y: 1.299 },
  //   { x: 141, y: 1.3365 },
  //   { x: 142, y: 1.3703 },
  //   { x: 143, y: 1.4004 },
  //   { x: 144, y: 1.4266 },
  //   { x: 145, y: 1.4489 },
  //   { x: 146, y: 1.4672 },
  //   { x: 147, y: 1.4815 },
  //   { x: 148, y: 1.4918 },
  //   { x: 149, y: 1.4979 },
  //   { x: 150, y: 1.5 },
  //   { x: 151, y: 1.4979 },
  //   { x: 152, y: 1.4918 },
  //   { x: 153, y: 1.4815 },
  //   { x: 154, y: 1.4672 },
  //   { x: 155, y: 1.4489 },
  //   { x: 156, y: 1.4266 },
  //   { x: 157, y: 1.4004 },
  //   { x: 158, y: 1.3703 },
  //   { x: 159, y: 1.3365 },
  //   { x: 160, y: 1.299 },
  //   { x: 161, y: 1.258 },
  //   { x: 162, y: 1.2135 },
  //   { x: 163, y: 1.1657 },
  //   { x: 164, y: 1.1147 },
  //   { x: 165, y: 1.0607 },
  //   { x: 166, y: 1.0037 },
  //   { x: 167, y: 0.944 },
  //   { x: 168, y: 0.8817 },
  //   { x: 169, y: 0.817 },
  //   { x: 170, y: 0.75 },
  //   { x: 171, y: 0.681 },
  //   { x: 172, y: 0.6101 },
  //   { x: 173, y: 0.5376 },
  //   { x: 174, y: 0.4635 },
  //   { x: 175, y: 0.3882 },
  //   { x: 176, y: 0.3119 },
  //   { x: 177, y: 0.2347 },
  //   { x: 178, y: 0.1568 },
  //   { x: 179, y: 0.0785 },
  //   { x: 180, y: 0 },
  //   { x: 181, y: 0.0785 },
  //   { x: 182, y: 0.1568 },
  //   { x: 183, y: 0.2347 },
  //   { x: 184, y: 0.3119 },
  //   { x: 185, y: 0.3882 },
  //   { x: 186, y: 0.4635 },
  //   { x: 187, y: 0.5376 },
  //   { x: 188, y: 0.6101 },
  //   { x: 189, y: 0.681 },
  //   { x: 190, y: 0.75 },
  //   { x: 191, y: 0.817 },
  //   { x: 192, y: 0.8817 },
  //   { x: 193, y: 0.944 },
  //   { x: 194, y: 1.0037 },
  //   { x: 195, y: 1.0607 },
  //   { x: 196, y: 1.1147 },
  //   { x: 197, y: 1.1657 },
  //   { x: 198, y: 1.2135 },
  //   { x: 199, y: 1.258 },
  //   { x: 200, y: 1.299 },
  //   { x: 201, y: 1.3365 },
  //   { x: 202, y: 1.3703 },
  //   { x: 203, y: 1.4004 },
  //   { x: 204, y: 1.4266 },
  //   { x: 205, y: 1.4489 },
  //   { x: 206, y: 1.4672 },
  //   { x: 207, y: 1.4815 },
  //   { x: 208, y: 1.4918 },
  //   { x: 209, y: 1.4979 },
  //   { x: 210, y: 1.5 },
  //   { x: 211, y: 1.4979 },
  //   { x: 212, y: 1.4918 },
  //   { x: 213, y: 1.4815 },
  //   { x: 214, y: 1.4672 },
  //   { x: 215, y: 1.4489 },
  //   { x: 216, y: 1.4266 },
  //   { x: 217, y: 1.4004 },
  //   { x: 218, y: 1.3703 },
  //   { x: 219, y: 1.3365 },
  //   { x: 220, y: 1.299 },
  //   { x: 221, y: 1.258 },
  //   { x: 222, y: 1.2135 },
  //   { x: 223, y: 1.1657 },
  //   { x: 224, y: 1.1147 },
  //   { x: 225, y: 1.0607 },
  //   { x: 226, y: 1.0037 },
  //   { x: 227, y: 0.944 },
  //   { x: 228, y: 0.8817 },
  //   { x: 229, y: 0.817 },
  //   { x: 230, y: 0.75 },
  //   { x: 231, y: 0.681 },
  //   { x: 232, y: 0.6101 },
  //   { x: 233, y: 0.5376 },
  //   { x: 234, y: 0.4635 },
  //   { x: 235, y: 0.3882 },
  //   { x: 236, y: 0.3119 },
  //   { x: 237, y: 0.2347 },
  //   { x: 238, y: 0.1568 },
  //   { x: 239, y: 0.0785 },
  //   { x: 240, y: 0 },
  //   { x: 241, y: 0.0785 },
  //   { x: 242, y: 0.1568 },
  //   { x: 243, y: 0.2347 },
  //   { x: 244, y: 0.3119 },
  //   { x: 245, y: 0.3882 },
  //   { x: 246, y: 0.4635 },
  //   { x: 247, y: 0.5376 },
  //   { x: 248, y: 0.6101 },
  //   { x: 249, y: 0.681 },
  //   { x: 250, y: 0.75 },
  //   { x: 251, y: 0.817 },
  //   { x: 252, y: 0.8817 },
  //   { x: 253, y: 0.944 },
  //   { x: 254, y: 1.0037 },
  //   { x: 255, y: 1.0607 },
  //   { x: 256, y: 1.1147 },
  //   { x: 257, y: 1.1657 },
  //   { x: 258, y: 1.2135 },
  //   { x: 259, y: 1.258 },
  //   { x: 260, y: 1.299 },
  //   { x: 261, y: 1.3365 },
  //   { x: 262, y: 1.3703 },
  //   { x: 263, y: 1.4004 },
  //   { x: 264, y: 1.4266 },
  //   { x: 265, y: 1.4489 },
  //   { x: 266, y: 1.4672 },
  //   { x: 267, y: 1.4815 },
  //   { x: 268, y: 1.4918 },
  //   { x: 269, y: 1.4979 },
  //   { x: 270, y: 1.5 },
  //   { x: 271, y: 1.4979 },
  //   { x: 272, y: 1.4918 },
  //   { x: 273, y: 1.4815 },
  //   { x: 274, y: 1.4672 },
  //   { x: 275, y: 1.4489 },
  //   { x: 276, y: 1.4266 },
  //   { x: 277, y: 1.4004 },
  //   { x: 278, y: 1.3703 },
  //   { x: 279, y: 1.3365 },
  //   { x: 280, y: 1.299 },
  //   { x: 281, y: 1.258 },
  //   { x: 282, y: 1.2135 },
  //   { x: 283, y: 1.1657 },
  //   { x: 284, y: 1.1147 },
  //   { x: 285, y: 1.0607 },
  //   { x: 286, y: 1.0037 },
  //   { x: 287, y: 0.944 },
  //   { x: 288, y: 0.8817 },
  //   { x: 289, y: 0.817 },
  //   { x: 290, y: 0.75 },
  //   { x: 291, y: 0.681 },
  //   { x: 292, y: 0.6101 },
  //   { x: 293, y: 0.5376 },
  //   { x: 294, y: 0.4635 },
  //   { x: 295, y: 0.3882 },
  //   { x: 296, y: 0.3119 },
  //   { x: 297, y: 0.2347 },
  //   { x: 298, y: 0.1568 },
  //   { x: 299, y: 0.0785 },
  //   { x: 300, y: 0 },
  //   { x: 301, y: 0.0785 },
  //   { x: 302, y: 0.1568 },
  //   { x: 303, y: 0.2347 },
  //   { x: 304, y: 0.3119 },
  //   { x: 305, y: 0.3882 },
  //   { x: 306, y: 0.4635 },
  //   { x: 307, y: 0.5376 },
  //   { x: 308, y: 0.6101 },
  //   { x: 309, y: 0.681 },
  //   { x: 310, y: 0.75 },
  //   { x: 311, y: 0.817 },
  //   { x: 312, y: 0.8817 },
  //   { x: 313, y: 0.944 },
  //   { x: 314, y: 1.0037 },
  //   { x: 315, y: 1.0607 },
  //   { x: 316, y: 1.1147 },
  //   { x: 317, y: 1.1657 },
  //   { x: 318, y: 1.2135 },
  //   { x: 319, y: 1.258 },
  //   { x: 320, y: 1.299 },
  //   { x: 321, y: 1.3365 },
  //   { x: 322, y: 1.3703 },
  //   { x: 323, y: 1.4004 },
  //   { x: 324, y: 1.4266 },
  //   { x: 325, y: 1.4489 },
  //   { x: 326, y: 1.4672 },
  //   { x: 327, y: 1.4815 },
  //   { x: 328, y: 1.4918 },
  //   { x: 329, y: 1.4979 },
  //   { x: 330, y: 1.5 },
  //   { x: 331, y: 1.4979 },
  //   { x: 332, y: 1.4918 },
  //   { x: 333, y: 1.4815 },
  //   { x: 334, y: 1.4672 },
  //   { x: 335, y: 1.4489 },
  //   { x: 336, y: 1.4266 },
  //   { x: 337, y: 1.4004 },
  //   { x: 338, y: 1.3703 },
  //   { x: 339, y: 1.3365 },
  //   { x: 340, y: 1.299 },
  //   { x: 341, y: 1.258 },
  //   { x: 342, y: 1.2135 },
  //   { x: 343, y: 1.1657 },
  //   { x: 344, y: 1.1147 },
  //   { x: 345, y: 1.0607 },
  //   { x: 346, y: 1.0037 },
  //   { x: 347, y: 0.944 },
  //   { x: 348, y: 0.8817 },
  //   { x: 349, y: 0.817 },
  //   { x: 350, y: 0.75 },
  //   { x: 351, y: 0.681 },
  //   { x: 352, y: 0.6101 },
  //   { x: 353, y: 0.5376 },
  //   { x: 354, y: 0.4635 },
  //   { x: 355, y: 0.3882 },
  //   { x: 356, y: 0.3119 },
  //   { x: 357, y: 0.2347 },
  //   { x: 358, y: 0.1568 },
  //   { x: 359, y: 0.0785 },
  //   { x: 360, y: 0 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // const keyframe = chart.timingKeyframe({
  //   direction: 'alternate',
  //   iterationCount: 4,
  // });
  // 
  // keyframe
  //   .line()
  //   .data(data)
  //   .coordinate({ type: 'polar' })
  //   .axis('x', {
  //     grid: null,
  //     line: true,
  //     lineLineWidth: 1,
  //   })
  //   .axis('y', false)
  //   .scale('x', { tickCount: 12 })
  //   .interaction('tooltip', {
  //     crosshairs: false,
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', '#ff8800')
  //   .style('lineWidth', 2);
  // 
  // keyframe
  //   .line()
  //   .data(data)
  //   .axis('x', {
  //     grid: null,
  //     line: true,
  //     lineLineWidth: 1,
  //   })
  //   .axis('y', false)
  //   .scale('x', { tickCount: 12 })
  //   .interaction('tooltip', {
  //     crosshairs: false,
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', '#ff8800')
  //   .style('lineWidth', 2);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms requiring direct chart manipulation.
// Review the generated code carefully, especially data, algorithm, and rendering logic.



// --- Data and Algorithm Definitions ---
// TODO: Verify data type and structure
const data: any[] = [
  { x: 0, y: 0 },
  { x: 1, y: 0.0785 },
  { x: 2, y: 0.1568 },
  { x: 3, y: 0.2347 },
  { x: 4, y: 0.3119 },
  { x: 5, y: 0.3882 },
  { x: 6, y: 0.4635 },
  { x: 7, y: 0.5376 },
  { x: 8, y: 0.6101 },
  { x: 9, y: 0.681 },
  { x: 10, y: 0.75 },
  { x: 11, y: 0.817 },
  { x: 12, y: 0.8817 },
  { x: 13, y: 0.944 },
  { x: 14, y: 1.0037 },
  { x: 15, y: 1.0607 },
  { x: 16, y: 1.1147 },
  { x: 17, y: 1.1657 },
  { x: 18, y: 1.2135 },
  { x: 19, y: 1.258 },
  { x: 20, y: 1.299 },
  { x: 21, y: 1.3365 },
  { x: 22, y: 1.3703 },
  { x: 23, y: 1.4004 },
  { x: 24, y: 1.4266 },
  { x: 25, y: 1.4489 },
  { x: 26, y: 1.4672 },
  { x: 27, y: 1.4815 },
  { x: 28, y: 1.4918 },
  { x: 29, y: 1.4979 },
  { x: 30, y: 1.5 },
  { x: 31, y: 1.4979 },
  { x: 32, y: 1.4918 },
  { x: 33, y: 1.4815 },
  { x: 34, y: 1.4672 },
  { x: 35, y: 1.4489 },
  { x: 36, y: 1.4266 },
  { x: 37, y: 1.4004 },
  { x: 38, y: 1.3703 },
  { x: 39, y: 1.3365 },
  { x: 40, y: 1.299 },
  { x: 41, y: 1.258 },
  { x: 42, y: 1.2135 },
  { x: 43, y: 1.1657 },
  { x: 44, y: 1.1147 },
  { x: 45, y: 1.0607 },
  { x: 46, y: 1.0037 },
  { x: 47, y: 0.944 },
  { x: 48, y: 0.8817 },
  { x: 49, y: 0.817 },
  { x: 50, y: 0.75 },
  { x: 51, y: 0.681 },
  { x: 52, y: 0.6101 },
  { x: 53, y: 0.5376 },
  { x: 54, y: 0.4635 },
  { x: 55, y: 0.3882 },
  { x: 56, y: 0.3119 },
  { x: 57, y: 0.2347 },
  { x: 58, y: 0.1568 },
  { x: 59, y: 0.0785 },
  { x: 60, y: 0 },
  { x: 61, y: 0.0785 },
  { x: 62, y: 0.1568 },
  { x: 63, y: 0.2347 },
  { x: 64, y: 0.3119 },
  { x: 65, y: 0.3882 },
  { x: 66, y: 0.4635 },
  { x: 67, y: 0.5376 },
  { x: 68, y: 0.6101 },
  { x: 69, y: 0.681 },
  { x: 70, y: 0.75 },
  { x: 71, y: 0.817 },
  { x: 72, y: 0.8817 },
  { x: 73, y: 0.944 },
  { x: 74, y: 1.0037 },
  { x: 75, y: 1.0607 },
  { x: 76, y: 1.1147 },
  { x: 77, y: 1.1657 },
  { x: 78, y: 1.2135 },
  { x: 79, y: 1.258 },
  { x: 80, y: 1.299 },
  { x: 81, y: 1.3365 },
  { x: 82, y: 1.3703 },
  { x: 83, y: 1.4004 },
  { x: 84, y: 1.4266 },
  { x: 85, y: 1.4489 },
  { x: 86, y: 1.4672 },
  { x: 87, y: 1.4815 },
  { x: 88, y: 1.4918 },
  { x: 89, y: 1.4979 },
  { x: 90, y: 1.5 },
  { x: 91, y: 1.4979 },
  { x: 92, y: 1.4918 },
  { x: 93, y: 1.4815 },
  { x: 94, y: 1.4672 },
  { x: 95, y: 1.4489 },
  { x: 96, y: 1.4266 },
  { x: 97, y: 1.4004 },
  { x: 98, y: 1.3703 },
  { x: 99, y: 1.3365 },
  { x: 100, y: 1.299 },
  { x: 101, y: 1.258 },
  { x: 102, y: 1.2135 },
  { x: 103, y: 1.1657 },
  { x: 104, y: 1.1147 },
  { x: 105, y: 1.0607 },
  { x: 106, y: 1.0037 },
  { x: 107, y: 0.944 },
  { x: 108, y: 0.8817 },
  { x: 109, y: 0.817 },
  { x: 110, y: 0.75 },
  { x: 111, y: 0.681 },
  { x: 112, y: 0.6101 },
  { x: 113, y: 0.5376 },
  { x: 114, y: 0.4635 },
  { x: 115, y: 0.3882 },
  { x: 116, y: 0.3119 },
  { x: 117, y: 0.2347 },
  { x: 118, y: 0.1568 },
  { x: 119, y: 0.0785 },
  { x: 120, y: 0 },
  { x: 121, y: 0.0785 },
  { x: 122, y: 0.1568 },
  { x: 123, y: 0.2347 },
  { x: 124, y: 0.3119 },
  { x: 125, y: 0.3882 },
  { x: 126, y: 0.4635 },
  { x: 127, y: 0.5376 },
  { x: 128, y: 0.6101 },
  { x: 129, y: 0.681 },
  { x: 130, y: 0.75 },
  { x: 131, y: 0.817 },
  { x: 132, y: 0.8817 },
  { x: 133, y: 0.944 },
  { x: 134, y: 1.0037 },
  { x: 135, y: 1.0607 },
  { x: 136, y: 1.1147 },
  { x: 137, y: 1.1657 },
  { x: 138, y: 1.2135 },
  { x: 139, y: 1.258 },
  { x: 140, y: 1.299 },
  { x: 141, y: 1.3365 },
  { x: 142, y: 1.3703 },
  { x: 143, y: 1.4004 },
  { x: 144, y: 1.4266 },
  { x: 145, y: 1.4489 },
  { x: 146, y: 1.4672 },
  { x: 147, y: 1.4815 },
  { x: 148, y: 1.4918 },
  { x: 149, y: 1.4979 },
  { x: 150, y: 1.5 },
  { x: 151, y: 1.4979 },
  { x: 152, y: 1.4918 },
  { x: 153, y: 1.4815 },
  { x: 154, y: 1.4672 },
  { x: 155, y: 1.4489 },
  { x: 156, y: 1.4266 },
  { x: 157, y: 1.4004 },
  { x: 158, y: 1.3703 },
  { x: 159, y: 1.3365 },
  { x: 160, y: 1.299 },
  { x: 161, y: 1.258 },
  { x: 162, y: 1.2135 },
  { x: 163, y: 1.1657 },
  { x: 164, y: 1.1147 },
  { x: 165, y: 1.0607 },
  { x: 166, y: 1.0037 },
  { x: 167, y: 0.944 },
  { x: 168, y: 0.8817 },
  { x: 169, y: 0.817 },
  { x: 170, y: 0.75 },
  { x: 171, y: 0.681 },
  { x: 172, y: 0.6101 },
  { x: 173, y: 0.5376 },
  { x: 174, y: 0.4635 },
  { x: 175, y: 0.3882 },
  { x: 176, y: 0.3119 },
  { x: 177, y: 0.2347 },
  { x: 178, y: 0.1568 },
  { x: 179, y: 0.0785 },
  { x: 180, y: 0 },
  { x: 181, y: 0.0785 },
  { x: 182, y: 0.1568 },
  { x: 183, y: 0.2347 },
  { x: 184, y: 0.3119 },
  { x: 185, y: 0.3882 },
  { x: 186, y: 0.4635 },
  { x: 187, y: 0.5376 },
  { x: 188, y: 0.6101 },
  { x: 189, y: 0.681 },
  { x: 190, y: 0.75 },
  { x: 191, y: 0.817 },
  { x: 192, y: 0.8817 },
  { x: 193, y: 0.944 },
  { x: 194, y: 1.0037 },
  { x: 195, y: 1.0607 },
  { x: 196, y: 1.1147 },
  { x: 197, y: 1.1657 },
  { x: 198, y: 1.2135 },
  { x: 199, y: 1.258 },
  { x: 200, y: 1.299 },
  { x: 201, y: 1.3365 },
  { x: 202, y: 1.3703 },
  { x: 203, y: 1.4004 },
  { x: 204, y: 1.4266 },
  { x: 205, y: 1.4489 },
  { x: 206, y: 1.4672 },
  { x: 207, y: 1.4815 },
  { x: 208, y: 1.4918 },
  { x: 209, y: 1.4979 },
  { x: 210, y: 1.5 },
  { x: 211, y: 1.4979 },
  { x: 212, y: 1.4918 },
  { x: 213, y: 1.4815 },
  { x: 214, y: 1.4672 },
  { x: 215, y: 1.4489 },
  { x: 216, y: 1.4266 },
  { x: 217, y: 1.4004 },
  { x: 218, y: 1.3703 },
  { x: 219, y: 1.3365 },
  { x: 220, y: 1.299 },
  { x: 221, y: 1.258 },
  { x: 222, y: 1.2135 },
  { x: 223, y: 1.1657 },
  { x: 224, y: 1.1147 },
  { x: 225, y: 1.0607 },
  { x: 226, y: 1.0037 },
  { x: 227, y: 0.944 },
  { x: 228, y: 0.8817 },
  { x: 229, y: 0.817 },
  { x: 230, y: 0.75 },
  { x: 231, y: 0.681 },
  { x: 232, y: 0.6101 },
  { x: 233, y: 0.5376 },
  { x: 234, y: 0.4635 },
  { x: 235, y: 0.3882 },
  { x: 236, y: 0.3119 },
  { x: 237, y: 0.2347 },
  { x: 238, y: 0.1568 },
  { x: 239, y: 0.0785 },
  { x: 240, y: 0 },
  { x: 241, y: 0.0785 },
  { x: 242, y: 0.1568 },
  { x: 243, y: 0.2347 },
  { x: 244, y: 0.3119 },
  { x: 245, y: 0.3882 },
  { x: 246, y: 0.4635 },
  { x: 247, y: 0.5376 },
  { x: 248, y: 0.6101 },
  { x: 249, y: 0.681 },
  { x: 250, y: 0.75 },
  { x: 251, y: 0.817 },
  { x: 252, y: 0.8817 },
  { x: 253, y: 0.944 },
  { x: 254, y: 1.0037 },
  { x: 255, y: 1.0607 },
  { x: 256, y: 1.1147 },
  { x: 257, y: 1.1657 },
  { x: 258, y: 1.2135 },
  { x: 259, y: 1.258 },
  { x: 260, y: 1.299 },
  { x: 261, y: 1.3365 },
  { x: 262, y: 1.3703 },
  { x: 263, y: 1.4004 },
  { x: 264, y: 1.4266 },
  { x: 265, y: 1.4489 },
  { x: 266, y: 1.4672 },
  { x: 267, y: 1.4815 },
  { x: 268, y: 1.4918 },
  { x: 269, y: 1.4979 },
  { x: 270, y: 1.5 },
  { x: 271, y: 1.4979 },
  { x: 272, y: 1.4918 },
  { x: 273, y: 1.4815 },
  { x: 274, y: 1.4672 },
  { x: 275, y: 1.4489 },
  { x: 276, y: 1.4266 },
  { x: 277, y: 1.4004 },
  { x: 278, y: 1.3703 },
  { x: 279, y: 1.3365 },
  { x: 280, y: 1.299 },
  { x: 281, y: 1.258 },
  { x: 282, y: 1.2135 },
  { x: 283, y: 1.1657 },
  { x: 284, y: 1.1147 },
  { x: 285, y: 1.0607 },
  { x: 286, y: 1.0037 },
  { x: 287, y: 0.944 },
  { x: 288, y: 0.8817 },
  { x: 289, y: 0.817 },
  { x: 290, y: 0.75 },
  { x: 291, y: 0.681 },
  { x: 292, y: 0.6101 },
  { x: 293, y: 0.5376 },
  { x: 294, y: 0.4635 },
  { x: 295, y: 0.3882 },
  { x: 296, y: 0.3119 },
  { x: 297, y: 0.2347 },
  { x: 298, y: 0.1568 },
  { x: 299, y: 0.0785 },
  { x: 300, y: 0 },
  { x: 301, y: 0.0785 },
  { x: 302, y: 0.1568 },
  { x: 303, y: 0.2347 },
  { x: 304, y: 0.3119 },
  { x: 305, y: 0.3882 },
  { x: 306, y: 0.4635 },
  { x: 307, y: 0.5376 },
  { x: 308, y: 0.6101 },
  { x: 309, y: 0.681 },
  { x: 310, y: 0.75 },
  { x: 311, y: 0.817 },
  { x: 312, y: 0.8817 },
  { x: 313, y: 0.944 },
  { x: 314, y: 1.0037 },
  { x: 315, y: 1.0607 },
  { x: 316, y: 1.1147 },
  { x: 317, y: 1.1657 },
  { x: 318, y: 1.2135 },
  { x: 319, y: 1.258 },
  { x: 320, y: 1.299 },
  { x: 321, y: 1.3365 },
  { x: 322, y: 1.3703 },
  { x: 323, y: 1.4004 },
  { x: 324, y: 1.4266 },
  { x: 325, y: 1.4489 },
  { x: 326, y: 1.4672 },
  { x: 327, y: 1.4815 },
  { x: 328, y: 1.4918 },
  { x: 329, y: 1.4979 },
  { x: 330, y: 1.5 },
  { x: 331, y: 1.4979 },
  { x: 332, y: 1.4918 },
  { x: 333, y: 1.4815 },
  { x: 334, y: 1.4672 },
  { x: 335, y: 1.4489 },
  { x: 336, y: 1.4266 },
  { x: 337, y: 1.4004 },
  { x: 338, y: 1.3703 },
  { x: 339, y: 1.3365 },
  { x: 340, y: 1.299 },
  { x: 341, y: 1.258 },
  { x: 342, y: 1.2135 },
  { x: 343, y: 1.1657 },
  { x: 344, y: 1.1147 },
  { x: 345, y: 1.0607 },
  { x: 346, y: 1.0037 },
  { x: 347, y: 0.944 },
  { x: 348, y: 0.8817 },
  { x: 349, y: 0.817 },
  { x: 350, y: 0.75 },
  { x: 351, y: 0.681 },
  { x: 352, y: 0.6101 },
  { x: 353, y: 0.5376 },
  { x: 354, y: 0.4635 },
  { x: 355, y: 0.3882 },
  { x: 356, y: 0.3119 },
  { x: 357, y: 0.2347 },
  { x: 358, y: 0.1568 },
  { x: 359, y: 0.0785 },
  { x: 360, y: 0 },
];

// TODO: Verify or replace the algorithm implementation below
// Define the expected frame structure for type safety (adjust if algorithm output differs)
interface AlgorithmDatum {
  value: any; // Use a more specific type if known (e.g., number)
  // Add other properties returned by your specific algorithm's generator
  [key: string]: any; // Allow other properties
}
type AlgorithmFrame = AlgorithmDatum[];
// Define the type for the algorithm generator function
// Adjust input (arr: any[]) and output types (AlgorithmFrame) as needed
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;


// TODO: Define your algorithm generator function here.
// Example structure:
/*
interface AlgorithmDatum { value: number; swap?: boolean; index?: number; [key: string]: any; }
type AlgorithmFrame = AlgorithmDatum[];
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

function* yourAlgorithm(arr: any[]): Generator<AlgorithmFrame> {
  // Algorithm logic yielding frames...
  const initialState = arr.map((value, index) => ({ value, index }));
  yield initialState;
  // ... more steps ...
  const finalState = [...initialState]; // Modify as needed
  yield finalState;
  return finalState;
}
*/ // Algorithm function definition inserted here

// --- React Component ---
const GeneralRadarComplexRadialChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationFrameRef = useRef<number | null>(null);
  const generatorRef = useRef<Generator<AlgorithmFrame, AlgorithmFrame | void, unknown> | null>(null);
  const isMountedRef = useRef<boolean>(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  // Function to render chart with current data state
  // This function needs to be adapted based on the specific example's rendering logic
  const renderCurrentState = useCallback((frameData: AlgorithmFrame): void => {
    if (!chartRef.current || !isMountedRef.current) return;
    const chart: Chart = chartRef.current;

    try {
        // --- TODO: Adapt the rendering logic below based on the original example ---
        // This is a generic template. You'll likely need to modify the 'options'
        // object to match the specific marks, encodings, scales, etc., used in
        // the original G2 code for this animation/algorithm.
        // Use the 'spec' object parsed earlier as a reference for initial settings.

        // Example: Define the view/mark structure dynamically
        const options: G2ViewTree = { // Use G2ViewTree for chart.options
            // type: 'interval', // Set mark type if needed, or define children
            data: frameData, // Update data
            // Define encodes based on frameData structure and original example
            encode: {
                x: 'index', // Example encoding
                y: 'value', // Example encoding
                key: 'id', // Example key for animation (ensure 'id' exists in frameData)
                color: 'value', // Example encoding
                // Add other encodings as needed...
            },
            // Define scales if necessary
            scale: {
                // x: { type: 'linear' },
                // y: { domain: [0, Math.max(...frameData.map(d => d.value))] },
                // color: { palette: 'spectral' },
            },
            // Define axes
            axis: {
                // x: { title: 'Index' },
                // y: { title: 'Value' },
            },
            // Define animation behavior
            animate: {
                enter: { type: 'fadeIn', duration: Math.min(300, speed / 2) },
                update: { type: 'morph', duration: Math.min(300, speed / 2) },
                exit: { type: 'fadeOut', duration: Math.min(300, speed / 2) },
            },
            // Add other options like coordinate, legend, style based on parsed 'spec'
            coordinate: spec.coordinate,
            legend: spec.legend,
            style: spec.style,
            // --- End TODO ---
        };

        // Use chart.options() to update the spec declaratively
        chart.options(options);
        chart.render();

    } catch (e: any) {
        console.error("Error during chart render/update:", e);
        setErrorState(`Chart render error: ${e.message}`);
        setIsPlaying(false); // Stop animation on error
    }

  }, [spec, speed]); // Include spec and speed in dependencies

  // Initialize chart and generator
  useEffect(() => {
    isMountedRef.current = true;
    setErrorState(null);
    if (!containerRef.current) return;

    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
      // Attempt to get the algorithm function reference.
      // Using 'new Function' is slightly safer than eval but still has limitations.
      // It requires the algorithm code to be self-contained or rely on global scope.
      // Best practice: Define the algorithm directly in the component scope if possible.
      if (typeof window !== 'undefined' && (window as any)[algorithmName]) {
          algorithmFunction = (window as any)[algorithmName] as AlgorithmGenerator;
      } else {
          // Fallback: Try to create function (might fail with complex closures/imports)
          console.warn(`Algorithm '${algorithmName}' not found globally, attempting dynamic creation. Consider defining it directly in the component.`);
          algorithmFunction = new Function(`return (${formattedAlgorithmCode})`)() as AlgorithmGenerator;
      }


      if (typeof algorithmFunction !== 'function') {
        throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function.`);
      }
      // Create generator instance, cloning data
      const dataCopy = JSON.parse(JSON.stringify(data)); // Simple deep clone for arrays/objects
      generatorRef.current = algorithmFunction(dataCopy);

    } catch (e: any) {
      console.error(`Failed to initialize algorithm '${algorithmName}':`, e);
      setErrorState(`Failed to load algorithm: ${e.message || 'Unknown error'}`);
      generatorRef.current = null;
    }

    // Create new chart instance with initial options from parsed spec
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      // Apply base options (width, height, coordinate, etc.)
      ...initialSpecOptions, // Use the cleaned initial options
    });

    // Render the initial state if generator is ready
    if (generatorRef.current) {
        try {
            const initialStep = generatorRef.current.next();
            if (!initialStep.done && initialStep.value) {
              renderCurrentState(initialStep.value);
            } else if (initialStep.done && initialStep.value) { // Handle immediate completion
                 renderCurrentState(initialStep.value);
             }
         } catch (e: any) {
              console.error(`Error rendering initial state for algorithm '${algorithmName}':`, e);
              setErrorState(`Error rendering initial state: ${e.message || 'Unknown error'}`);
         }
     } else {
         // If generator failed, render the chart without data or with placeholder
         chartRef.current.options({ data: [] }); // Clear data
         chartRef.current.render();
     }

    // Cleanup
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = null;
      generatorRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algorithmName, formattedAlgorithmCode, renderCurrentState]); // Dependencies

  // Animation loop logic (remains largely the same)
  useEffect(() => {
    if (!isPlaying || !generatorRef.current || errorState) { // Stop if error occurs
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
      return;
    }

    let lastFrameTime = performance.now();
    const animate = (currentTime: number) => {
      if (!isPlaying || !generatorRef.current || !isMountedRef.current || errorState) {
        animationFrameRef.current = null;
        return;
      }
      const deltaTime = currentTime - lastFrameTime;
      if (deltaTime >= speed) {
        try {
            const step = generatorRef.current.next();
            if (step.done) {
              setIsPlaying(false);
              if (step.value) renderCurrentState(step.value); // Render final state
              animationFrameRef.current = null;
              return;
            }
            if (step.value) renderCurrentState(step.value);
            lastFrameTime = currentTime;
        } catch (e: any) {
             console.error("Error during animation step:", e);
             setErrorState(`Animation error: ${e.message}`);
             setIsPlaying(false); // Stop animation on error
             animationFrameRef.current = null;
             return;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    };
  }, [isPlaying, speed, renderCurrentState, errorState]);

  // Play/pause handler
  const togglePlay = (): void => {
    if (errorState) return; // Don't allow play if there's an error
    setIsPlaying(prev => !prev);
    if (isPlaying && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
    }
  };

  // Reset handler
  const resetAnimation = useCallback((): void => {
    setIsPlaying(false);
    setErrorState(null); // Clear errors on reset
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;

    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
      // Re-get the algorithm function
       if (typeof window !== 'undefined' && (window as any)[algorithmName]) {
          algorithmFunction = (window as any)[algorithmName] as AlgorithmGenerator;
      } else {
          algorithmFunction = new Function(`return (${formattedAlgorithmCode})`)() as AlgorithmGenerator;
      }

      if (typeof algorithmFunction !== 'function') {
          throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function (on reset).`);
      }
      // Create new generator with fresh data copy
      const dataCopy = JSON.parse(JSON.stringify(data));
      generatorRef.current = algorithmFunction(dataCopy);
       const initialStep = generatorRef.current.next();
       if (!initialStep.done && initialStep.value) {
           renderCurrentState(initialStep.value);
       } else if (initialStep.done && initialStep.value) {
           renderCurrentState(initialStep.value);
       } else if (chartRef.current) {
           // If generator finishes immediately with no value, clear chart data
           chartRef.current.options({ data: [] });
           chartRef.current.render();
       }

     } catch (e: any) {
         console.error(`Failed to reset algorithm '${algorithmName}':`, e);
         setErrorState(`Failed to reset algorithm: ${e.message || 'Unknown error'}`);
         generatorRef.current = null;
         // Clear chart on reset error
         if (chartRef.current) {
             chartRef.current.options({ data: [] });
             chartRef.current.render();
         }
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [algorithmName, formattedAlgorithmCode, renderCurrentState]); // Dependencies

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      <div className="flex flex-wrap items-center space-x-2 mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={togglePlay}
          disabled={!generatorRef.current || !!errorState}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={resetAnimation}
          // Allow reset even if generator failed initially, to try again
        >
          Reset
        </button>
        <div className="flex items-center space-x-2">
          <label htmlFor="speed" className="text-sm">Speed:</label>
          <input
            id="speed" type="range" min="50" max="1500" step="50"
            value={speed} onChange={handleSpeedChange} className="w-32"
            disabled={!generatorRef.current || !!errorState}
          />
          <span className="text-sm">{speed}ms</span>
        </div>
      </div>
      {errorState && (
          <div className="mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded">
              <strong>Error:</strong> {errorState}
          </div>
      )}
      <div ref={containerRef} className="h-[400px] w-full border rounded bg-muted/40">
         {/* Chart is rendered here */}
      </div>
    </div>
  );
};

export default GeneralRadarComplexRadialChart;
