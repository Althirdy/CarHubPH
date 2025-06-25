import {
    CircleAlert,
    Files,
    Gauge,
    LucideIcon,
    Settings
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Dashboard',
        url: '/',
        icon: Gauge
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
        items: [
            {
                title: 'General',
                url: '/settings/general',
                icon: Settings
            },
        ]
    }
]
