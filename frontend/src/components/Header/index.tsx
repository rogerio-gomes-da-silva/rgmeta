import logo from '../../assets/img/logo.png'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="rgmeta-log-container">
                <img src={logo} alt="RGMeta" />
                    <h1>RGMeta</h1>
                    <p>Desenvolvido por
                          - <a href="https://github.com/rogerio-gomes-da-silva" target="_blank">github.com/rogerio-gomes-da-silva</a>
                    </p>
            </div>
        </header>
    )
}

export default Header