import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import "./NetworkSwitch.css";

class NetworkSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNetwork: "Goerli",
    };
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
  }

  handleNetworkChange(network) {
    this.setState(
      (prevState) => ({
        selectedNetwork: network,
      }),
      () => {
        // Perform network switching logic here
        if (network === "Arbitrum") {
          this.props.toggleNetwork(true); // Switch to Arbitrum network
        } else {
          this.props.toggleNetwork(false); // Switch to Goerli network
        }
      }
    );
  }

  render() {
    const { selectedNetwork } = this.state;

    return (
      <Dropdown className="networkSwitch">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {selectedNetwork}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.handleNetworkChange("Goerli")}>
            Goerli
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.handleNetworkChange("Arbitrum")}>
            Arbitrum
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default NetworkSwitch;
