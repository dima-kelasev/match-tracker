import { LABEL_STATUSES } from '../consts/label-statuses';

export const getStatusLabel = (status: string) => {
  switch (status.toLowerCase()) {
    case 'ongoing':
      return LABEL_STATUSES.ONGOING;
    case 'finished':
      return LABEL_STATUSES.FINISHED;
    case 'scheduled':
      return LABEL_STATUSES.SCHEDULED;
    default:
      return status;
  }
};
