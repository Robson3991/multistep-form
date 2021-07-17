export type ApiData = {
  title: string;
  options: Array<string>;
  subtitle?: string;
  footer?: string;
  type?: 'radio';
};

export type StepT = 'kind' | 'gender' | 'age' | 'diseases' | 'language';
export type StepsT = StepT[];

export interface ParsedUrlQuery {
  [key: string]: string | string[];
}
