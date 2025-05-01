import { G2Spec } from '@antv/g2'; // Import G2 types if needed directly

export interface ExampleInfo {
  id: string;
  componentName: string;
  filePath: string;
  originalFilePath: string;
  originalDemoDir: string; // Directory containing the original demo.ts and index.en.md
}

export interface HelperFunction {
  name: string;
  code: string;
}

export interface ComplexLogicDetails {
  hasAnimation: boolean;
  hasAlgorithm: boolean;
  algorithmCode: string | null;
  rawDataDeclaration: string | null;
  keyframeDeclaration: string | null;
  animationLoop: string | null;
}

export interface ParseResult {
  spec: Record<string, any>; // Can be refined further if needed
  needsFetching: boolean;
  fetchUrl: string | null;
  originalData: any;
  helperFunctions: HelperFunction[];
  isComplex: boolean;
  complexDetails: ComplexLogicDetails;
}

// Type for algorithm generator function
export interface AlgorithmDatum {
  value: any;
  [key: string]: any;
}
export type AlgorithmFrame = AlgorithmDatum[];
export type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

// Type for initial chart options in complex components
export interface InitialChartOptions {
    width?: number;
    height?: number;
    autoFit?: boolean;
    container?: HTMLElement | string;
    scale?: G2Spec['scale'];
    coordinate?: G2Spec['coordinate'];
    axis?: G2Spec['axis'];
    legend?: G2Spec['legend'];
    style?: G2Spec['style'];
    interaction?: G2Spec['interaction'];
    plugins?: any;
    theme?: G2Spec['theme'];
    [key: string]: any;
}

// Type for options passed to chart.options() in complex components
export type RenderOptions = G2Spec & {
    data: AlgorithmFrame;
};

// Type for parameters passed to generateAnimationAlgorithmComponent
export interface AnimationAlgorithmComponentParams {
  componentName: string;
  title: string;
  description: string | null;
  originalCode: string;
  example: ExampleInfo;
  spec: Record<string, any>;
  rawDataDeclaration: string | null;
  algorithmCode?: { name: string; code: string } | null;
  keyframeDeclaration?: string | null;
  animationLoop?: string | null;
  potentialImports: string[];
  wrapperPath: string;
  g2SpecImport: string;
  helperFunctions: HelperFunction[];
  algorithmResult: { name: string; code: string } | null;
}

