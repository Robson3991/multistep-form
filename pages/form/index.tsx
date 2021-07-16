import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Option from 'components/atoms/Option';
import { StepT } from 'types';
import { Container, Wrapper, Options, Buttons } from './form.style';
import Paragraph from 'components/atoms/Paragraph';
import Loader from 'components/atoms/Loader';
import Button from 'components/atoms/Button';
import Link from 'next/link';

interface PageProps {
  slug: string;
}

const getDataBySlug = async (slug: string) => {
  const { data } = await axios.get(`/api/${slug}`);
  return data;
};

function usePost(slug: string) {
  return useQuery(['post', slug], () => getDataBySlug(slug), {
    enabled: !!slug,
  });
}

export default function Category({ slug }: PageProps) {
  const steps: Array<StepT> = ['kind', 'gender', 'age', 'diseases', 'language'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const { data, error, isFetching } = usePost(steps[activeStep]);

  const handleChange = (direction: 'prev' | 'next') => {
    setActiveStep((prevState) => {
      return direction == 'next' ? prevState + 1 : prevState - 1;
    });
  };

  const isRadio = data?.type === 'radio';

  return (
    <Container>
      <Wrapper bordered={!isRadio}>
        {isFetching && <Loader />}
        {error?.response && (
          <Paragraph isError>there was a problem while fetching data</Paragraph>
        )}
        {data && (
          <>
            <h2>{data.title}</h2>
            <Options columns={!isRadio}>
              {data.options.map((option: string) => {
                return isRadio ? (
                  <Option label={option} name="radio" type="radio" />
                ) : (
                  <Option label={option} type="checkbox" />
                );
              })}
            </Options>
          </>
        )}
      </Wrapper>
      <Buttons>
        {activeStep !== 0 && (
          <Button prev onClick={() => handleChange('prev')}>
            Prev
          </Button>
        )}
        {activeStep !== steps.length - 1 && (
          <Button light onClick={() => handleChange('next')}>
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

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      slug: query,
    },
  };
}
