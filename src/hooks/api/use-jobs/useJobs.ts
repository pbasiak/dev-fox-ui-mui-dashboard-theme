import { useSuspenseQuery } from '@tanstack/react-query';
import jobs from '../../../mocks/jobs/jobs.json';
import { JobsType } from './types';

export const useJobs = (): JobsType => {
  return useSuspenseQuery({ queryKey: ['jobs'], queryFn: () => jobs });
};
