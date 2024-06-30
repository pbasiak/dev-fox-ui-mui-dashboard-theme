import { UseSuspenseQueryResult } from '@tanstack/react-query';
import { Descendant } from 'slate';

export interface Job {
  title: string;
  company: string;
  location: string;
  description: Descendant[];
  requirements: string[];
  salary: string;
  tags: string[];
}

interface JobsResponse {
  jobs: Job[];
  totalPages: number;
  totalItems: number;
  page: number;
}

export type JobsType = UseSuspenseQueryResult<JobsResponse>;
