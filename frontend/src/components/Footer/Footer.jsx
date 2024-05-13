import { assets } from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis amet non facilis esse, labore quod facere quos dolorum. Quae aliquam suscipit, sequi dolor fuga aliquid natus vel cum nulla architecto!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0934-198-400</li>
                    <li>contactus@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr/>

        <p className="footer-copyright">
            Copy right 2024 Tomato.com - All Right Reserved.
        </p>

    </div>
  )
}

export default Footer
