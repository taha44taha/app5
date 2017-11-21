import React, { Component } from 'react';
import { Table } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import Card from './result_card.style';
import ResultDetailExtra from './resultdetailextra'

const columns = [
  {
    title: '',
    dataIndex: 'fieldset'
  },
  {
    title: '',
    dataIndex: 'detail'
  }
]

const data = [{
  key: '1',
  fieldset: 'Name',
  detail: 'Haji Hazrat Ali-Nagarthar'
}, {
  key: '2',
  fieldset: 'First Name',
  detail: 'Haji Hazrat'
}, {
  key: '3',
  fieldset: 'Last Name',
  detail: 'Ali-Nagarthar'
}, {
  key: '4',
  fieldset: 'Gender',
  detail: 'male'
}, {
  key: '5',
  fieldset: 'Roles',
  detail: 'Member of Wolesi Jirga - Since: 2011-01-26 To: 2015-06-22'
}, {
  key: '6',
  fieldset: 'Program',
  detail: 'IRQ'
}, {
  key: '7',
  fieldset: 'Nationality',
  detail: 'Iraq'
}, {
  key: '8',
  fieldset: 'Date of birth',
  detail: '1937-04-28'
}, {
  key: '9',
  fieldset: 'Place of Birth',
  detail: '1964 (main); 1967'
}, {
  key: '10',
  fieldset: 'Other Names',
  detail: 'Udai Saddam HUSSEIN (a.k.a.)'
}, {
  key: '11',
  fieldset: 'Sources',
  detail: 'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2003:169:0006:0023:EN:PDF'
}, {
  key: '12',
  fieldset: 'Comments',
  detail: '(UNSC RESOLUTION 1483)'
}, {
  key: '13',
  fieldset: 'Update At',
  detail: '2003-07-07'
}]

class ResultDetail extends Component {
  state = {
    pagination: false,
    showHeader: false
  }
  render() {
    var { index, scanTerm, sources, flags } = this.props;
    // if (sources === 'OFAC')
    //   sources = 'OFAC - Specially Designated Nationals (SDN)';
    var title = (
      <div className="rsdWrapper">
        <div className="rsdName">
          {index + ":" + scanTerm}
        </div>
        <div className="rsdSource">
          {sources}
        </div>
        <div className="rsdFlags">
          <span style={{color: 'red'}}>{flags}</span>
        </div>
      </div>      
    )
    return (
      <ContentHolder>
        <Card
          title={title}
          style={{ width: '100%' }}
          extra={<ResultDetailExtra />}
        >
          <Table {...this.state} columns={columns} dataSource={data} />
        </Card>
      </ContentHolder>
    );
  }
}

export default ResultDetail;