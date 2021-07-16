import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData } from 'types';

const data: ApiData = {
  title: 'Language of therapy',
  options: [
    'English',
    'Polish',
    'Romanian',
    'Spanish',
    'Italian',
    'Russian',
    'German',
    'Arabic',
  ],
  subtitle: 'Choose at least one language or more if you need.'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  res.status(200).json(data)
}
