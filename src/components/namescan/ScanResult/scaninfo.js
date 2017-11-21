import React, { Component } from 'react';
import { Table } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';

const red = { color:'red' };

const columns = [
  {
    title: <IntlMessages id="namescan.scanResult.scanID" />,
    dataIndex: 'scanId'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanNumber" />,
    dataIndex: 'scanNumber'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanDate" />,
    dataIndex: 'scanDate'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanTerm" />,
    dataIndex: 'scanTerm'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanCatg" />,
    dataIndex: 'scanCatg'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanRate" />,
    dataIndex: 'scanRate'
  },
  {
    title: <IntlMessages id="namescan.scanResult.numofmatches" />,
    dataIndex: 'numofmatches',
    render: text => <span style={red}>{text}</span>
  },
]

const data = [{
  key: '1',
  scanId: 's122323232',
  scanNumber: '87788762',
  scanDate: '22/03/2017',
  scanTerm: 'David Camerson',
  scanCatg: 'PEP, Sanction',
  scanRate: '70% Close',
  numofmatches: 2
}]

const scanInfo = 'ScanInfo'

class ScanInfo extends Component {
  state = {
    pagination: false
  }

  render() {
    return (
      <div className={scanInfo}>
        <h3><IntlMessages id="namescan.scanResult.info" /></h3> <br/>
        <Table {...this.state} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default ScanInfo;