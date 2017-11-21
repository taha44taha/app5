import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import Button from '../../../components/uielements/button';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import { CheckboxGroup } from '../../../components/uielements/checkbox';
import { Slider } from 'antd';

class ScanPrameters extends Component {

  handleOnChange = checkedValues => { };

  render() {
    const plainOptions = ['All', 'PEP', 'Sanction'];
    const marks = {
      0: '0%',
      100: '100%(exact)'
    };
    const { rowStyle, colStyle, textCenter } = basicStyle;
    
    return (
      <Row style={rowStyle} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.scanParameters" />}
              style={{ width: '100%' }}
            >
                <Row className="scanParamWrapper">
                  <Col md={4} sm={7} xs={8}>
                    <h3><IntlMessages id="namescan.scanParameters.scanCategories" /></h3>
                  </Col>
                  <Col md={20} sm={17} xs={16}>
                    <CheckboxGroup
                      options={plainOptions}
                      defaultValue={['All', 'PEP', 'Sanction']}
                      onChange={this.handleOnChange}
                    />
                  </Col>
                </Row><br />
                <Row className="matchRateWrapper">
                  <Col md={4} sm={6} xs={24}>
                    <h3><IntlMessages id="namescan.scanParameters.matchRate" /></h3>
                  </Col>
                  <Col md={20} sm={18} xs={24}>
                    <Slider marks={marks} defaultValue={20} />
                  </Col> <br/>
                  <Col md={24} sm={24} xs={24} style={textCenter}>
                    <Button onClick={this.props.onClick} type="primary">
                      {<IntlMessages id="namescan.scanParameters.scannow" />}
                    </Button>
                  </Col>
                </Row>
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default ScanPrameters;