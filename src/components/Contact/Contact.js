import ContactGif from '../../assets/contact.webp'
import phone from '../../assets/phone-call.svg'
import location from '../../assets/gps.svg'
import email from '../../assets/email.svg'
import rotate from '../../assets/rotate.svg'
import './Contact.css'

export default function Contact() {
    const cardFlip = (card) => {
        document.getElementById(card).classList.toggle('is-flipped');
    }
    return (
        <div className='main-container'>
            <h1>Contact Us</h1>
            <img src={ContactGif} alt="Contact us" />
            <div className='contact-body'>
                <div class="scene scene--card">
                    <div class="contact-card" onClick={() => cardFlip('card1')} id='card1'>
                        <div class="card__face card__face--front">
                            <img src={phone} alt="phone" />
                            <img src={rotate} alt="rotate" className='rotate' />
                            <p>Phone</p>
                        </div>
                        <div class="card__face card__face--back">
                            <img src={phone} alt="phone" />
                            <p>+91 9999999999</p>
                        </div>
                    </div>
                </div>
                <div class="scene scene--card">
                    <div class="contact-card" onClick={() => cardFlip('card2')} id='card2'>
                        <div class="card__face card__face--front">
                            <img src={location} alt="location" />
                            <img src={rotate} alt="rotate" className='rotate' />
                            <p>Address</p>
                        </div>
                        <div class="card__face card__face--back">
                            <img src={location} alt="location" />
                            <p>0/0 something something - 11111</p>
                        </div>
                    </div>
                </div>
                <div class="scene scene--card">
                    <div class="contact-card" onClick={() => cardFlip('card3')} id='card3'>
                        <div class="card__face card__face--front">
                            <img src={email} alt="email" />
                            <img src={rotate} alt="rotate" className='rotate' />
                            <p>Email</p>
                        </div>
                        <div class="card__face card__face--back">
                            <img src={email} alt="email" />
                            <p>Email@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
