import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SliderInputComponent } from './slider-input.component';

export default {
    component: SliderInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [SliderInputComponent],
            imports: [CommonModule, NgxSliderModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Slider Input',
} as Meta;

const Template: Story<SliderInputComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    label: 'Input Label',
    hint: 'Hint text',
    minRange: 10,
    maxRange: 50,
    minValue: 10,
    maxValue: 50,
};