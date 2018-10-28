export type ScalarType = number | string | boolean;
export type ScalarFunc = () => ScalarType;
export type FactorType = ScalarType | ScalarFunc | null;
export type TYPESASSTRINGS = "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"; 