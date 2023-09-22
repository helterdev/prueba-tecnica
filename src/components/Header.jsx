const Header = () => {
    return <>
        <header className="header">
            <img src="/left.png" alt="left row" />
            <div className="header__title">
               <img className="header__check" src="/check.png" alt="check" />
               <p className="header__text">30-DAY SATISFATION GUARANTEE</p> 
            </div>
            <div className="header__title header__title--active">
               <img className="header__check " src="/truck.svg" alt="truck" />
               <p className="header__text">Free delivery on orders over $40.00</p> 
            </div>
            <div className="header__title header__title--active">
               <img className="header__check " src="/cards.svg" alt="cards" />
               <p className="header__text">50.000+ HAPPY CUSTOMERS</p> 
            </div>
            <div className="header__title header__title--active">
               <img className="header__check " src="/fluent.svg" alt="fluent" />
               <p className="header__text">100% Money Back Guarantee</p> 
            </div>
            <img src="/rigth.png" alt="rigth row" />
        </header>
    </>
}

export default Header;