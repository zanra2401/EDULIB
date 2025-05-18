import logo from '../../../assets/Logo.png';

export default function Logo({className}) {
    return (
        <img className={className} src={logo} alt="logo-edulib" />
    );
}