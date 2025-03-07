import { TMatch } from '../../types';
import TeamLogo from '../../assets/svg/icon.svg';
import { getStatusLabel } from '../../helpers/get-status-label';
import { LABEL_STATUSES } from '../../consts/label-statuses';
import './styles.css';

type TMatchItem = {
  match: TMatch;
};

export const MatchItem = ({ match }: TMatchItem) => {
  const statusLabel = getStatusLabel(match.status);
  return (
    <div className="match-item">
      <div className="team">
        <img src={TeamLogo} alt="Home Team" className="team-logo" />
        <p className="team-name">{match.homeTeam.name}</p>
      </div>
      <div className="match-score">
        {statusLabel !== LABEL_STATUSES.SCHEDULED && (
          <p className="score">
            {match.homeScore} : {match.awayScore}
          </p>
        )}
        <span className={`status-badge ${match.status.toLowerCase()}`}>
          {statusLabel}
        </span>
      </div>
      <div className="team">
        <p className="team-name">{match.awayTeam.name}</p>
        <img src={TeamLogo} className="team-logo" />
      </div>
    </div>
  );
};
