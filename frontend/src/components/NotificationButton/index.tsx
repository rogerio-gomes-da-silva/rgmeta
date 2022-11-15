import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        <div className="rgmeta-red-btn">
            <img src={icon} alt="img-user" />
        </div>
    )
}

export default NotificationButton;
