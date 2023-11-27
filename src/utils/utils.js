import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { AuthorizationStatus } from '../const';
dayjs.extend(duration);

export const humanizeDuration = (minutes) => {
  const durationData = dayjs.duration(minutes, 'minutes');
  const durationInHours = durationData.get('hours') !== 0 ? `${durationData.get('hours')}h` : '';
  return `${durationInHours} ${durationData.get('minutes')}m`;
};

export const transformDuration = (seconds) => {
  const durationData = dayjs.duration(seconds, 'seconds');
  const newDuration = durationData.get('hours') !== 0
    ? durationData.format('-HH:mm:ss')
    : durationData.format('-mm:ss');
  return newDuration;
};

export const humanizeDate = (date, format) => dayjs(date).format(format);

export const transformRating = (rating) => {
  const changedRating = rating.toString().split('');
  const dotIndex = changedRating.findIndex((el) => el === '.');
  if (dotIndex !== -1) {
    changedRating[dotIndex] = ',';
  } else {
    changedRating.push(',', '0');
  }
  return changedRating.join('');
};

export const makeItemsUnique = (items) => [...new Set(items)];

export const isCheckedAuth = (authorizationStatus) => authorizationStatus !== AuthorizationStatus.UNKNOWN;
