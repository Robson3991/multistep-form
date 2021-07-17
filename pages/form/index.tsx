import { useState } from 'react';
import Option from 'components/atoms/Option';
import { StepsT } from 'types';
import { Container, Wrapper, Options, Buttons } from './form.style';
import Paragraph from 'components/atoms/Paragraph';
import Loader from 'components/atoms/Loader';
import Button from 'components/atoms/Button';
import Link from 'next/link';
import useForm from 'api/form';
import { useAppSelector } from 'store/hooks';
import useFormQuery from './useFormQuery';

export default function Category() {
  const steps: StepsT = ['kind', 'gender', 'age', 'diseases', 'language'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const { data, error, isFetching } = useForm(steps[activeStep]);
  const [options, setOptions] = useState<Array<string> | []>([]);
  const state = useAppSelector((state) => state.form[steps[activeStep]]);

  const handleChangeStep = (direction: 'prev' | 'next') => {
    setOptions([]);
    setActiveStep((prevState) => {
      return direction == 'next' ? prevState + 1 : prevState - 1;
    });
  };

  const isRadio = data?.type === 'radio';

  const handleOptionhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const isCheckbox = target.type === 'checkbox';

    if (isCheckbox) {
      if (target.checked) {
        setOptions((prevState) => {
          return [...prevState, target.value];
        });
      } else {
        setOptions((prevState) => {
          return prevState.filter((item) => item !== target.value);
        });
      }
    }

    if (!isCheckbox) {
      setOptions([target.value]);
    }
  };

  useFormQuery({
    options,
    steps,
    activeStep,
  });

  return (
    <Container>
      <Wrapper bordered={!isRadio}>
        {isFetching && <Loader />}
        {(error as any)?.response && (
          <Paragraph isError>there was a problem while fetching data</Paragraph>
        )}
        {data && (
          <>
            <h2>{data.title}</h2>
            <Options columns={!isRadio}>
              {data.options.map((option: string, index: number) => (
                <Option
                  key={index}
                  label={option}
                  name={isRadio ? 'radio' : ''}
                  type={isRadio ? 'radio' : 'checkbox'}
                  value={option}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOptionhange(e)
                  }
                  checked={state.includes(option)}
                />
              ))}
            </Options>
          </>
        )}
      </Wrapper>
      <Buttons>
        {activeStep !== 0 && (
          <Button prev onClick={() => handleChangeStep('prev')}>
            Prev
          </Button>
        )}
        {activeStep !== steps.length - 1 && (
          <Button light onClick={() => handleChangeStep('next')}>
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Link href="/therapists">
            <Button light as="a">
              Search
            </Button>
          </Link>
        )}
      </Buttons>
    </Container>
  );
}
