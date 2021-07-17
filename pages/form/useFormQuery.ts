import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { StepT, StepsT } from 'types';
import { useAppDispatch } from 'store/hooks';
import { formDataChange } from 'store/slices/form';

interface HookProps {
  options: Array<string> | [];
  steps: StepsT;
  activeStep: number;
}

const useFormQuery = ({ options, steps, activeStep }: HookProps) => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (options.length) {
      const queryCopy = { ...query, [steps[activeStep]]: options.join(',') };
      let queryString = '';
      for (const property in queryCopy) {
        queryString += `${property}=${queryCopy[property]}&`;
      }
      router.push(`?${queryString}`, undefined, { shallow: true });
    }
  }, [options]);

  useEffect(() => {
    for (const property in query) {
      if (steps.includes(property as StepT)) {
        const data = (query[property] as StepT).split(',');
        dispatch(
          formDataChange({
            type: property as StepT,
            data,
          }),
        );
      }
    }
  }, [query]);
};

export default useFormQuery;
