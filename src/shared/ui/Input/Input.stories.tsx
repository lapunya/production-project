import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input} from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// в данном случае компонент рендерится изолировано  и ничего не знает про css переменные
// поэтому импортируем их
// сделали это через StyleDecorator


export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// сюда прописываем пропсы
Primary.args = {
    label: 'Label'
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)]

Dark.args = {
    label: 'Label'
};