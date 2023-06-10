export function Footer() {
    return (
        <footer className="flex flex-row justify-around w-full text-sm mt-10 mb-5">
        <div>
            <a target="_blank" href="/about/en" className="underline">How it works</a>
        </div>
        <div>
            <a target="_blank" href={`mailto:${process.env.REACT_APP_CONTACT_MAIL}`} className="underline">Email support</a>
        </div>
    </footer>
    );
}