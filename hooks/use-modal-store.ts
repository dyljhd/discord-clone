import { Server } from '@prisma/client';
import { create } from 'zustand';

export type ModalType =
  | 'createServer'
  | 'invite'
  | 'editServer'
  | 'members'
  | 'createChannel'
  | 'leaveServer';

interface IModalData {
  server?: Server;
}

interface IModalStore {
  type: ModalType | null;
  data: IModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: IModalData) => void;
  onClose: () => void;
}

export const useModal = create<IModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
