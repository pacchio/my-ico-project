import {useEffect} from "react";
import './style/HomeDemo3.scss'

import {
  DocElementTitle,
  FQAInfo,
  service_single_content,
  ServiceBlock,
  SocialListIco,
  VerticalSocial,
} from '../../data/data-containers/data-HomeDemo3.js';

import {HomeDemo3ImgPhone, HomeDemo3RingsBg} from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecWelcomeArea from './SecWelcomeArea'
import SecVerticalSocial from './SecVerticalSocial'
import SecOurServices from './SecOurServices'
import SecOurFeatures from './SecOurFeatures'
import SecSubscribe from './SecSubscribe'
import SecFAQ_Timeline from './SecFAQ_Timeline'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let HomeDemo3 = () => {

  useEffect(() => {
    handelTitle('Home Template3')
  }, [])

  useEffect(() => {
    if (document.title === 'Home Template3') {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
    } else {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #4834d4, #341f97)'
    }
  }, [])

  return (
    <>
      <Header/>
      <div className="HomeDemo3">
        <SecWelcomeArea/>
        {/*<SecVerticalSocial data={VerticalSocial}/>*/}
        <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo3ImgPhone} Rings={HomeDemo3RingsBg}/>
        <div className="clearfix"/>
        <SecOurServices data={service_single_content}/>
        <SecSubscribe data={SocialListIco}/>
        <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle}/>
      </div>
      <Footer/>
      <ToastContainer />
    </>
  );
};

export default HomeDemo3
