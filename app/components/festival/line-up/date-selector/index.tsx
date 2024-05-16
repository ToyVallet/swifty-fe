'use client';

import dayjs from 'dayjs';

import DateBlock from './date-block';

type DateSelectorProps = {
  availableDays: string[];
};

export default function DateSelector({ availableDays }: DateSelectorProps) {
  const selectedDate = dayjs(availableDays[0]);
  const daysArr = Array.from({ length: 5 }, (_, i) =>
    selectedDate.add(i - 2, 'day'),
  );

  return (
    <div className="w-full h-[70px] flex items-center justify-between relative">
      {daysArr.map((date, index) => (
        <DateBlock key={index} date={date} />
      ))}
      <div className="bg-primary rounded-xl h-full w-[20%] absolute left-1/2 -translate-x-1/2" />
    </div>
  );
}
