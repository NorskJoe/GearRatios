import { Injectable } from "@angular/core";
import { CalculationResult, QuickCalculation, CustomCalculation } from "../models/calculation.model";

@Injectable()
export class CalculatorService {

    public calculateQuickRatios(inputs: QuickCalculation): CalculationResult {
        return {
            ratios: [
                this.findRatio(inputs.rearCogSize, inputs.chainringSize),
            ],
        };
    }

    public calculateCustomRatios(inputs: CustomCalculation): CalculationResult[] {
        let result = [] as CalculationResult[];
        let cogs: number[] = [];
        for (let i = inputs.minCasetteSpeed; i <= inputs.maxCasetteSpeed; i++) {
            cogs.push(i);
        }

        inputs.chainringSizes.forEach((chainring) => {
            result.push({
                ratios: cogs.map(x => this.findRatio(x, chainring))
            });
        })
        return result;
    }

    private findRatio(cogSize: number, chainringSize: number): string {
        return (chainringSize / cogSize).toFixed(2);
    }
}