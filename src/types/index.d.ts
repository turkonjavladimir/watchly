import { type Icon as LucideIcon } from "lucide-react"

import { Icons } from "@/components/Icons"

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
  }
}

export type NavItem = {
  href: string
  title: string
  disabled?: boolean
  icon: keyof typeof Icons
}
