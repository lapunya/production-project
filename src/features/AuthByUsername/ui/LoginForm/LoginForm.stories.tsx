import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({loginForm: {username: 'admin', password: '123'}})]

// сюда прописываем пропсы
Primary.args = {};

export const WithLoading = Template.bind({});
WithLoading.decorators = [StoreDecorator({loginForm: {isLoading: true}})]

// сюда прописываем пропсы
WithLoading.args = {};

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({loginForm: {username: 'admin', password: '123', error: 'Error'}})]

// сюда прописываем пропсы
WithError.args = {};