import React, { Component } from 'react';
import { Table } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';
import ResultDetail from './resultdetail';

const red = { color:'red' };

const columns = [
  {
    title: <IntlMessages id="namescan.scanResult.matchId" />,
    dataIndex: 'matchId'
  },
  {
    title: <IntlMessages id="namescan.scanResult.scanTerm" />,
    dataIndex: 'scanTerm'
  },
  {
    title: <IntlMessages id="namescan.scanResult.sources" />,
    dataIndex: 'sources',
    render: text => <span style={red}>{text}</span>
  },
  {
    title: <IntlMessages id="namescan.scanResult.flags" />,
    dataIndex: 'Flags',
    render: text => <span style={red}>{text}</span>
  }
]

const data = [{
  key: '1',
  matchId: 's122323232',
  scanTerm: 'David Camerson',
  sources: 'OFAC',
  flags: 'Matched'
},{
  key: '2',
  matchId: 's23323432',
  scanTerm: 'David Camerson',
  sources: 'HMT',
  flags: 'Matched'
}]

class ResultSummary extends Component {
  state = {
    pagination: false,
  }

  render() {
    const mapResultDetail = (details) => {
      return details.map((detail, i) => {
        return (<ResultDetail scanTerm={detail.scanTerm} sources={detail.sources} flags={detail.flags} key={i} index={i + 1}/>);
      });
    }
    return (
      <div>
        <h3><IntlMessages id="namescan.scanResult.summary" /></h3><br/>
        <Table {...this.state} columns={columns} dataSource={data} /><br/>
        <p>Result Details: 2 Matches Found, 3 Matches Flagged.</p><br/><br/>
        {mapResultDetail(data)}
      </div>
    );
  }
}

export default ResultSummary;