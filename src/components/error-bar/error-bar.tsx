import ErrorIcon from '../../assets/svg/alert-triangle.svg';
import './styles.css';

export const ErrorBar = () => {
  return (
    <div className="error-block">
      <img src={ErrorIcon} alt="error-icon" width={28} height={28} />
      <p className="error-message">Ошибка: не удалось загрузить информацию</p>
    </div>
  );
};
