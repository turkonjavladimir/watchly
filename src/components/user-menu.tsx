"use client"

import Link from "next/link"
import { NavItem } from "@/types"
import { useTheme } from "next-themes"

import { themeOptions } from "@/config/theme"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/Icons"
import { UserAvatar } from "@/components/user-avatar"

export function UserMenu({
  user,
  items,
}: {
  user: {
    name: string
    image?: string
    email?: string
  }
  items: NavItem[]
}) {
  const { setTheme, theme } = useTheme()
  const themeName = theme
    ? theme.charAt(0).toUpperCase() + theme.slice(1)
    : "Undefined"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        suppressHydrationWarning
        className="outline-none focus-visible:ring-0"
      >
        <UserAvatar user={{ name: "sdfdsfsfsdf" }} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {/* User */}
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.name && (
              <p className="w-[180px] truncate font-medium">{user?.name}</p>
            )}
            {user?.email && (
              <p className="w-[180px] truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        {/* Links */}
        {items?.map((item) => {
          const Icon = Icons[item.icon]
          return (
            <DropdownMenuItem
              asChild
              key={item.href}
              disabled={item?.disabled}
              className="group cursor-pointer"
            >
              <Link href={item?.href} className="transition-colors">
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </DropdownMenuItem>
          )
        })}
        <DropdownMenuSeparator />

        {/* Auth */}
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/login" className="transition-colors">
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/register" className="transition-colors">
            Register
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* Theme */}
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {theme === "system" ? (
              <Icons.monitor className="mr-2 h-4 w-4" />
            ) : (
              <>
                <Icons.sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icons.moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            )}
            <span>{themeName}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {themeOptions?.map((item) => {
                const Icon = Icons[item?.icon!]
                return (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    key={item.value}
                    onClick={() => setTheme(item.value)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Logout */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled
          onSelect={(event) => {
            event.preventDefault()
            console.log("Signed out")
          }}
          className="cursor-pointer"
        >
          <Icons.logout className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
