import {hooks} from "../../../../utils/connectors/metaMask";
import Web3 from "web3";
import {connectWallet, CONTRACT_ABI_BNB, CONTRACT_ADDRESS_BNB, WEB3_BNB_PROVIDER} from "../../../../utils/web3";
import {useState} from "react";
import {clearMessages, showMessage} from "../../../../utils/toastService";

const {useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

function SecWelcomeContent({img}) {
  const [ethQuantity, setEthQuantity] = useState(0);
  const [tokenQuantityFromEth, setTokenQuantityFromEth] = useState(0);
  const [bnbQuantity, setBnbQuantity] = useState(0);
  const [tokenQuantityFromBnb, setTokenQuantityFromBnb] = useState(0);
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const buyTokensInBnb = async () => {
    const web3 = new Web3(WEB3_BNB_PROVIDER);
    const contract = new web3.eth.Contract(CONTRACT_ABI_BNB, CONTRACT_ADDRESS_BNB);
    await buy(web3, contract, bnbQuantity);
  };

  const buy = async (web3, contract, quantity) => {
    if (isActive) {
      try {
        if (isNaN(quantity) || quantity <= 0) {
          showMessage("Please insert a valid BNB amount 😐", 'warn')
          return;
        }
        clearMessages();
        showMessage('Transaction in progress', 'info', {autoClose: false})
        await contract.methods.buyTokens().send({
          from: accounts[0],
          value: web3.utils.toWei(quantity, 'ether')
        });
        clearMessages();
        showMessage(`Transaction successful! You have received ${tokenQuantityFromBnb} {_TOKEN_} 🚀`, 'success')
      } catch (err) {
        let message = err.message;
        const splitted = message.split(':');
        message = splitted.length > 0 ? splitted[1] : message
        clearMessages();
        showMessage(`Error during transaction 😭: ${message}`, 'error')
      }
    } else {
      connectWallet()
    }
  }

  const calculateTokenQuantityFromEth = (event) => {
    const tokenForETH = 2000
    setEthQuantity(event.target.value);
    setTokenQuantityFromEth(event.target.value * tokenForETH)
  }

  const calculateTokenQuantityFromBnb = (event) => {
    const tokenForBnb = 2000
    setBnbQuantity(event.target.value);
    setTokenQuantityFromBnb(event.target.value * tokenForBnb)
  }

  return (
    <div className="welcome-content">
      <div className="promo-section">
        <div className="integration-link">
                  <span className="integration-icon">
                      <img src={img} width="24" height="24" alt=""/>
                  </span>
          <span className="integration-text">Buy crypto easier than ever!</span>
        </div>
      </div>
      <h1>PRE-SALE IS STARTED !</h1>
      <p>
        Buy now how many tokens you want.<br/>
        Don't know how can do it? Follow <a href={'#how-to-buy'}>this guide</a>
      </p>
      <div className="row" style={{marginTop: '60px'}}>
        <div className="col-8">
          <div className="group wow fadeInUp" data-wow-delay="0.2s">
            <input type="text" name="name" id="name" required value={bnbQuantity}
                   onChange={calculateTokenQuantityFromBnb}/>
            <span className="highlight"/>
            <span className="bar"/>
            <label>How many BNB do you want to buy?</label>
          </div>
          {<span style={{fontSize: '16px'}}>You receive {tokenQuantityFromBnb} {'{_TOKEN_}'}</span>}
        </div>
        <div className="col-4">
          <button onClick={buyTokensInBnb} className="btn dream-btn mr-3">Buy {'{_TOKEN_}'}</button>
        </div>
      </div>
    </div>
  )
}

export default SecWelcomeContent
