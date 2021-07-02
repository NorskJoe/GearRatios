import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputMode } from 'src/app/models/input.model';
import { ButtonComponent } from '../button/button.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { UserInputsComponent } from './user-inputs.component';

export default {
    component: UserInputsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                UserInputsComponent, 
                NumberInputComponent, 
                ButtonComponent,
            ],
            imports: [CommonModule],
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'User inputs',
} as Meta;

const Template: Story<UserInputsComponent> = args => ({
    props: {
        ...args,
    },
});

export const QuickModeInputs = Template.bind({});
QuickModeInputs.args = {
    mode: InputMode.Quick,
};