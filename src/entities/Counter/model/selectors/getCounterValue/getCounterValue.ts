import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterShema } from "../../types/counterShema";

// тут используем РЕселектор - функция createSelector, которая переиспользовать другие селекторы
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterShema) => counter.value
)