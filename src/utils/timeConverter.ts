export const timeConverter = (UNIX_timestamp: number) => {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let time = year + '-' + month + '-' + date;
  return time;
};
