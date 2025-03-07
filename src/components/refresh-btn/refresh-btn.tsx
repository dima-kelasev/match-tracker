import RefreshIcon from '../../assets/svg/Refresh.svg';
import './styles.css';

type TRefreshBtn = {
  isRefreshing: boolean;
  handleRefresh: () => void;
};

export const RefreshBtn = ({ handleRefresh, isRefreshing }: TRefreshBtn) => {
  return (
    <button
      className="refresh-button"
      onClick={handleRefresh}
      disabled={isRefreshing}
    >
      <p>Обновить</p>

      <span className={`refresh-icon ${isRefreshing ? 'spinning' : ''}`}>
        <img src={RefreshIcon} alt="Match Tracker Logo" />
      </span>
    </button>
  );
};
