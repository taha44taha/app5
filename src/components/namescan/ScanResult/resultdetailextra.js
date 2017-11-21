import React, { Component } from 'react';
import { InputGroup, Textarea } from '../../../components/uielements/input';
import Popover from '../../../components/uielements/popover';
import IntlMessages from '../../../components/utility/intlMessages';
import Button from '../../../components/uielements/button';
import Select, { SelectOption } from '../../../components/uielements/select';
const Option = SelectOption;

class ResultDetailExtra extends Component {
  render() {
    const small = 'small';
    const comment = (
      <div>
        <Textarea rows={4} style={{ marginBottom: 20 }} />
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.save" />}
        </Button>
        <Button type="primary" size={small} onClick={this.hide} style={{ marginLeft: '10px' }}>
          {<IntlMessages id="namescan.button.cancel" />}
        </Button>
      </div>
    );
    const flag = (
      <div>
        <InputGroup compact style={{ marginBottom: '15px' }}>
          <Select defaultValue="unknown" style={{ width: 160 }}>
            <Option value="notsure">Not Sure</Option>
            <Option value="notmatched">Not Matched</Option>
            <Option value="matched">Matched</Option>
            <Option value="falsepositive">False Positive</Option>
            <Option value="truepositive">True Positive</Option>
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

    return (
      <div>
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
          placement="bottom"
          title={<IntlMessages id="namescan.scanResult.flag" />}
          content={flag}
          trigger="click"
        >
          <Button icon="flag">
            {<IntlMessages id="namescan.scanResult.flag" />}
          </Button>
        </Popover>
      </div>
    );
  }
}

export default ResultDetailExtra;