import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useQuery } from 'react-query';
import RadioButton from 'components/atoms/RadioButton';
import { StepT, ApiData } from 'types';
import { Container, Wrapper, Options } from './form.style';
import Paragraph from 'components/atoms/Paragraph';
import Loader from 'components/atoms/Loader';

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
  const [activeStep, setActiveStep] = useState<StepT>(steps[0]);
  const { data, error, isFetching } = usePost(activeStep);

  return (
    <Container>
      <Wrapper>
        {isFetching && <Loader />}
        {error?.response && (
          <Paragraph isError>there was a problem while fetching data</Paragraph>
        )}
        {data && (
          <>
            <h2>{data.title}</h2>
            <Options>
              {data.options.map((option: string) => {
                return data?.type === 'radio' ? (
                  <RadioButton label={option} />
                ) : (
                  <p>test</p>
                );
              })}
            </Options>
          </>
        )}
      </Wrapper>
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
