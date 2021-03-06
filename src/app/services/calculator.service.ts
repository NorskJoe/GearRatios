import { Injectable } from "@angular/core";
import { CalculationResult, QuickCalculation, CustomCalculation } from "../models/calculation.model";

@Injectable({
    providedIn: 'root',
})
export class CalculatorService {

    public calculateQuickRatios(inputs: QuickCalculation): CalculationResult {
        return {
            chainrings: [
                {
                    chainringSize: inputs.chainringSize,
                    cogs: [
                        {
                            cogSize: inputs.rearCogSize,
                            ratio: this.findRatio(inputs.rearCogSize, inputs.chainringSize)
                        },
                    ],
                },
            ],
        };
    }

    public calculateCustomRatios(inputs: CustomCalculation): CalculationResult {
        let result = { chainrings: [] } as CalculationResult;
        let cogs: number[] = [];
        for (let i = inputs.minCasetteSpeed; i <= inputs.maxCasetteSpeed; i++) {
            cogs.push(i);
        }

        inputs.chainringSizes.forEach((chainring) => {
            result.chainrings.push({
                chainringSize: chainring,
                cogs: cogs.map((cog) => {
                    return {
                        cogSize: cog,
                        ratio: this.findRatio(cog, chainring)
                    };
                })
            });
        });

        return result;
    }

    private findRatio(cogSize: number, chainringSize: number): number {
        return +(chainringSize / cogSize).toFixed(2);
    }
}