import path from 'path';
import { promises as fs } from 'fs';

import { sleep } from '@miista/lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProducts(_req: NextApiRequest, res: NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'database');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format

  const data: [] = JSON.parse(fileContents).data.allContentfulProductPage.edges;

  await sleep(1000);
  return res.status(200).json(data);
}
