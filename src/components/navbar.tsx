export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-4">
            <div className="w-25">
                <img/>
            </div>
            <div className="flex space-x-4">
                <a className="navlink" href="/research">
                    Our Research
                </a>
                <a className="navlink" href="/about">
                    About Us
                </a>
                <a className="navlink" href="/contact">
                    Contact Us
                </a>
            </div>
        </nav>
    )
}