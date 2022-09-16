import { Outlet } from 'react-router-dom';
import { CustomLink } from './customLink';


const Layout = () => {
    return (
        <>
            <header className='header'>
                <CustomLink to='/' className='textHeader'>Home</CustomLink>
                <CustomLink to='/posts' className='textHeader'>Blog</CustomLink>
                <CustomLink to='/about' className='textHeader'>About us</CustomLink>
            </header>
        <Outlet/>   {/*сюда вставляются отрисовки страниц из app*/}
            <footer>2022</footer>
        </>
    )
}

export {Layout};