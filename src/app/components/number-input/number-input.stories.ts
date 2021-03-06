import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NumberInputComponent } from './number-input.component';

export default {
    component: NumberInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [NumberInputComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Number Input',
} as Meta;

const Template: Story<NumberInputComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    label: 'Input Label',
    hint: 'Hint text',
};