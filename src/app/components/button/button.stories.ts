import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonType } from 'src/app/models/button.model';
import { ButtonComponent } from './button.component';

export default {
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Buttons',
} as Meta;

const Template: Story<ButtonComponent> = args => ({
    props: {
        ...args,
    },
});

export const SubmitForm = Template.bind({});
SubmitForm.args = {
    buttonType: ButtonType.FORM_SUBMIT,
    buttonLabel: 'Submit',
};

export const ActiveNavigation = Template.bind({});
ActiveNavigation.args = {
    buttonType: ButtonType.NAVIGATION_ACTIVE,
    navItem: {
        route: ['test'],
        linkName: 'Link Name',
        isActive: true,
    }
};

export const InActiveNavigation = Template.bind({});
InActiveNavigation.args = {
    buttonType: ButtonType.NAVIGATION_INACTIVE,
    navItem: {
        route: ['test'],
        linkName: 'Link Name',
        isActive: false,
    }
};