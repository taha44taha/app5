import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import Box from '../../components/utility/box';
import ScanResult from '../../components/namescan/ScanResult';
import FutherActions from '../../components/namescan/FutherActions';

class NameScanResult extends Component {
  render() {
    return (
      <div>
        <LayoutWrapper>
          <PageHeader>{<IntlMessages id="namescan.scanResult" />}</PageHeader>
          <Box>
            <ScanResult /> 
            <FutherActions />
          </Box>
        </LayoutWrapper>
      </div>
    );
  }
}

export default NameScanResult;