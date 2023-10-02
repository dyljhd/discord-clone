'use client';

import { useEffect, useState } from 'react';

import { CreateChannelModal } from '@/components/modals/create-channel-modal';
import { CreateServerModal } from '@/components/modals/create-server-modal';
import { EditServerModal } from '@/components/modals/edit-server-modal';
import { InviteModal } from '@/components/modals/invite-modal';
import { LeaveServerModal } from '@/components/modals/leave-server-modal';
import { MembersModal } from '@/components/modals/members-modal';

export const ModalProvider = () => {
  // This `useState` and `useEffect` is being used to prevent a NextJS hydration error
  // This is an open Github issue, linked below:
  // https://github.com/shadcn-ui/ui/issues/419
  // https://github.com/radix-ui/primitives/issues/1386
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
    </>
  );
};
