import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';

import { useUser } from '../../hooks/api/use-user/useUser';

export const UserAccountPage = () => {
  const { user } = useUser();

  return (
    <SidebarLayout>
      {user.firstName}
    </SidebarLayout>
  )
}