import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TipComponent } from '../tip/tip.component';
import { QuickCalculatorComponent } from './quick-calculator.component';

export default {
    component: QuickCalculatorComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                QuickCalculatorComponent,
                NumberInputComponent,
                ButtonComponent,
                TipComponent,
            ],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Quick Component',
} as Meta;

const Template: Story<QuickCalculatorComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {};