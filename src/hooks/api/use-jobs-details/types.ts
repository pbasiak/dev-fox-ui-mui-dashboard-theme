import { UseSuspenseQueryResult } from '@tanstack/react-query';
import { Job } from '../use-jobs/types';

export type JobsDetailsType = UseSuspenseQueryResult<Job>;
