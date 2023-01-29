import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';

import { useUser } from '../../hooks/api/use-user/useUser';

export const UserAccountPage = () => {
  const user = useUser();
  console.log('XXXX', user);

  return (
    <SidebarLayout>
      {/*@ts-ignore*/}
      {user?.firstName}
    </SidebarLayout>
  )
}