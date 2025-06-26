import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useLocation } from "react-router-dom"
import { mainMenu, MenuItemType } from "@/config/menu"
import { useEffect, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { appConfig } from "@/config/app"

export function SiteHeader() {
  const location = useLocation()
  const [currentMenu, setCurrentMenu] = useState<MenuItemType | null>(null)


  useEffect(() => {
    const currentMenu = mainMenu.navMain.find(menu => menu.url === location.pathname)
    if (currentMenu) {
      setCurrentMenu(currentMenu)
    }
    if (location.pathname.includes("/settings")) {
      setCurrentMenu(mainMenu.navMain[3].items?.find(item => item.url === location.pathname) || null)
    }
  }, [location])

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{currentMenu?.title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href={appConfig.github.url}
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
