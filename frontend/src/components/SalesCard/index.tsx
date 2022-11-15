import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="rgmeta-card">
            <h2 className="rgmeta-sales-title">Vendas</h2>
            <div>
                <div className="rgmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="rgmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="rgmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="rgmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="rgmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992">Id</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-992">#32</td>
                            <td className="show-576">01/07/2022</td>
                            <td>João</td>
                            <td className="show-992">12</td>
                            <td className="show-992">35</td>
                            <td>R$ 65300.00</td>
                            <td>
                                <div className="rgmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">#18</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Antonio</td>
                            <td className="show-992">45</td>
                            <td className="show-992">65</td>
                            <td>R$ 100000.00</td>
                            <td>
                                <div className="rgmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">#23</td>
                            <td className="show-576">03/07/2022</td>
                            <td>Marta</td>
                            <td className="show-992">5</td>
                            <td className="show-992">23</td>
                            <td>R$ 32000.00</td>
                            <td>
                                <div className="rgmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default SalesCard;