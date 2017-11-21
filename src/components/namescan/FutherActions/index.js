import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import { InputGroup, Textarea } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import Button from '../../../components/uielements/button';
import { rtl } from '../../../config/withDirection';
import Comments from './comments';
const Option = SelectOption;

class FutherActions extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };
    return (
      <Row style={rowStyle} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.futherActions" />}
              style={{ width: '100%' }}
            >
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={6} sm={8} xs={24}>
                  <h3><Icon type="desktop" /> <IntlMessages id="namescan.futherActions.ongoingMonitoring" /></h3>
                </Col>
                <Col className="moniteringOption" md={18} sm={16} xs={24}>
                  <Select defaultValue="Off" >
                    <Option value="Off">Off</Option>
                    <Option value="monthly">Monthly</Option>
                    <Option value="3month">Every 3 Months</Option>
                    <Option value="6month">Every 6 Months</Option>
                    <Option value="Year">Every Year</Option>
                  </Select>
                </Col>
              </InputGroup>
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={6} sm={8} xs={24}>
                  <h3><Icon type="dingding" /><IntlMessages id="namescan.risk" /></h3>
                </Col>
                <Col className="riskOption" md={18} sm={16} xs={24}>
                  <Select defaultValue="unknown" >
                    <Option value="unknown">Unknown</Option>
                    <Option value="low">Low</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="high">High</Option>
                  </Select>
                </Col>
              </InputGroup>
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={6} sm={8} xs={24} style={{ verticalAlign: 'top' }}>
                  <h3><Icon type="message" /><IntlMessages id="namescan.comment" /></h3>
                </Col>
                <Col className="commentArea" md={18} sm={16} xs={24}>
                  <Textarea rows={6} placeholder="Type Something" />
                </Col>
              </InputGroup>
              <Col className="FutherSavebtn">
                <Button onClick={this.props.onClick} type="primary" style={margin}>
                  {<IntlMessages id="namescan.futherActions.save" />}
                </Button>
              </Col>
              <br />
              <Col span={20} offset={2}>
                <h3><Icon type="message" /><IntlMessages id="namescan.comment" /></h3><br/>
                <Comments />
              </Col>
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default FutherActions;