import { UseQueryResult } from '@tanstack/react-query';
import { Job } from '../use-jobs/types';

export type JobsDetailsType = UseQueryResult<Job>;