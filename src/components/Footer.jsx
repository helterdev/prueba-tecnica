const Footer = () => {
    return <>
        <footer className="footer">
            <div>
                <div className="footer-text">
                    <span className="footer-description">Copyright © 2023</span>
                    <div className="footer-line"></div>
                    <span className="footer-description">clarifionsupport@calrifion.com</span>
                </div>
            </div>
            <div className='footer-warranty'><div><img className="lock" src="/lock-white.svg" alt="lock" /></div>Security 256-Bit SSL Encryption</div>
        </footer>
    </>
}

export default Footer;