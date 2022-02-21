import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
                <h2 className="text-3xl font-extrabold text-blue-id hover:text-blue-900">vocacción</h2>
            </Link>
        </div>
    );
}

export default Logo;