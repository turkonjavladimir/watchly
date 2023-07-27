import { NavItem } from "@/types"

export const navConfig: NavItem[] = [
  {
    href: "/",
    title: "Home",
    icon: "app",
  },
  {
    href: "/movies",
    title: "Movies",
    icon: "film",
  },
  {
    href: "/shows",
    title: "Shows",
    icon: "tv",
  },
]

export const userMenuConfig: NavItem[] = [
  {
    href: "/profile",
    title: "Profile",
    icon: "user",
    disabled: true,
  },
  {
    href: "/bookmarks",
    title: "Bookmarks",
    icon: "bookmark",
  },
  {
    href: "/settings",
    title: "Settings",
    icon: "settings",
    disabled: true,
  },
]
