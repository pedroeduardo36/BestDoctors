import create from 'zustand';

export const useAppointmentStore = create(set => ({
  doctor: 0,
  setDoctor: doctor => set({doctor}),
}));
