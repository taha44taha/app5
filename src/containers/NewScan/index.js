import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import Box from '../../components/utility/box';
import ScanEntry from './ScanEntry';
import ScanParameters from './ScanPrameters';
import ScanResult from '../../components/namescan/ScanResult';
import FutherActions from '../../components/namescan/FutherActions';

class NameScan extends Component {
  state = {
    scanResult: false
  }
  onClick(){
    this.setState({
      scanResult: !this.state.scanResult
    })
  }
  render() {
    return (
      <div>
        <LayoutWrapper>
          <PageHeader>{<IntlMessages id="namescan.header" />}</PageHeader>
          <Box>
            <ScanEntry />
            <ScanParameters onClick={this.onClick.bind(this)} />
            {
              this.state.scanResult && 
              <div>
                <ScanResult /> 
                <FutherActions />
              </div>
            }
          </Box>
        </LayoutWrapper>
      </div>
    );
  }
}

export default NameScan;