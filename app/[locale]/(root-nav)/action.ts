'use server';

import { FestivalInfo } from '@lib/types';
import { sql } from '@vercel/postgres';

export async function getLineupInfos(): Promise<FestivalInfo[]> {
  const { rows } = await sql<FestivalInfo>`SELECT * FROM festivals`;
  return rows;
}

export async function getLineupHero(num: number = 10): Promise<FestivalInfo[]> {
  const { rows } =
    await sql<FestivalInfo>`SELECT * FROM festivals ORDER BY RANDOM() LIMIT 10`;
  return rows;
}
