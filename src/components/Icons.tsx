import {
  Bookmark,
  Film,
  LogOut,
  LucideIcon,
  LucideProps,
  Monitor,
  Moon,
  Settings,
  Sun,
  Tv,
  User,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  settings: Settings,
  user: User,
  logout: LogOut,
  sun: Sun,
  moon: Moon,
  monitor: Monitor,
  app: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="app"
      role="img"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
      />
    </svg>
  ),
  film: Film,
  tv: Tv,
  bookmark: Bookmark,
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 26"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="logo"
      role="img"
      {...props}
    >
      <path
        d="M25.6 0L28.8 6.4H24L20.8 0H17.6L20.8 6.4H16L12.8 0H9.6L12.8 6.4H8L4.8 0H3.2C1.432 0 0.016 1.432 0.016 3.2L0 22.4C0 24.168 1.432 25.6 3.2 25.6H28.8C30.568 25.6 32 24.168 32 22.4V0H25.6Z"
        fill="currentColor"
      />
    </svg>
  ),
}
