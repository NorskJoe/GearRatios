export interface QuickCalculation {
    chainringSize: number;
    rearCogSize: number;
}

export interface CustomCalculation {
    numberOfChainrings?: number;
    chainringSizes: number[];
    casetteSpeed?: number;
    minCasetteSpeed: number;
    maxCasetteSpeed: number;
}

export interface CalculationResult {
    chainrings: Chainring[];
}

export interface Chainring {
    chainringSize: number;
    cogs: Cog[];
}

export interface Cog {
    ratio: number;
    cogSize: number;
}
