import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter'
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/aboutPage/AboutPage.async';
import { MainPageAsync } from './pages/mainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: false}, [theme])}>
        <button onClick={toggleTheme}>
          Toggle theme
        </button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path={'/'} element={<MainPageAsync/>}/>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
        </Routes>
        </Suspense>
        <Counter/>
    </div>
  )
}

export default App