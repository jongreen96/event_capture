import { getUserPlans } from '@/db/queries';
import getSession from '@/lib/getSession';
import { redirect } from 'next/navigation';
import Plans from './_components/plans';

export default async function PlansPage() {
  const session = await getSession();
  if (!session?.user?.id) redirect('/');
  const plan = await getUserPlans(session.user.id);

  return (
    <main>
      <Plans reference={false} userId={session.user.id} />
      {/* TODO: Show currently active plans */}
    </main>
  );
}
