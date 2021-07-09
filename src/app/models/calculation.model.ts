export interface QuickCalculation {
    chainringSize?: number;
    rearCogSize?: number;
}

export interface CustomCalculation {
    numberOfChainrings?: number;
    chainringSizes: number[];
    casetteSpeed?: number;
    minCasetteSpeed?: number;
    maxCasetteSpeed?: number;
}