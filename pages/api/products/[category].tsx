import { capitalize } from '@miista/lib';
import db from '../../../database/data.json';

import { filter } from 'smart-array-filter';

import { NextApiRequest, NextApiResponse } from 'next';

const getProductsFilteredByCategory = (query: string, data: typeof db.data.allContentfulProductPage.edges) => {
  const q = query.includes('-') ? query.split('-')[1] : query;
  const category = capitalize(q);
  const filtered = filter(data, { keywords: `node.categoryTags:${category}` });
  return filtered;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  const mockData = db.data.allContentfulProductPage.edges;

  if (category === 'all') {
    return res.status(200).json(mockData);
  }

  const filteredProducts = getProductsFilteredByCategory(String(category), mockData);

  return res.status(200).json(filteredProducts);
}
