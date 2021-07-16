import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData } from 'types';

const data: ApiData = {
  title: 'How old are you?',
  options: [
    '16 - 17',
    '18 - 59',
    '60+'
  ],
  footer: 'If you re under 16 ask dult for a help',
  type: 'radio'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  res.status(200).json(data)
}
