import { useQuery } from '@tanstack/react-query';
import jobs from '../../../mocks/jobs/jobs.json';
import { JobsType } from './types';

export const useJobs = (): JobsType => {
  return useQuery({ queryKey: ['jobs'], queryFn: () => jobs });
};
