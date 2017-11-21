import React from 'react';
import Cards from '../../../components/uielements/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const CardComp = props => <Cards {...props} />;

const Card = styled(CardComp) `
  .ant-card-head {
    background-color: #f3f3f3;
    border-bottom: 1px solid ${palette('border', 0)};

    .ant-card-head-title {
      color: ${palette('text', 0)};
    }
  }

  .ant-card-extra {
    a {
      color: ${palette('primary', 0)};
      text-decoration: none;

      &:focus {
        text-decoration: none;
      }
    }
  }

  .ant-card-body {
    p {
      font-size: 13px;
      color: ${palette('text', 3)};
      line-height: 1.5;
      margin-bottom: 14px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &.ant-card-bordered {
    border: 1px solid ${palette('border', 0)};

    .ant-card-head {
      border-bottom: 1px solid ${palette('border', 0)};
    }

    &:hover {
      border: 1px solid ${palette('border', 0)} !important;
    }
  }

  &.ant-card-loading {
    .ant-card-body {
      p {
        margin-bottom: 0;
      }
    }
  }

  .custom-card {
    padding: 10px 16px;
    h3 {
      color: ${palette('text', 1)};
      font-weight: 500;
    }
    p {
      color: ${palette('grayscale', 0)};
    }
  }

  .custom-image img {
    display: block;
  }

  .ant-radio-group{
    padding: 20px 30px 40px;
    display: flex;
    h3 {
      padding-right: 20px;
    }
  }

  .ant-table-thead {
    tr {
      th {
        background: #eaeaea;
        word-break: keep-all;
        /* span {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        } */
        white-space: nowrap;
      }        
    }
  }

  .ant-table-tbody{
    tr{
      td {
        white-space: nowrap;
      }
    }
  }

  .ant-card-extra {
    button{
      background: #f3f3f3;
      border: 0;
      padding: 0 6px;
      margin-right: 10px;
      i{
        zoom: 2;
        vertical-align: middle;
      }
    }
  }
  .ant-table-content{
    overflow-x: auto;
  }
  @media only screen and (max-width: 880px) {
    .ant-card-extra {
      button{
        i{
          zoom: 1.5;
        }
      }
    }
  }
  @media only screen and (max-width: 802px) {
    .ant-card-extra {
      button{
        span{
          display: none;
        }
      }
    }
  } 
  @media only screen and (max-width: 404px) {
    .ant-card-extra {
      button{
        margin-right: 6px;
        padding: 0
      }
    }
    .ant-card-head{
      padding-right: 2px;
    }
  }
`;

export default Card;
