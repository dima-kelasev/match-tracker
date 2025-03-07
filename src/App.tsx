import Logo from './assets/svg/Match-tracker.svg';
import { useMatches } from './hooks/useMatches';
import { ErrorBar } from './components/error-bar/error-bar';
import { RefreshBtn } from './components/refresh-btn/refresh-btn';
import { MatchItem } from './components/match-item/match-item';
import { Loader } from './components/loader/loader';
import './styles.css';

export const App = () => {
  const { data, error, isLoading, refetch, isRefetching } = useMatches();

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <div className="match-tracker">
      <div className="header">
        <img src={Logo} alt="Match Tracker Logo" className="logo" />
        <div className="refresh-container">
          {error && <ErrorBar />}
          <RefreshBtn
            handleRefresh={handleRefresh}
            isRefreshing={isRefetching}
          />
        </div>
      </div>
      {isLoading && <Loader />}
      <div className={`match-list ${isRefetching ? 'loading-overlay' : ''}`}>
        {data?.data?.matches?.map((match, i) => (
          <MatchItem match={match} key={`${i}-${match.time}`} />
        ))}
      </div>
    </div>
  );
};
