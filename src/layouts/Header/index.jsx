import {useEffect} from 'react'

import {Logo} from '../../data/data-layout/data-Header.js';

import {Addshrink, addActiveClass, OpenMenu, moveSmooth} from "../../utils/"
import {connectWallet} from "../../utils/web3"

import './header.css'

import Preloader from '../../components/Preloader'
import {hooks} from "../../utils/connectors/metaMask";
import {clearMessages, showMessage} from "../../utils/toastService";

const {useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

const Header = () => {

  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  useEffect(() => {
    Addshrink()
    OpenMenu()
    moveSmooth()
  }, [])

  useEffect(() => {
    if (isActive) {
      clearMessages()
      showMessage(`Wallet connected! Welcome ${getAccount()}`, 'success')
    }
  }, [isActive])

  useEffect(() => {
    if (error) {
      clearMessages()
      showMessage(error.message, 'error');
      console.log(`new error occured: name[${error.name}] message[${error.message}]`);
    }
  }, [error])

  const getAccount = () => {
    const currentAccount = accounts[0].toString();
    return `${currentAccount.substring(0, 5)}...${currentAccount.substring(currentAccount.length - 5, currentAccount.length)}`;
  }

  const getConnectName = () => {
    if (isActivating) {
      return "In connection"
    } else if (!isActive) {
      return "Connect"
    } else {
      return `Account: ${getAccount()}`
    }
  }

  return (
    <>
      <Preloader/>
      <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className="classy-navbar justify-content-between" id="dreamNav">
              <a className="nav-brand" href="#"><img src={Logo} alt="logo"/></a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler" onClick={addActiveClass}>
                    <span/>
                    <span/>
                    <span/>
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap" onClick={addActiveClass}>
                    <span className="top"/>
                    <span className="bottom"/>
                  </div>
                </div>
                <div className="classynav">
                  <button disabled={isActivating && isActive} className="btn login-btn ml-50"
                          onClick={connectWallet}>{getConnectName()}
                    <span className={"icon ti-wallet ml-15"}/>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
