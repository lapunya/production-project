
import type {Profile, ProfileShema} from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    Profile,
    ProfileShema,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard
}