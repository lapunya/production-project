import { createAsyncThunk } from "@reduxjs/toolkit"
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = 
    createAsyncThunk<Profile, void, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, {extra, rejectWithValue}) => {
            try {
                const response = await extra.api.get('/profile')

                if(!response?.data) {
                    throw new Error()
                }

                return response.data
            } catch(e) {
                console.log(e);
                return rejectWithValue('error')
            }
        
        },
    )