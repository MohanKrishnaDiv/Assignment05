import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-copyrights'>
            <div>Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.</div>
            <div>
                Please dispose of e-waste and plastic waste responsibly. <br/>
                For more information or e-waste pick up, please call 1800 5 7267864 or <a href='U7ON2T3WH57MMMMARVQHT5IOLB7ZDXOHFXAUEB3CQRDA66KLDUX3RXPE5E'>click here </a>click here for more details.
            </div>
            <div>
                Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001<br/>
                Corporate Identification Number (CIN): U31900DL1995PTC071387
            </div>
        </div>
        <hr />
        <div className='footer-privacyAndcontact'>
            <div className='languageAndprivacy'>
                <div><b>India?English</b></div>
                <div>Privacy</div>
                <div>Legal</div>
                <div>CSR Policy</div>
                <div>Site Map</div>
            </div>
            <div className='icons'>
                <div>Stay in the loop</div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-256.png" alt="img" className='image' /></div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png" alt="img"  className='image'/></div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-256.png" alt="img" className='image' /></div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-256.png" alt="img"  className='image'/></div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-256.png" alt="img" className='image' /></div>
                <div><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-256.png" alt="img" className='image' /></div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
