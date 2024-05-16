'use client';

import { parseFestivalDate } from '@/app/lib/utils';
import { type LineUp } from '@lib/types';
import dayjs, { type Dayjs } from 'dayjs';
import Image from 'next/image';
import { useState } from 'react';

import DateSelector from './date-selector';

type LineUpSectionProps = {
  lineups: LineUp[];
};

export default function LineUpSection({ lineups }: LineUpSectionProps) {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs(lineups[0].date));
  const lineupDates = Array.from(
    new Set(lineups.map(({ date }) => dayjs(date).format('YYYY-MM-DD'))),
  );

  return (
    <section id="line-up" className="flex flex-col gap-5">
      <h1 className="w-full text-center text-xl font-bold">라인업</h1>
      <DateSelector
        selectedDate={currentDate}
        availableDays={lineupDates.map(dayjs)}
        onSelectDate={setCurrentDate}
      />
      <div className="flex flex-col gap-5">
        {lineups
          .filter(({ date }) => dayjs(date).isSame(currentDate, 'day'))
          .map((lineup) => (
            <div
              key={lineup.id}
              className="flex flex-col gap-[10px] aspect-[7/5] w-full"
            >
              <Image
                src={lineup.image}
                alt={lineup.name}
                className="object-cover rounded-xl aspect-[7/5] w-full"
                width={353}
                height={215}
              />
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">{lineup.name}</h2>
                <span className="text-xs font-[400] text-gray-400">{`${dayjs(lineup.date).format('YYYY.MM.DD')} - ${parseFestivalDate(lineup.performance_day)}일차`}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
