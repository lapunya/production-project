import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateShema } from "app/providers/StoreProvider";

type ActionCreatorType<Return, Arg, RejectedValue> = 
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

// Return - тип, который возвращает thunk, Arg - аргумент, RejectedValue - то, что возвращает thunk в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    
    dispatch: jest.MockedFn<any>;
    getState: () => StateShema;
    actionCreator:  ActionCreatorType<Return, Arg, RejectedValue>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    // создаем функцию, с помощью которой будем вызывать асинхронный экшн
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}