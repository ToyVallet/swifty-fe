export default function formatDate(start: string, end: string) {
  const start_day = start.split('-');
  const end_day = end.split('-');

  return `${start_day[0]}년 ${start_day[1]}월 ${start_day[2]}일 - ${end_day[2]}일`;
}
