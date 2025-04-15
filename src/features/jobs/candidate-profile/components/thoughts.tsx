import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Circle, EllipsisVertical, LockKeyhole } from "lucide-react";

export function Thoughts() {
  return (
    <Card className='min-h-full w-1/4 rounded-none p-4'>
      <Input
        placeholder='Share your thoughts and notes here...'
        className='mb-6 rounded-none'
      />

      <div className='mb-6'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <div>
              <Avatar className='h-8 w-8 bg-kekaPurple-600'>
                <AvatarFallback className='bg-[#9e69af] text-white'>ST</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-sm'>Smita Tayade</span>
              </div>
              <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                <LockKeyhole size={15} className='text-red-600' />{' '}
                <Circle fill='gray' color='gray' size={7} />
                Mar 20, 2025 at 6:16 pm
              </div>
            </div>
          </div>
          <div>
            <EllipsisVertical size={17} className='text-muted-foreground' />
          </div>
        </div>

        <div className='pl-8 pt-1'>dfdsfsf</div>
      </div>
    </Card>
  )
}
