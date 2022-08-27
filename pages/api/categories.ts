import path from 'path';
import { promises as fs } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function getCategories(_req: NextApiRequest, res: NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'database');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/categories.json', 'utf8');
  //Return the content of the data file in json format
  return res.status(200).json(JSON.parse(fileContents).data);
}
