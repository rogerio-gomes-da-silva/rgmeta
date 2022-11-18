import icon from '../../assets/img/notification-icon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import './styles.css';
import { toast } from 'react-toastify';

    type Props = {
        saleId: number;
    }

    function handleClick(id :number) {

        /* Envio de notificação no celular com back-end obs: falta conectar com twilio */

        /* axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => { */
        toast.info("SMS enviado com sucesso")
            console.log("NOTIFICATION SEND");
        
    }

function NotificationButton( {saleId} : Props) {
    return (
        <div className="rgmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="img-user" />
        </div>
    )
}

export default NotificationButton;
