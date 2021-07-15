import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData } from 'types';

const data: ApiData = {
  title: 'What best desc you are struggling with',
  options: [
    'emotional crysis',
    'family problems',
    'mood problems',
    'abortion',
    'agression',
    'anorexia',
    'bulimia',
    'bipolar',
    'depression',
    'violence'
  ],
  subtitle: 'Choose at least one option.'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  res.status(200).json(data)
}
