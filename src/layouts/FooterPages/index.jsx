import{
  FooterLogo,
  FooterPattern,
  FooterBg1
} from '../../utils/allImgs'

import './footer.css'

import SecContact from './SecContact'
import SecIco from './SecIco'
import SecContent from './SecContent'

const Footer = () => {
    return (
      <footer className="footer-area bg-img" style={{backgroundImage: `url(${FooterPattern})`}}>
        <div className="footer-content-area " style={{backgroundImage: `url(${FooterBg1})`}}>
          <div className="container">
            <div className="row justify-content-center">
                <p>TOKEN is not an investment. TOKEN makes no promises and is not responsible for any losses or errors use at your own risk.</p>
                <p>Copyright © 2022 TOKEN. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer
