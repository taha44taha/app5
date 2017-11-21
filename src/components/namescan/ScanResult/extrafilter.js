import React, { Component } from 'react';
import Button from '../../../components/uielements/button';
import IntlMessages from '../../../components/utility/intlMessages';
import Popover from '../../../components/uielements/popover';
import Input, { InputGroup, Textarea } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
const Option = SelectOption;

class ExtraFilter extends Component {
  // state = {
  //   visible: false,
  // };
  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };
  // handleVisibleChange = visible => {
  //   this.setState({ visible });
  // };
  render() {
    const small = 'small';
    const ongoingMonitering = (
      <div>
        <InputGroup compact style={{ marginBottom: '15px' }}>
          <Select defaultValue="Off" style={{ width: 160 }}>
            <Option value="Off">Off</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="3month">Every 3 Months</Option>
            <Option value="6month">Every 6 Months</Option>
            <Option value="Year">Every Year</Option>
          </Select>
        </InputGroup>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.save" />}
        </Button>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.cancel" />}
        </Button>
      </div>
    );

    const risk = (
      <div>
        <InputGroup compact style={{ marginBottom: '15px' }}>
          <Select defaultValue="unknown" style={{ width: 160 }}>
            <Option value="unknown">Unknown</Option>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
        </InputGroup>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.save" />}
        </Button>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.cancel" />}
        </Button>
      </div>
    );

    const comment = (
      <div>
        <Textarea rows={4} style={{marginBottom: 20}}/>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.save" />}
        </Button>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.cancel" />}
        </Button>
      </div>
    );

    const email = (
      <div>
        <Input placeholder="email" style={{marginBottom: 20}}/>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.send" />}
        </Button>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.cancel" />}
        </Button>
      </div>
    );
    return (
      <div>
        <Popover
          placement="bottom"
          title={<IntlMessages id="namescan.scanResult.ongoingMonitering" />}
          content={ongoingMonitering}
          trigger="click"

        >
          <Button icon="desktop">
            {<IntlMessages id="namescan.scanResult.ongoingMonitering" />}
          </Button>
        </Popover>

        <Popover
          placement="bottom"
          title={<IntlMessages id="namescan.risk" />}
          content={risk}
          trigger="click"
          
        >
          <Button icon="dingding">
            {<IntlMessages id="namescan.risk" />}
          </Button>
        </Popover>

        <Popover
          placement="bottom"
          title={<IntlMessages id="namescan.comment" />}
          content={comment}
          trigger="click"
          
        >
          <Button icon="message">
            {<IntlMessages id="namescan.comment" />}
          </Button>
        </Popover>

        <Popover
          placement="bottomLeft"
          title={<IntlMessages id="namescan.scanResult.share" />}
          content={email}
          trigger="click"
       
        >
          <Button icon="share-alt">
            {<IntlMessages id="namescan.scanResult.share" />}
          </Button>
        </Popover>

        <Button icon="file-pdf">
          {<IntlMessages id="namescan.scanResult.report" />}
        </Button>
      </div>
    );
  }
}

export default ExtraFilter;