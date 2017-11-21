import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import { DateCell, ImageCell, LinkCell, TextCell } from './helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="namescan.scans.scanID" />,
    key: 'scanid',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'scanid')
  },
  {
    title: <IntlMessages id="namescan.scans.date" />,
    key: 'date',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'date')
  },
  {
    title: <IntlMessages id="namescan.history.term" />,
    key: 'term',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'term')
  },
  {
    title: <IntlMessages id="namescan.scanResult.numofmatches" />,
    key: 'numofmatches',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'numofmatches')
  },
  {
    title: <IntlMessages id="namescan.history.scanNumber" />,
    key: 'scannumber',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'scannumber')
  },
  {
    title: <IntlMessages id="namescan.scanResult.flag" />,
    key: 'flag',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'flag')
  },
  {
    title: <IntlMessages id="namescan.risk" />,
    key: 'risk',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'risk')
  }
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[0], sorter: true },
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
  columns[5],
  columns[6]
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4]
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]]
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]]
  }
];
const tableinfos = [
  {
    title: 'Simple Table',
    value: 'simple',
    columns: clone(smallColumns)
  },
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(sortColumns)
  },
  {
    title: 'Search Text',
    value: 'filterView',
    columns: clone(smallColumns)
  },
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(editColumns)
  },
  {
    title: 'Grouping View',
    value: 'groupView',
    columns: clone(groupColumns)
  },
  {
    title: 'Customized View',
    value: 'customizedView',
    columns: clone(columns)
  }
];
export { columns, tableinfos, sortColumns };
