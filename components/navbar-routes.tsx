'use client';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isPlayerPage = pathname?.startsWith('/chapter');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button variant={'ghost'}>
            <LogOut className="h-4 w-5 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button className='size="sm' variant={'ghost'}>
            Teacher mode
          </Button>
        </Link>
      )}
      {isMounted && <UserButton afterSwitchSessionUrl="/" />}
    </div>
  );
};
