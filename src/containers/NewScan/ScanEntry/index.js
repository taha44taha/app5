import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import Radio, { RadioGroup } from '../../../components/uielements/radio';
import Person from './person';
import Company from './company';

class ScanEntry extends Component {
  state = {
    value: "person"
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };  
  render() {
    const { rowStyle, colStyle} = basicStyle;
    return (
      <Row style={rowStyle} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.scanEntry" />}
              style={{ width: '100%' }}
              className="scanEntryCard"
            >
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <h3><IntlMessages id="namescan.scanEntry.entityType" /></h3>
                <Radio value={"person"}>Person</Radio>
                <Radio value={"company"}>Company</Radio>
              </RadioGroup>
              {this.state.value === "person" ? <Person /> : <Company />}
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default ScanEntry;