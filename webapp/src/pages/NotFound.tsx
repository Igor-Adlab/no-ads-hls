import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="page text-center">
            <h1 className="text-4xl text-center mt-10 mb-5">Page not found</h1>
            <Link to="/about/en" className="underline">How it works</Link>
        </div>
    );
}