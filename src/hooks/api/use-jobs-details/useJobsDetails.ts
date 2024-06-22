import { useSuspenseQuery } from '@tanstack/react-query';
import jobsDetails from '../../../mocks/jobs/jobs-details.json';
import { JobsDetailsType } from './types';

export const useJobsDetails = (): JobsDetailsType => {
  return useSuspenseQuery({ queryKey: ['job-details'], queryFn: () => jobsDetails });
};
