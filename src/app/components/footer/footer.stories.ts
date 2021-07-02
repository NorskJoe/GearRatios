import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular'
import { FooterComponent } from './footer.component';

export default {
    component: FooterComponent,
    decorators: [
        moduleMetadata({
            declarations: [FooterComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Footer',
} as Meta;

const Template: Story<FooterComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    githubLink: 'test',
};