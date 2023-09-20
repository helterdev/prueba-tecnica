import Title_2 from "./Ttile_2";

const Main = () => {
    return <main className="main">
        <div className="main__principal">
            <section className="main__title">
                <h1 className="title">Wait! Your Order In Progress.</h1>
                <p className="description">Lorem Ipsum Dolor Sit Amet, Consectetur</p>
            </section>
            <section className="main__nav">
                <ul className="option">
                    <li className="option__list">
                        <div className="option__button">
                            <button className="button" type='button'>✔</button>
                        </div>
                        <p className="option__text">Cart Review</p>
                    </li>
                    <li className="option__list">
                        <div className="option__button">
                        <button className="button" type='button'>✔</button>
                        </div>
                        <p className="option__text">Checkout</p>
                    </li>
                    <li className="option__list">
                        <div className="option__button">
                        <button className="button button--tree" type='button'>3</button>
                        </div>
                        <p className="option__text option__text--select">Special Offer</p>
                    </li>
                    <li className="option__list">
                        <div className="option__button">
                        <button className="button button--four" type='button'>4</button>
                        </div>
                        <p className="option__text">Confirmation</p>
                    </li>
                </ul>
            </section>
            <Title_2/>
        </div>
    </main>
}


export default Main;