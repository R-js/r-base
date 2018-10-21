export type ScalarType = number | string | boolean;
export type ScalarFunc = () => ScalarType;
export type FactorType = ScalarType | ScalarFunc | null;  