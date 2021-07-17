import axios from 'axios';
import { useQuery } from 'react-query';

const getDataBySlug = async (slug: string) => {
  const { data } = await axios.get(`/api/${slug}`);
  return data;
};

function useForm(slug: string) {
  return useQuery(['post', slug], () => getDataBySlug(slug), {
    enabled: !!slug,
  });
}

export default useForm;