import { Calendar, Home, HomeIcon, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { cookies } from "next/headers";
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export async function AppSidebar() {
  return(
<Sidebar className="w-64 h-full border-r data-[collapsed=true]:w-16 transition-all duration-300">
      <SidebarHeader>
        <div className="text-2xl p-3">EventFlow</div>
        <SidebarGroup>
          <SidebarMenuButton>Events</SidebarMenuButton>
          <SidebarMenuButton>Settings</SidebarMenuButton>
        </SidebarGroup>
      </SidebarHeader>
    </Sidebar>
  )
}