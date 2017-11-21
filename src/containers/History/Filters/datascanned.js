import React, { Component } from 'react';
import DatePicker from '../../../components/uielements/datePicker';
import { Row, Col } from 'antd';
import Radio, { RadioGroup } from '../../../components/uielements/radio';
import IntlMessages from '../../../components/utility/intlMessages';

class DataScanned extends Component {
  state = {
    value: 1,
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
    value4: 11
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };
    return (
      <div>
        <Row>
        <Col md={12} sm={12} xs={12}>
          <IntlMessages id="namescan.startdate" />
          <DatePicker />
        </Col>
        <Col md={12} sm={12} xs={12}>
          <IntlMessages id="namescan.enddate" />
          <DatePicker />
        </Col>
      </Row>

        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} value={1}> Custom Dates</Radio>
          <Radio style={radioStyle} value={2}> Today</Radio>
          <Radio style={radioStyle} value={3}> Yesterday</Radio>
          <Radio style={radioStyle} value={4}> Last Week</Radio>
          <Radio style={radioStyle} value={5}> Last 30 days</Radio>
          <Radio style={radioStyle} value={6}> Last Year</Radio>
          <Radio style={radioStyle} value={7}> All</Radio>
        </RadioGroup>
      </div>
    );
  }
}

export default DataScanned;