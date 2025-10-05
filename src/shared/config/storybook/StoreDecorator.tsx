import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateShema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
