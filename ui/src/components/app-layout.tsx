import { Outlet } from 'react-router'
import { AppHeader } from './app-header'
// import { AppFooter } from './app-footer'
import { AppSidebar } from './app-sidebar'

export function AppLayout() {
    return (
        <div className="min-h-screen w-full flex bg-muted/50">
            <AppSidebar  />
            <div className="flex-1 flex flex-col">
                <AppHeader />
                <main className="">
                    <Outlet />
                </main>
                {/* <AppFooter /> */}
            </div>
        </div>
    )
}