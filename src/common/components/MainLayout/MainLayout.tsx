import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { useStore } from '@nanostores/react';
import { $auth } from '../../../stores/AuthStore';
import { HeroPage } from '../../../pages/HeroPage/HeroPage';

export const MainLayout = () => {
    const { user } = useStore($auth);
    return (
        <>
        <div>
            <Header />
            {!user ? (
                <div className="flex justify-center items-center py-10 text-gray-500">
                    <HeroPage />
                </div>
            ) : (
                <main className='flex'>
                <SideBar />
                <Outlet />
            </main>
        )}
        </div>
        </>
    )
}
