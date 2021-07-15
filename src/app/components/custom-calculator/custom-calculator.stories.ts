import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { DropdownInputComponent } from '../dropdown-input/dropdown-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { SliderInputComponent } from '../slider-input/slider-input.component';
import { TipComponent } from '../tip/tip.component';
import { CustomCalculatorComponent } from './custom-calculator.component';

export default {
    component: CustomCalculatorComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                CustomCalculatorComponent,
                DropdownInputComponent,
                SliderInputComponent,
                NumberInputComponent,
                ButtonComponent,
                TipComponent,
            ],
            imports: [
                CommonModule,
                NgxSliderModule,
                FormsModule,
            ],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Custom Component'
} as Meta;

const Template: Story<CustomCalculatorComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {}