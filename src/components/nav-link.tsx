"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/Icons"

export function NavLink({
  href,
  icon,
}: {
  href: string
  icon: keyof typeof Icons
}) {
  const currentRoute = usePathname()
  const Icon = Icons[icon]
  return (
    <Link href={href} className="p-4">
      {
        <Icon
          className={`h-5 w-5 ${
            currentRoute === href
              ? "text-white"
              : "text-[#5A698F] group-hover:text-red-500"
          }  transition-colors`}
        />
      }
    </Link>
  )
}
