// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import conn from '../conn/conn'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await conn.promise().query('SELECT * from Clientes')
  return res.status(200).json(data[0]);
}
