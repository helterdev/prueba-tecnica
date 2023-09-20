const Header = () => {
    return <>
        <header className="header">
            <img src="/left.png" alt="left row" />
            <div className="header__title">
               <img className="header__check" src="/check.png" alt="check" />
               <p className="header__text">30-DAY SATISFATION GUARANTEE</p> 
            </div>
            <img src="/rigth.png" alt="rigth row" />
        </header>
    </>
}

export default Header;