import { IconChevronDown } from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { MenuItemType } from "@/config/menu"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: MenuItemType[]
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (title: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(title)) {
      newOpenItems.delete(title)
    } else {
      newOpenItems.add(title)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.items && item.items.length > 0 ? (
                <Collapsible
                  open={openItems.has(item.title)}
                  onOpenChange={() => toggleItem(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="sm" tooltip={item.title} className="cursor-pointer h-10">
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <IconChevronDown
                        className={`ml-auto h-4 w-4 transition-transform duration-200 ${openItems.has(item.title) ? "rotate-180" : ""
                          }`}
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton size="sm" asChild>
                            <NavLink to={subItem.url} className={({ isActive }) => isActive ? "bg-primary" : ""}>
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton size="sm" tooltip={item.title} className="h-10 cursor-pointer" asChild>
                  <NavLink to={item.url} className={({ isActive }) => isActive ? "bg-primary" : ""}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
