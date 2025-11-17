import { Country, Currency } from "shared/const/common";

export interface Profile {
    name: string; 
    lastname: string; 
    age: number; 
    city: string; 
    country: Country;
    currency: Currency;
}

export interface ProfileShema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}