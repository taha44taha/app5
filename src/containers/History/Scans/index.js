import React, { Component } from 'react';
import ContentHolder from '../../../components/utility/contentHolder';
import Card from './card.style';
import IntlMessages from '../../../components/utility/intlMessages';
import ScanTable from './ScanTable';
import { sortColumns } from './configs';
import fakeData from './fakeData';

const dataList = new fakeData(2);

class Scans extends Component {
  render() {    
    return (
      <ContentHolder>
        <Card
          title={<IntlMessages id="namescan.history.scans" />}
          style={{ width: '100%' }}
        >        
          <ScanTable columns={sortColumns} dataList={dataList} />
        </Card>
      </ContentHolder>
    );
  }
}

export default Scans;