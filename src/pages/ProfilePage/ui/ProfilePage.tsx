import { profileReducer } from '../../../entities/Profile';
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const {t} = useTranslation();

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage;