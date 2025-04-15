import { IconCalendarEvent } from '@tabler/icons-react'
import {
  Briefcase,
  DollarSign,
  GraduationCap,
  Landmark,
  MapPin,
  Plus,
  Tags,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const profileDetails = [
  {
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-500'>
        <IconCalendarEvent className='h-4 w-4' />
      </div>
    ),
    label: 'Available To Join (in days) - 30 days',
  },
  {
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-500'>
        <Briefcase className='h-3 w-3' />
      </div>
    ),
    label: 'Experience - 5y 2m',
  },
  {
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-500'>
        <MapPin className='h-3 w-3' />
      </div>
    ),
    label: 'Location',
  },
  {
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-500'>
        <DollarSign className='h-3 w-3' />
      </div>
    ),
    label: 'Current Salary',
  },
  {
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-500'>
        <DollarSign className='h-3 w-3' />
      </div>
    ),
    label: 'Expected Salary',
  },
]

const actions = [
  {
    label: '+Add experience',
    iconClass: 'bg-blue-100 text-blue-500',
    icon: Landmark,
  },
  {
    label: '+Add education details',
    iconClass: 'bg-kekaPurple-100 text-kekaPurple-500',
    icon: GraduationCap,
  },
]

export default function ProfileCard() {
  return (
    <Card className='rounded-none'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between py-2'>
          {profileDetails.map((detail, index) => (
            <div key={index} className='flex items-start gap-3'>
              {detail.icon}
              <div>
                <div className='text-xs font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                  {detail.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex py-2'>
          {actions.map((action, index) => (
            <div
              key={index}
              className='flex w-1/2 items-center gap-2 text-xs text-primary'
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${action.iconClass}`}
              >
                <action.icon className='h-4 w-4' />
              </div>
              <span className='text-kekaPurple-600'>{action.label}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className='flex items-center gap-2 py-4'>
          <div className='mb-2 flex items-center gap-2'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-500'>
              <Wrench className='h-4 w-4' />
            </div>
            <span className='font-medium'>Skills</span>
            <span className='rounded-md text-sm font-light'>React</span>
            <Button
              variant='ghost'
              size='icon'
              className='h-6 w-6 rounded-full'
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className='flex gap-2 py-4'>
          <div className='mb-2 flex items-center gap-2'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-500'>
              <Tags className='h-4 w-4' />
            </div>
            <span className='font-medium'>Tags</span>
            <span className='text-sm font-light text-kekaPurple-600'>
              Add Tag
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
