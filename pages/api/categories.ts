import db from '../../database/categories.json';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function getCategories(req: NextApiRequest, res: NextApiResponse) {
  const data = db.data;

  return res.status(200).json(data);
}
