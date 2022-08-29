import db from '../../../database/data.json';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProducts(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(db.data.allContentfulProductPage.edges);
}
