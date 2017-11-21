import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import ScanInfo from './scaninfo';
import ResultSummary from './summary';
import ExtraFilter from './extrafilter';

class ScanResult extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    return (
      <Row style={rowStyle} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.scanResult" />}
              extra={<ExtraFilter />}
              style={{ width: '100%' }}
            >
              <ScanInfo /><br/>
              <ResultSummary />
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default ScanResult;