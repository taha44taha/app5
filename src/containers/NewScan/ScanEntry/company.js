import React, { Component } from 'react';
import { BillingFormWrapper, InputBoxWrapper } from './checkout.style';
import InputBox from './input-box';
import IntlMessages from '../../../components/utility/intlMessages';
import Select, { SelectOption } from '../../../components/uielements/select';

const Option = SelectOption;

class Company extends Component {
  render() {
    return (
      <BillingFormWrapper className="isoBillingForm">
        <div className="isoInputFieldset">
          <InputBox
            label={<IntlMessages id="namescan.scanEntry.name" />}
            important
          />
          <InputBoxWrapper className="isoInputBox">
            <label>{<IntlMessages id="namescan.scanEntry.country" />}</label>
            <Select size="large" defaultValue="unitedstate">
              <Option value="argentina">Argentina</Option>
              <Option value="australia">Australia</Option>
              <Option value="brazil">Brazil</Option>
              <Option value="france">France</Option>
              <Option value="germany">Germany</Option>
              <Option value="southafrica">South Africa</Option>
              <Option value="spain">Spain</Option>
              <Option value="unitedstate">United State</Option>
              <Option value="unitedkingdom">United Kingdom</Option>
            </Select>
          </InputBoxWrapper>
          <InputBox label={<IntlMessages id="namescan.scanEntry.scanNumber" />} />
        </div>
      </BillingFormWrapper>
    );
  }
}

export default Company;