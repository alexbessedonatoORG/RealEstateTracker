import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export const MainLayout = () => {
    return (
        <div>
            <Header />
            <main className='flex'>
                <SideBar />
                <Outlet />
            </main>
        </div>
    )
}
