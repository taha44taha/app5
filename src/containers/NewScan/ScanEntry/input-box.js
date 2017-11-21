import React from 'react';
import Input from '../../../components/uielements/input';
import { InputBoxWrapper } from './checkout.style';
import DatePicker from '../../../components/uielements/datePicker';

class InputBox extends React.Component {
  render() {
    const { label, placeholder } = this.props;
    return (
      <InputBoxWrapper className="isoInputBox">
        <label>
          {label}
          {this.props.important ? <span className="asterisk">*</span> : null}
        </label>
        {this.props.calendar ? <DatePicker /> : <Input size="large" placeholder={placeholder} />}      
      </InputBoxWrapper>
    );
  }
}
export default InputBox;
