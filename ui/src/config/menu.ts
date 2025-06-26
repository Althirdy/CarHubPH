import {
    IconCamera,
    IconCar,
    IconDashboard,
    IconDatabase,
    IconFileAi,
    IconFileDescription,
    IconFileWord,
    IconHelp,
    IconReport,
    IconSearch,
    IconSettings,
    IconCalendar,
    IconMapPin, type Icon
} from '@tabler/icons-react'


export type MenuItemType = {
    title: string
    isActive?: boolean
    url: string
    icon?: Icon
    items?: MenuItemType[]
}
type MenuType = {
    navMain: MenuItemType[]
    navClouds: MenuItemType[]
    navSecondary: MenuItemType[]
    documents: MenuItemType[]
}


export const mainMenu: MenuType = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Cars",
            url: "/cars",
            icon: IconCar,
        },
        {
            title: "Bookings",
            url: "/bookings",
            icon: IconCalendar,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: IconSettings,
            items: [
                {
                    title: "Location Settings",
                    url: "/settings/location",
                    icon: IconMapPin,
                },
            ]
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
    documents: [
        {
            title: "Data Library",
            url: "#",
            icon: IconDatabase,
        },
        {
            title: "Reports",
            url: "#",
            icon: IconReport,
        },
        {
            title: "Word Assistant",
            url: "#",
            icon: IconFileWord,
        },
    ],
}

export const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg"
}
