import { NextApiRequest, NextApiResponse } from 'next';
import EnergyData from '../../models/EnergyData';
import dbConnect from '../../lib/dbConnect';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const newData = await EnergyData.create(req.body);
      res.status(201).json(newData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}