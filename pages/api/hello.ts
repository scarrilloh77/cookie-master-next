import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.cookies);
  res.status(200).json({ name: 'Sebastian Carrillo', ...req.cookies });
}
