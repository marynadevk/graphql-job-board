export interface IJob {
  id: string;
  date: string;
  title: string;
  company?: {
    name: string;
  };
};
