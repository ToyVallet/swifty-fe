'use server';

import { type FestivalInfo } from '@lib/types';
import { sql } from '@vercel/postgres';

export async function getLineupInfos(id: number): Promise<FestivalInfo> {
  const { rows } =
    await sql<FestivalInfo>`SELECT * FROM festivals WHERE id = ${id}`;
  return rows[0];
}
