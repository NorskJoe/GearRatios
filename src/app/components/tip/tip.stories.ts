import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TipComponent } from './tip.component';

export default {
    component: TipComponent,
    decorators: [
        moduleMetadata({
            declarations: [TipComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Tip',
} as Meta;

const Template: Story<TipComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    visible: true,
    text: 'My tip text',
};