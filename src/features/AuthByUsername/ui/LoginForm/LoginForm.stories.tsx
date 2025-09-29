import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
// сюда прописываем пропсы
Primary.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)]

Dark.args = {};