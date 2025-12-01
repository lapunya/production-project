import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateShema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<Return, Arg, RejectedValue> = 
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

// любые запросы на сервер в тестах необходимо мокать
jest.mock('axios');
// кроме самого модуля мокаем его внутренние поля
const mockedAxios = jest.mocked(axios, true);

// Return - тип, который возвращает thunk, Arg - аргумент, RejectedValue - то, что возвращает thunk в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    
    dispatch: jest.MockedFn<any>;
    getState: () => StateShema;
    actionCreator:  ActionCreatorType<Return, Arg, RejectedValue>
    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>
    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    // создаем функцию, с помощью которой будем вызывать асинхронный экшн
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate
        });

        return result;
    }
}