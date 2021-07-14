import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DropdownInputComponent } from './dropdown-input.component';

export default {
    component: DropdownInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [DropdownInputComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Dropdown Input',
} as Meta;

const Template: Story<DropdownInputComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    options: [
        'Option 1',
        'Option 2',
        'Option 3',
    ],
    label: 'Input label',
    hint: 'Hint text',
};