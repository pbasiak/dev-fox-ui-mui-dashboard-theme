import { UseQueryResult } from '@tanstack/react-query';

export interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
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


export type JobsType = UseQueryResult<JobsResponse>;