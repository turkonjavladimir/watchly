import { NavItem } from "@/types"

import { Icons } from "@/components/Icons"
import { NavLink } from "@/components/nav-link"

type MobileNavProps = {
  items: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-[#161D2F] px-6 md:top-6 md:m-6 md:rounded-lg">
      <Link href="/">
        <Icons.logo className="h-7 w-7 text-red-500 md:h-8 md:w-8" />
      </Link>

      <ul className="flex h-14 items-center md:h-16">
        {items.map((item) => {
          return (
            <li key={item.href} className="flex">
              <NavLink href={item?.href} icon={item?.icon} />
            </li>
          )
        })}
      </ul>
      <div>menu</div>
    </nav>
  )
}
