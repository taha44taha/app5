import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import Box from '../../components/utility/box';
import Filters from './Filters';
import Scans from './Scans';

class History extends Component {
  render() {
    return (
      <div>
        <LayoutWrapper>
          <PageHeader>{<IntlMessages id="namescan.history" />}</PageHeader>
          <Box title={<IntlMessages id="namescan.history.scanHistory" />}>
            <Filters />
            <Scans />
          </Box>
        </LayoutWrapper>
      </div>
    );
  }
}

export default History;