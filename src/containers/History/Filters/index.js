import React, { Component } from 'react';
import { Row, Col } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';
import basicStyle from '../../../config/basicStyle';
import InputBox from './input-box';
import Select, { SelectOption } from '../../../components/uielements/select';
import { FiltersWrapper, InputBoxWrapper } from './filters.style';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import Card from './card.style';
import { Modal } from 'antd';
import DataScanned from './datascanned';

const Option = SelectOption;

class Filters extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const { colStyle } = basicStyle;    
    return (
      <FiltersWrapper>
        <ContentHolder>
          <Card
            title={<IntlMessages id="namescan.history.filters" />}
            style={{ width: '100%' }}
          >
            <Row>
              <Col className="dataSacnModal" md={6} sm={6} xs={24} style={colStyle}>
                <IntlMessages id="namescan.history.dateScanned" />
                <Button type="primary" onClick={this.showModal}>Data Scanned</Button>
                <Modal
                  title="Data Scanned"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <DataScanned />
                </Modal>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBox label={<IntlMessages id="namescan.history.term" />} />
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBox label={<IntlMessages id="namescan.history.scanNumber" />} />
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBox label={<IntlMessages id="namescan.history.scanID" />} />
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.scanResult.flag" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="unknown">Unknown</Option>
                    <Option value="matched">Matched</Option>
                    <Option value="notmatched">Not Matched</Option>
                    <Option value="notsure">Not Sure</Option>
                    <Option value="potentialmatch">Potential Match</Option>
                    <Option value="falsepositive">False Positive</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.history.categories" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="sanction">Sanction</Option>
                    <Option value="pep">PEP</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.scanEntry.entityType" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="person">Person</Option>
                    <Option value="company">Company</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.scanParameters.matchRate" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="close">Close</Option>
                    <Option value="extract">Extrct</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.risk" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="low">Low</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="high">High</Option>
                    <Option value="unallocated">Unallocated</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.scanResult.ongoingMonitering" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="monthly">Monthly</Option>
                    <Option value="3month">Every 3 Months</Option>
                    <Option value="6month">Every 6 Months</Option>
                    <Option value="Year">Every Year</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col md={6} sm={6} xs={24} style={colStyle}>
                <InputBoxWrapper className="isoInputBox">
                  <label>{<IntlMessages id="namescan.history.scanType" />}</label>
                  <Select size="large" defaultValue="all">
                    <Option value="all">All</Option>
                    <Option value="singlescan">Single Scan</Option>
                    <Option value="batchscan">Batch Scan</Option>
                  </Select>
                </InputBoxWrapper>
              </Col>
              <Col className="FilterbtnWrapper" md={6} sm={24} xs={24} style={colStyle}>
                <Button type="primary" className="Apply">
                  {<IntlMessages id="namescan.history.apply" />}
                </Button>
                <Button type="primary" className="Apply">
                  {<IntlMessages id="namescan.history.reset" />}
                </Button>
              </Col>
            </Row>
          </Card>
        </ContentHolder>
      </FiltersWrapper>
    );
  }
}

export default Filters;