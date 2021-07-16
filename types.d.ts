export type ApiData = {
  title: string;
  options: Array<string>;
  subtitle?: string;
  footer?: string;
  type?: 'radio';
}

export type StepT = 'kind' | 'gender' | 'age' | 'diseases' | 'language';