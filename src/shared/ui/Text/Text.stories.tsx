import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from './Text';

// в данном случае компонент рендерится изолировано  и ничего не знает про css переменные
// поэтому импортируем их
// сделали это через StyleDecorator


export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
// сюда прописываем пропсы
Primary.args = {
    title: 'Title',
    text: 'Text text text'
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text text text',
    theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only title'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only text'
};