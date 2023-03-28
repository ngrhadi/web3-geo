import { supabaseClient, useClientSB } from '@/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const cookies = req.cookies['supabase-auth-token']?.toString();
  const session = supabaseClient.auth
    .getSession()
    .then((value) => value)
    .catch((err) => console.log(err))
    .finally(() => console.log('final'));
  console.log(session);
  res.send({ message: 'SUCCESS', session: cookies });
}
