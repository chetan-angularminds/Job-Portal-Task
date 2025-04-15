import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/_authenticated/jobs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header className='py-1'>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main className='p-0'>
        <Outlet />
      </Main>
    </>
  )
}

const topNav = [
  {
    title: 'HOME',
    href: '/',
    isActive: false,
    disabled: true,
  },
  {
    title: 'JOBS',
    href: '/jobs',
    isActive: true,
    disabled: false,
  },
  {
    title: 'CANDIDATES',
    href: '/jobs/candidates',
    isActive: false,
    disabled: false,
  },
  {
    title: 'MESSAGES',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
  {
    title: 'PREBOARDING',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
]
