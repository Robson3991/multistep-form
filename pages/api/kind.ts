import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData } from 'types';

const data: ApiData = {
  title: 'What is your gender',
  options: [
    'Female',
    'Male',
    'Other'
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  res.status(200).json(data)
}
