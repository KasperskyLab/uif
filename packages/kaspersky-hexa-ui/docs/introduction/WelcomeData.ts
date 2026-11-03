
import alexeyAvatar from './team/alexey.png'
import konstantinAvatar from './team/konstantin.png'
import vitalyAvatar from './team/vitaly.png'
import yuliyaAvatar from './team/yuliya.png'
import anatolyAvatar from './team/anatoly.png'
import platonAvatar from './team/platon.png'
import kirillAvatar from './team/kirill.png'
import vladimirAvatar from './team/vladimir.png'
import aniAvatar from './team/ani.png'
import imanAvatar from './team/iman.png'
import nikitaAvatar from './team/nikita.png'
import valeryAvatar from './team/valery.png'
import renataAvatar from './team/renata.png'

export type TeamMember = {
  name: string
  role: string
  initials: string
  avatar?: string
  href: string | null
}

export const teamDataIsMock = false

// Лиды
export const leads: TeamMember[] = [
  {
    name: 'Alexey Goreminsky',
    role: 'Design Team Lead',
    initials: 'AG',
    avatar: alexeyAvatar,
    href: null,
  },
  {
    name: 'Platon Yasev',
    role: 'Development Team Lead',
    initials: 'PY',
    avatar: platonAvatar,
    href: null,
  },
]

// Дизайнеры
export const dsDesigners: TeamMember[] = [
  {
    name: 'Vitaly Lazarev',
    role: 'Visual designer/Widgets',
    initials: 'VL',
    avatar: vitalyAvatar,
    href: null,
  },
  {
    name: 'Konstantin Kuzin',
    role: 'Senior visual designer/Storybook',
    initials: 'KK',
    avatar: konstantinAvatar,
    href: null,
  },
  {
    name: 'Anatoly Skurygin',
    role: 'Visual designer/Patterns',
    initials: 'AS',
    avatar: anatolyAvatar,
    href: null,
  },
  {
    name: 'Yulia Reshetnikova',
    role: 'Visual designer/Icons',
    initials: 'YR',
    avatar: yuliyaAvatar,
    href: null,
  },
]

// Разработчики
export const dsDevelopers: TeamMember[] = [
  {
    name: 'Kirill Olenichev',
    role: 'Senior Developer',
    initials: 'KO',
    avatar: kirillAvatar,
    href: null,
  },
  {
    name: 'Vladimir M. Vasilyev',
    role: 'Junior Developer',
    initials: 'VV',
    avatar: vladimirAvatar,
    href: null,
  },
]

// Контрибьюторы
export const contributors: TeamMember[] = [
  {
    name: 'Ani Sarkisyan',
    role: 'Developer',
    initials: 'AS',
    avatar: aniAvatar,
    href: null,
  },
  {
    name: 'Iman Khayauri',
    role: 'Intern',
    initials: 'IK',
    avatar: imanAvatar,
    href: null,
  },
  {
    name: 'Valery Malyshev',
    role: 'Senior Developer',
    initials: 'VM',
    avatar: valeryAvatar,
    href: null,
  },
  {
    name: 'Nikita Afanasyev',
    role: 'Developer',
    initials: 'NA',
    avatar: nikitaAvatar,
    href: null,
  },
  {
    name: 'Renata Bazhanova',
    role: 'Intern',
    initials: 'RB',
    avatar: renataAvatar,
    href: null,
  },
]

