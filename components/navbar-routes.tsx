'use client';

import { UserButton } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isPlayerPage = pathname?.startsWith('/chapter');
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOut className="h-4 w-5 mr-2" />
          Exit
        </Button>
      ) : (
        <Link href="/teacher/courses">
          <Button className='size="sm' variant={'ghost'}>
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};
