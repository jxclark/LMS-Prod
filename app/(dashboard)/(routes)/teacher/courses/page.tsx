import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Courses = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Mew Course</Button>
      </Link>
    </div>
  );
};

export default Courses;
