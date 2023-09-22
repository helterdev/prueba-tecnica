import {AiOutlineArrowRight} from 'react-icons/ai';
const Info = () => {
    return <>
        <section>
            <div className="container-info">
                <div className="info">
                    <div className="info__img">
                        <img className="" src="/info.png" alt="Clarifion Air" />
                    </div>
                    <div className="info__header">
                        <div className="info__title">
                            <h3 className="info-product">Clarifion Air Ionizer</h3>
                            <h4 className="info-price"><span className="info-price--off">$180</span><span className="info-price--active">$84</span></h4>
                        </div>
                        <div>
                            <img src="/Stars.png" alt="" />
                        </div>
                        <div>
                            <div className="info-stock">
                                <input className="info-stock__check" type='radio' name="" id="" value={true}/>
                                <p className="info-stock__description">12 left in stock</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p className="description__product">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple</p>
                </div>
            </div>
        </section>
        <section>
            <div className="paragrah">
                <div className="paragrah__text">
                    <img src="/tick-circle.png" alt="tick-circle" />
                    <p className="paragrah-description">Negative Ion Technology may <strong className="paragrah-description--active">help with allergens</strong></p>
                </div>
                <div className="paragrah__text">
                    <img src="/tick-circle.png" alt="tick-circle" />
                    <p className="paragrah-description">Designed for <strong className="paragrah-description--active">air rejuvenation</strong></p>
                </div>
                <div className="paragrah__text">
                    <img src="/tick-circle.png" alt="tick-circle" />
                    <p className="paragrah-description"><strong className="paragrah-description--active">Perfect for every room</strong> in all types of places</p>
                </div>
            </div>
        </section>
        <section className="container-discount">
            <div className="discount">
                <img src="/porcent.png" alt="procent" />
                <p className="discount-text"><strong>Save 53%</strong> and get <strong>6 extra Clarifision</strong> for only <strong>14 Each</strong></p>
            </div>
        </section>
        <section className="container-button">
            <div>
            <button type="button" className="button-clain">YES - CLAIN MY DISCOUNT <AiOutlineArrowRight className='icon-clain'/></button>
            </div>

            <div className='pay'>
                <div className='container-pay'>
                    <p className='pay-info'>Free Shipping</p>
                    <div className='pay-line'></div>
                    <p className='pay-info pay-info--flex'><img src="/lock.png" alt="lock" />Security 256-Bit SSL Encryption</p>
                </div>
                <div className='divide-line'></div>
                <div className='method-pay'>
                    <img src="/visa.svg" alt="visa" />
                    <img src="/shop-pay.svg" alt="shoppay" />
                    <img src="/paypal.svg" alt="paypal" />
                    <img src="/mastercard.svg" alt="mastercard" />
                    <img src="/gpay.svg" alt="gpay" />
                    <img src="/apple pay.svg" alt="applepay" />
                    <img src="/amex.svg" alt="american express" />
                </div>
            </div>
            <div>
                <p className='pay-footer'>No thanks, I don’t want this.</p>
            </div>
        </section>
        <section>
            <div className='warranty'>
                <div>
                    <img src="/sello.png" alt="sello" />

                </div>
                <p className='warranty__text'>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee.</strong> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
            </div>

        </section>
    </>
}

export default Info;