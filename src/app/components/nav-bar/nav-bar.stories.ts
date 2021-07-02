import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NAVIGATION_LINKS } from 'src/app/utils/constants';
import { ButtonComponent } from '../button/button.component';
import { NavBarComponent } from './nav-bar.component';

export default {
    component: NavBarComponent,
    decorators: [
        moduleMetadata({
            declarations: [NavBarComponent, ButtonComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Nav Bar',
} as Meta;

const Template: Story<NavBarComponent> = args => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {
    navigationPages: NAVIGATION_LINKS,
};

export const MoreLinks = Template.bind({});
MoreLinks.args = {
    navigationPages: [
        {
            isActive: false,
            linkName: 'Link One',
            route: ['test'],
        },
        {
            isActive: false,
            linkName: 'Link Two',
            route: ['test'],
        },
        {
            isActive: false,
            linkName: 'Link Three',
            route: ['test'],
        },
    ]
}