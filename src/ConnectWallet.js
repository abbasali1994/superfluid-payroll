import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import NetworkSwitch from "./NetworkSwitch";
import "./ConnectWallet.css";

class ConnectWallet extends Component {
  constructor(props) {
    super(props);
    this.enableWallet = this.enableWallet.bind(this);
  }

  async enableWallet() {
    window.ethereum.request({
      method: "eth_requestAccounts",
    });

    await this.props.getAccount();
  }

  render() {
    return (
      <>
        <div className="connectWallet">
          <Button onClick={this.enableWallet}>Connect Wallet</Button>
        </div>
      </>
    );
  }
}

export default ConnectWallet;
