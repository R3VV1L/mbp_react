import { Outlet } from 'react-router-dom';
import { CustomLink } from './customLink';


const Layout = () => {
    return (
        <>
            <header className='header'>
                <CustomLink to='/' className='textHeader'>Главная</CustomLink>
                <CustomLink to='/posts' className='textHeader'>Арты</CustomLink>
                <CustomLink to='/about' className='textHeader'>Паблик</CustomLink>
            </header>
        <Outlet/>   {/*сюда вставляются отрисовки страниц из app*/}
            <footer>2022</footer>
        </>
    )
}

export {Layout};