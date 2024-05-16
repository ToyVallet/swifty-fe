'use server';

import { type FestivalInfo, type LineUp } from '@lib/types';
import { sql } from '@vercel/postgres';

export async function getFestivalInfos(id: number): Promise<FestivalInfo> {
  const { rows } =
    await sql<FestivalInfo>`SELECT * FROM festivals WHERE id = ${id}`;
  return rows[0];
}

export async function getLineups(festivalId: number): Promise<LineUp[]> {
  const { rows } = await sql<LineUp>`SELECT * FROM lineup WHERE festival_id = ${festivalId}`;
  return rows;
}
