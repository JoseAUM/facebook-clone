import type { NextApiRequest, NextApiResponse } from 'next';
import { findAll, getUser } from './verbs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let users, statusCode;

  if (req.query?.id) {
    users = await getUser(req.query?.id);
    statusCode = users ? 200 : 500;
  } else {
    const page = Number(req.query?.page || '0');
    const perPage = Number(req.query?.perPage || '10');
    users = await findAll(page, perPage);
    statusCode = 'meta' in users ? 200 : 500;
  }
  res.status(statusCode).json(users);
}
