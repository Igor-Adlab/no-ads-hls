import { Outlet } from 'react-router-dom';

import { Logo } from '../components/Logo'

export function Layout() {
    return (
        <div className="page">
             <div className="mx-auto flex flex-col items-center mt-10 mb-5">
                <Logo />
            </div>
            <div className="mb-7"><Outlet /></div>
        </div>
    );
}