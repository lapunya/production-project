import { profileReducer } from '../../../entities/Profile';
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData } from '../../../entities/Profile';
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';
const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage;