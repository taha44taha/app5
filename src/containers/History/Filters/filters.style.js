import styled from 'styled-components';
import WithDirection from '../../../config/withDirection';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../config/style-util';

const FiltersWrapper = styled.div`
  .isoInputBox{
    width: 90%;
  }  
  .ant-btn-primary{
    margin-right: 30px;
    margin-top: 40px;
  }
`;

const WDInputBoxWrapper = styled.div`
  &.isoInputBox {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: ${palette('text', 0)};
      line-height: 1.2;
      margin-bottom: 17px;
      display: flex;
      position: relative;

      .asterisk {
        font-size: 15px;
        font-weight: 400;
        color: ${palette('color', 0)};
        line-height: 1.2;
        margin: ${props =>
          props['data-rtl'] === 'rtl' ? '0 3px 0 0' : '0 0 0 3px'};
      }
    }

    .ant-select {
      .ant-select-selection {
        &.ant-select-selection--single {
          height: 42px;
          ${borderRadius()};
        }

        .ant-select-selection__rendered {
          line-height: 42px;
          font-size: 13px;
        }
      }
    }

    input {
      ${borderRadius()};
    }
  }
  
  @media only screen and (max-width: 867px) {
      label{
        margin: 17px 0;
      }
  }
`;

const InputBoxWrapper = WithDirection(WDInputBoxWrapper);

export { FiltersWrapper, InputBoxWrapper };
