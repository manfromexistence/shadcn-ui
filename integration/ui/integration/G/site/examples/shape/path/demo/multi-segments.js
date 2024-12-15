import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer({
  shaderCompilerPath: '/glsl_wgsl_compiler_bg.wasm',
});

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path = new Path({
  style: {
    d: 'M 0 395.708 L 0.308 394.171 L 0.616 391.627 L 0.924 390.84 L 1.847 390.928 L 2.463 391.168 L 2.771 390.498 L 3.079 390.49 L 3.387 390.192 L 4.311 387.925 L 4.619 387.094 L 4.926 385.768 L 4.926 385.433 L 5.234 384.413 L 6.158 383.961 L 6.466 385.302 L 6.774 385.433 L 7.082 383.902 L 7.39 383.48 L 8.313 382.051 L 8.621 380.915 L 8.929 381.388 L 9.237 382.992 L 9.545 380.856 L 10.777 380.324 L 11.084 377.103 L 11.392 375.34 L 12.008 377.373 L 12.932 375.238 L 13.24 374.261 L 13.548 373.554 L 13.856 373.241 L 14.163 372.935 L 14.779 376.068 L 15.087 375.93 L 15.395 378.029 L 15.703 377.118 L 16.011 375.842 L 16.935 372.497 L 17.243 373.54 L 17.55 375.077 L 17.858 373.365 L 18.166 374.02 L 19.09 374.501 L 19.398 376.462 L 19.706 374.829 L 20.014 375.799 L 20.322 374.72 L 21.553 375.289 L 21.861 370.982 L 22.477 366.915 L 22.785 367.243 L 23.708 368.679 L 23.708 367.207 L 24.016 367.177 L 24.324 365.953 L 24.632 363.286 L 25.556 363.016 L 25.864 362.426 L 26.172 363.002 L 26.48 361.632 L 26.787 358.899 L 27.711 358.935 L 28.019 365.356 L 28.327 363.628 L 28.635 357.259 L 28.943 358.826 L 29.866 360.589 L 30.174 367.637 L 30.79 365.275 L 31.098 364.19 L 31.406 367.571 L 32.33 365.093 L 32.638 365.254 L 32.946 365.997 L 33.253 371.55 L 33.253 372.563 L 34.177 370.53 L 34.485 373.27 L 34.793 376.28 L 35.101 378.357 L 35.409 374.706 L 36.332 374.589 L 36.64 370.69 L 36.948 367.09 L 37.256 368.139 L 37.564 365.057 L 38.488 367.279 L 38.796 371.237 L 39.104 365.946 L 39.411 364.364 L 39.719 362.739 L 41.259 358.6 L 41.567 363.993 L 41.875 365.268 L 42.183 367.629 L 42.798 364.029 L 43.106 364.918 L 43.414 363.927 L 43.722 363.672 L 44.03 362.499 L 44.954 362.79 L 45.262 360.961 L 45.569 361.07 L 45.877 361.406 L 46.185 358.607 L 47.109 355.597 L 47.417 352.027 L 47.725 352.325 L 48.033 351.065 L 48.341 351.815 L 49.572 349.724 L 49.88 348.186 L 50.188 348.572 L 50.496 349.797 L 50.804 346 L 51.728 341.292 L 52.035 341.328 L 52.035 342.108 L 52.343 345.431 L 52.651 341.773 L 53.575 341.97 L 53.883 340.075 L 54.191 337.765 L 54.499 337.218 L 54.807 339.463 L 55.73 336.591 L 56.038 327.992 L 56.346 328.16 L 56.654 330.455 L 56.962 329.056 L 57.886 328.772 L 58.193 327.38 L 58.501 325.23 L 59.117 327.059 L 59.425 326.746 L 60.349 327.978 L 60.657 323.889 L 60.965 327.89 L 61.272 335.783 L 61.58 343.143 L 62.196 351.604 L 62.504 339.798 L 62.812 342.604 L 63.12 343.923 L 63.428 342.4 L 64.351 344.178 L 64.659 340.607 L 64.967 340.891 L 65.583 338.647 L 66.507 337.918 L 66.815 336.264 L 67.123 332.321 L 67.431 329.355 L 67.738 330.863 L 68.97 333.312 L 69.278 332.62 L 69.586 328.473 L 69.894 325.23 L 70.202 322.06 L 70.817 322.126 L 71.125 326.258 L 71.433 324.567 L 71.741 323.86 L 72.049 324.909 L 72.973 329.275 L 73.281 330.31 L 73.589 330.208 L 73.896 327.227 L 74.204 322.344 L 75.128 318.781 L 75.744 318.671 L 76.052 318.948 L 76.36 318.03 L 77.283 319.305 M 105.918 354.687 L 106.226 356.173 L 106.534 353.171 L 106.842 352.099 L 107.766 350.052 L 108.074 352.274 L 108.381 353.295 L 108.381 351.028 L 108.689 356.428 L 109.613 355.962 L 109.921 355.525 L 110.229 351.648 L 110.537 351.072 L 110.845 346.299 L 111.768 341.11 L 112.076 346.911 L 112.384 344.95 L 112.692 340.541 L 113 339.966 L 113.924 338.136 L 114.232 336.089 L 114.54 336.89 L 115.155 332.481 L 115.463 331.796 L 116.387 329.034 L 116.695 327.628 L 117.003 330.594 L 117.311 328.794 L 117.619 329.967 L 118.234 326.535 L 118.542 325.223 L 118.85 327.919 L 119.158 325.39 L 119.466 326.928 L 120.39 329.858 L 120.698 328.182 L 121.005 333.8 L 121.313 334.631 L 121.621 331.629 L 122.853 327.795 L 123.161 327.373 L 123.469 327.606 L 123.777 326.105 L 125.008 328.036 L 125.316 328.568 L 125.624 328.699 L 125.932 325.609 L 126.24 328.371 L 127.163 331.308 L 127.163 328.371 L 127.471 331.891 L 127.779 337.393 L 128.087 338.042 L 129.011 334.784 L 129.319 331.439 L 129.627 333.392 L 129.935 331.825 L 130.243 335.928 L 131.166 337.466 L 131.474 337.4 L 131.782 334.383 L 132.09 341.037 L 132.398 339.703 L 133.322 341.634 L 133.937 336.358 L 134.245 341.095 L 134.553 339.681 L 135.785 336.008 L 136.093 332.809 L 136.401 336.672 L 136.401 334.937 L 136.708 337.889 L 137.632 336.941 L 137.94 340.031 L 138.248 337.721 L 138.556 338.45 L 138.864 343.303 L 139.787 342.473 L 140.095 345.584 L 140.403 342.494 L 140.711 347.763 L 141.019 345.511 L 141.943 351.137 L 142.251 349.184 L 142.559 347.144 L 142.866 347.822 L 143.482 349.49 L 144.406 351.99 L 144.714 346.59 L 145.022 344.003 L 145.33 344.455 L 145.638 340.097 L 146.253 337.174 L 146.561 334.864 L 146.869 332.991 L 147.177 332.977 L 147.485 335.586 L 148.409 335.841 L 148.717 337.196 L 149.025 335.513 L 149.332 336.642 L 149.64 334.821 L 150.564 337.911 L 150.872 337.116 L 151.18 336.366 L 151.488 337.043 L 151.796 340.111 L 153.335 342.545 L 153.643 341.984 L 153.951 346.167 L 154.259 346.925 L 155.183 348.572 L 155.49 353.12 L 155.49 353.171 L 155.798 352.413 L 156.106 355.117 L 157.03 361.369 L 157.338 361.719 L 157.646 370.501 L 157.954 365.939 L 158.262 360.968 L 159.185 368.154 L 159.493 371.222 L 159.801 369.859 L 160.109 367.513 L 160.417 370.202 L 161.341 386.949 L 161.649 380.827 L 162.264 384.136 L 162.572 390.709 L 162.88 392.917 L 163.804 392.137 L 164.112 398.682 L 164.42 398.223 L 164.728 398.988 L 164.728 393.114 L 165.651 383.305 L 165.959 387.809 L 166.267 392.276 L 166.575 389.405 L 166.883 392.677 L 167.807 391.919 L 168.114 396.984 L 168.422 393.063 L 168.73 392.072 L 169.038 393.42 L 169.962 396.546 L 170.27 390.848 L 170.578 387.466 L 170.886 382.736 L 171.193 385.251 L 172.425 385.71 L 172.733 382.773 L 173.041 388.377 L 173.349 391.438 L 173.657 392.065 L 174.272 393.784 L 174.58 394.593 L 174.888 397.982 L 175.196 393.376 L 175.504 397.895 L 176.428 399.425 L 176.736 398.135 L 177.044 400.773 L 177.351 405 L 177.659 403.477 L 178.583 395.92 L 178.891 397.487 L 179.199 394.426 L 179.507 394.426 L 179.815 396.124 L 181.046 398.849 L 181.354 396.269 L 181.662 393.77 L 181.97 397.042 L 182.278 395.154 L 183.202 390.986 L 183.51 390.738 L 183.51 392.086 L 183.817 394.426 L 184.125 392.043 L 185.049 394.608 L 185.357 394.112 L 185.665 398.682 L 185.973 398.485 L 186.281 398.07 L 187.204 401.174 L 187.512 400.708 L 187.82 401.684 L 188.128 401.684 L 188.436 401.123 L 189.36 400.54 L 189.668 400.773 L 189.975 401.458 M 218.302 384.449 L 218.61 381.519 L 218.918 379.129 L 219.842 377.336 L 220.15 379.851 L 220.458 378.889 L 220.766 376.52 L 220.766 376.52 L 221.689 376.046 L 221.997 377.438 L 222.305 377.927 L 222.613 375.15 L 222.921 373.714 L 223.845 375.842 L 224.153 374.924 L 224.46 375.106 L 224.768 372.271 L 225.076 373.365 L 226 372.76 L 226.308 373.365 L 226.616 372.461 L 226.924 371.958 L 227.54 370.931 L 228.463 367.411 L 228.771 366.944 L 229.079 367.097 L 229.387 369.604 L 229.695 369.509 L 230.311 369.233 L 230.619 372.986 L 230.926 376.578 L 231.234 374.057 L 231.542 374.443 L 232.466 371.361 L 232.774 370.778 L 233.082 371.929 L 233.39 373.161 L 233.698 374.385 L 234.929 368.351 L 235.237 366.696 L 235.545 365.224 L 235.853 364.685 L 237.084 362.105 L 237.392 362.003 L 237.7 360.939 L 238.008 358.906 L 238.316 358.228 L 239.24 358.826 L 239.548 359.649 L 239.548 361.449 L 239.856 361.668 L 240.163 363.84 L 241.087 364.481 L 241.395 364.292 L 241.703 364.853 L 242.011 364.634 L 242.319 362.011 L 243.243 363.548 L 243.55 365.997 L 243.858 364.386 L 244.166 361.734 L 244.474 359.853 L 245.398 360.196 L 245.706 359.861 L 246.322 359.569 L 246.629 361.617 L 246.937 361.617 L 247.861 362.645 L 248.169 364.984 L 248.477 363.658 L 248.785 364.284 L 248.785 362.71 L 249.708 359.926 L 250.016 359.977 L 250.324 356.618 L 250.632 356.151 L 250.94 353.069 L 251.864 352.223 L 252.172 353.244 L 252.48 349.432 L 252.787 348.645 L 253.095 347.064 L 254.019 346.984 L 254.327 347.056 L 254.635 347.035 L 254.943 345.023 L 255.251 344.586 L 256.482 342.371 L 256.79 343.012 L 257.098 343.332 L 257.406 344.207 L 257.714 343.041 L 258.33 343.617 L 258.946 343.187 L 259.253 340.92 L 259.561 342.115 L 260.485 347.355 L 260.793 344.141 L 261.101 343.704 L 261.409 342.443 L 261.717 340.337 L 262.64 340.454 L 262.948 340.206 L 263.256 341.656 L 263.564 340.17 L 263.872 339.732 L 264.796 341.073 L 265.411 343.194 L 265.719 343.281 L 266.027 342.283 L 266.335 339.543 L 267.567 337.634 L 267.875 338.938 L 267.875 337.903 L 268.183 338.195 L 269.106 337.058 L 269.414 336.008 L 269.722 331.119 L 270.03 329.165 L 270.338 328.823 L 271.262 329.552 L 271.569 329.216 L 271.877 328.473 L 272.185 329.697 L 272.493 330.754 L 273.417 327.999 L 273.725 328.561 L 274.033 328.582 L 274.649 331.855 L 274.956 328.91 L 275.88 328.094 L 276.188 325.186 L 276.496 325.012 L 276.804 325.726 L 277.112 324.851 L 277.728 324.603 L 278.035 325.179 L 278.343 324.254 L 278.651 324.786 L 278.959 326.615 L 279.883 325.296 L 280.191 318.81 L 280.499 314.321 L 280.807 314.117 L 281.114 315.035 L 282.038 316.099 L 282.346 319.823 L 282.654 323.445 L 282.962 320.566 L 283.27 326.287 L 284.501 325.697 L 284.809 326.105 L 285.117 324.603 L 285.425 322.257 L 285.733 322.031 L 286.657 316.842 L 286.657 315.734 L 286.965 315.538 L 287.272 316.456 L 287.58 314.663 L 288.504 313.074 L 288.812 312.805 L 289.12 313.563 L 289.428 317.534 L 289.736 317.964 L 290.659 313.621 L 290.967 314.67 L 291.275 314.853 L 291.583 314.853 L 291.891 317.476 L 292.815 317.972 L 293.431 320.114 L 293.738 320.654 L 294.046 320.471 L 294.354 322.774 L 295.278 325.959 L 295.586 325.288 L 295.894 319.509 L 295.894 320.508 L 296.202 321.79 L 297.125 320.107 L 297.433 322.155 L 297.741 321.528 L 298.049 323.838 L 298.357 321.237 L 299.281 319.196 L 299.589 317.644 L 299.896 316.376 L 300.204 311.318 L 300.512 311.318 L 301.436 309.445 L 301.744 311.274 L 302.052 309.423 L 302.36 310.087 M 330.687 291.693 L 330.995 291.693 L 331.918 289.856 L 332.226 289.091 L 332.534 288.319 L 332.842 288.792 L 333.15 287.451 L 333.766 287.087 L 334.074 286.985 L 334.381 284.609 L 334.689 282.255 L 334.997 283.363 L 335.921 283.603 L 336.229 285.411 L 336.537 274.749 L 336.845 269.466 L 337.153 266.288 L 338.076 267.257 L 338.384 272.694 L 338.692 273.015 L 339 267.884 L 339.308 273.386 L 340.54 269.553 L 340.847 275.143 L 341.155 277.11 L 341.463 284.201 L 341.771 291.773 L 342.387 278.56 L 342.695 276.717 L 343.003 272.658 L 343.311 275.376 L 343.619 278.684 L 344.542 278.393 L 344.85 279.748 L 345.158 282.678 L 345.466 290.388 L 345.774 287.065 L 346.698 283.829 L 347.005 284.952 L 347.313 285.761 L 347.621 279.027 L 347.929 276.454 L 348.853 276.454 L 349.469 273.576 L 349.777 271.302 L 350.084 271.907 L 350.392 277.125 L 351.316 280.783 L 351.624 281.956 L 351.932 286.424 L 351.932 281.097 L 352.24 278.91 L 353.163 278.349 L 353.471 274.407 L 353.779 268.897 L 354.087 265.53 L 354.395 263.927 L 355.319 266.769 L 355.627 264.087 L 355.935 266.186 L 356.243 267.622 L 356.55 269.298 L 357.474 268.132 L 357.782 276.972 L 358.09 280.353 L 358.706 282.576 L 359.014 283.698 L 359.937 283.698 L 360.245 282.467 L 360.553 275.157 L 360.861 275.573 L 361.169 274.458 L 361.785 276.163 L 362.093 280.156 L 362.401 279.479 L 362.708 280.412 L 363.016 281.541 L 363.94 284.689 L 364.248 280.091 L 364.556 278.378 L 364.864 274.895 L 365.172 274.224 L 366.095 274.705 L 366.403 271.207 L 366.711 273.481 L 367.019 275.558 L 367.327 276.185 L 368.559 272.832 L 368.866 272.774 L 369.174 272.009 L 369.482 272.942 L 369.79 274.115 L 370.714 272.905 L 370.714 274.611 L 371.022 281.33 L 371.33 280.164 L 371.638 282.124 L 372.561 283.188 L 372.869 280.033 L 373.177 279.231 L 373.485 281.556 L 373.793 281.731 L 374.717 284.529 L 375.025 288.807 L 375.332 286.65 L 375.64 288.552 L 375.948 287.575 L 376.872 286.934 L 377.18 286.497 L 377.796 281.228 L 378.104 279.887 L 378.411 275.077 L 379.335 275.077 L 379.643 275.777 L 379.951 272.053 L 380.259 271.943 L 380.259 271.696 L 381.183 269.05 L 381.49 268.307 L 381.798 266.733 L 382.106 262.105 L 382.414 262.98 L 383.338 257.252 L 383.646 256.858 L 383.954 253.958 L 384.262 253.105 L 384.569 250.627 L 385.493 251.473 L 385.801 254.606 L 386.109 254.235 L 386.417 256.873 L 387.033 257.769 L 387.956 260.597 L 388.264 253.09 L 388.572 252.908 L 388.88 252.886 L 389.188 249.352 L 389.804 248.412 L 390.112 246.094 L 390.42 244.928 L 390.728 243.347 L 391.035 234.288 L 391.959 231.913 L 392.267 238.114 L 392.575 237.356 L 392.883 238.093 L 393.191 239.586 L 394.114 238.588 L 394.422 239.164 L 394.73 239.324 L 395.038 241.212 L 395.346 244.316 L 396.578 241.984 L 396.886 238.209 L 397.193 235.702 L 397.501 231.716 L 397.809 232.547 L 398.733 231.461 L 399.041 233.312 L 399.041 231.891 L 399.349 232.889 L 399.657 239.178 L 400.58 239.9 L 400.888 243.872 L 401.196 244.666 L 401.504 238.887 L 401.812 240.126 L 402.736 235.294 L 403.044 238.668 L 403.351 234.245 L 403.967 234.099 L 404.891 232.736 L 405.199 236.905 L 405.815 233.079 L 406.123 231.803 L 406.431 232.321 L 407.354 230.346 L 407.662 231.76 L 407.97 229.719 L 408.278 230.63 L 408.278 230.047 L 409.202 229.238 L 409.51 230.244 L 409.817 230.193 L 410.125 229.544 L 410.433 230.011 L 411.357 228.845 L 411.665 227.394 L 411.973 226.695 L 412.281 227.832 L 413.512 227.045 L 413.82 226.469 L 414.128 226.6 L 414.436 227.788 L 414.744 228.59 M 443.071 212.557 L 443.995 215.013 L 444.302 216.689 L 444.61 217.308 L 444.918 217.279 L 445.226 219.48 L 445.842 222.585 L 446.15 221.419 L 446.458 218.7 L 446.766 221.404 L 447.074 225.019 L 447.997 221.819 L 448.305 217.44 L 448.613 214.124 L 448.921 208.082 L 450.153 206.399 L 450.46 208.286 L 450.768 208.483 L 451.076 210.961 L 451.384 208.498 L 452.616 211.303 L 452.924 209.904 L 453.232 208.906 L 453.54 210.961 L 453.847 211.026 L 454.771 210.341 L 454.771 208.993 L 455.079 210.611 L 455.387 211.092 L 455.695 215.516 L 456.619 220.763 L 456.926 218.693 L 457.234 215.975 L 457.542 215.494 L 457.85 219.363 L 458.774 219.961 L 459.082 221.572 L 459.39 218.227 L 459.698 219.524 L 460.005 217.767 L 461.237 210.174 L 461.853 211.865 L 462.161 211.435 L 462.469 213.373 L 463.392 217.308 L 463.7 221.681 L 464.008 221.535 L 464.316 222.082 L 464.316 226.155 L 465.24 225.645 L 465.548 221.389 L 465.856 225.536 L 466.163 226.695 L 466.471 230.266 L 467.395 233.866 L 467.703 226.593 L 468.011 228.553 L 468.319 222.271 L 468.627 225.828 L 469.55 221.681 L 469.858 219.334 L 470.166 220.223 L 470.474 219.036 L 471.09 213.504 L 472.322 209.008 L 472.629 207.31 L 472.937 203.345 L 473.245 201.516 L 473.861 205.677 L 474.169 205.86 L 474.477 202.748 L 474.785 202.93 L 475.093 197.719 L 476.016 191.248 L 476.324 189.025 L 476.632 181.701 L 476.94 181.417 L 477.248 177.037 L 478.172 173.248 L 478.48 169.669 L 478.787 177.555 L 479.095 178.116 L 479.403 179.092 L 480.635 174.523 L 480.943 180.236 L 481.251 177.569 L 481.559 188.646 L 481.866 191.379 L 482.79 206.253 L 483.098 191.095 L 483.098 198.616 L 483.406 191.321 L 483.714 188.923 L 484.638 184.245 L 484.946 186.38 L 485.253 186.409 L 485.561 196.896 L 485.869 204.198 L 486.793 203.899 L 487.101 191.394 L 487.409 189.514 L 487.717 191.306 L 488.025 184.121 L 488.948 179.464 L 489.256 179.449 L 489.564 183.21 L 490.18 185.979 L 490.488 191.066 L 491.719 186.919 L 492.027 183.866 L 492.335 183.713 L 492.643 188.566 L 493.259 186.773 L 493.567 183.363 L 493.875 179.952 L 494.183 177.285 L 494.49 171.79 L 495.414 163.679 L 495.722 162.353 L 496.03 163.307 L 496.338 170.828 L 496.646 169.021 L 497.569 169.844 L 497.877 172.694 L 498.185 174.334 L 498.493 179.027 L 498.801 185.768 L 500.033 190.665 L 500.341 192.195 L 500.649 188.005 L 500.956 188.646 L 501.264 194.163 L 501.88 180.309 L 502.188 171.943 L 502.496 170.559 L 502.804 166.011 L 503.112 156.122 L 504.035 157.587 L 504.343 155.947 L 504.651 173.16 L 504.959 175.572 L 505.267 177.351 L 506.191 167.95 L 506.499 173.78 L 506.807 171.717 L 507.114 168.737 L 507.422 168.547 L 508.346 168.671 L 508.962 174.698 L 509.27 174.042 L 509.578 169.917 L 509.886 171.98 L 510.809 172.351 L 511.117 167.614 L 511.425 175.594 L 511.425 182.926 L 511.733 183.363 L 512.657 187.269 L 512.965 180.295 L 513.272 183.253 L 513.58 188.617 L 513.888 190.417 L 514.812 194.739 L 515.12 189.273 L 515.428 196.211 L 516.044 198.703 L 516.967 189.557 L 517.275 191.685 L 517.583 185.126 L 518.199 180.951 L 518.507 179.661 L 519.431 177.249 L 519.738 178.75 L 520.046 180.105 L 520.354 178.961 L 520.662 176.804 L 521.278 178.101 L 521.586 180.309 L 521.894 186.591 L 522.202 187.502 L 522.51 185.986 L 523.433 185.119 L 523.741 175.106 L 524.049 174.749 L 524.357 173.211 L 524.665 169.655 L 525.896 167.396 L 526.204 170.231 L 526.512 168.423 L 526.82 168.511 M 556.071 12.826 L 556.379 5.036 L 556.687 8.687 L 556.995 1.858 L 558.226 0 L 558.226 5.677 L 558.534 7.309 L 558.842 9.809 L 559.15 22.591 L 560.074 40.883 L 560.381 19.334 L 560.689 20.325 L 560.997 35.556 L 561.305 46.094 L 562.229 47.027 L 562.537 55.349 L 562.845 19.115 L 563.153 20.791 L 563.46 24.217 L 564.384 38.078 L 565 39.426',
    lineWidth: 1,
    lineJoin: 'round',
    stroke: '#54BECC',
    cursor: 'pointer',
  },
});

const path2 = new Path({
  style: {
    d: 'M 100 100 L 200 100 L 200 200 z M 300 100 L 300 200 L 200 300 z',
    // d: 'M 100 100 L 200 100  L 200 200 M 300 100 L 300 200 L 200 300',
    fill: 'red',
    // stroke: 'red',
  },
});
path.addEventListener('mouseenter', () => {
  path.style.stroke = 'red';
});
path.addEventListener('mouseleave', () => {
  path.style.stroke = '#54BECC';
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);
  canvas.appendChild(path2);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', [
    'canvas',
    'svg',
    'webgl',
    'webgpu',
    'canvaskit',
  ])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
