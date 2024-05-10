import {gql, useQuery} from '@apollo/client';

export const MY_JOBS = gql(`

query MyJobs {
    myJobs {
      title
    }
  }
`);

export const useMyJobs = () => {
  const response = useQuery(MY_JOBS);
  return response;
};
