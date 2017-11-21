import React, { Component } from 'react';
import TableWrapper, { CustomizedTableWrapper } from './antTable.style';
import Switch from '../../../../components/uielements/switch';
import Form from '../../../../components/uielements/form';
import { MonitoringCell } from '../helperCells';
import clone from 'clone';
import { Icon } from 'antd';
import Input from '../../../../components/uielements/input';
import Button from '../../../../components/uielements/button';

const FormItem = Form.Item;

const expandedRowRender = record =>
  <p>{`${record.term}`}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { x: 240 };

const toggleOptions = [
  {
    defaultValue: true,
    title: 'Bordered',
    key: 'bordered',
  },
  {
    defaultValue: true,
    title: 'Loading',
    key: 'loading',
  },
  {
    defaultValue: true,
    title: 'Pagination',
    key: 'pagination',
  },
  {
    defaultValue: title,
    title: 'Title',
    key: 'title',
  },
  {
    defaultValue: showHeader,
    title: 'Show Header',
    key: 'showHeader',
  },
  {
    defaultValue: footer,
    title: 'Footer',
    key: 'footer',
  },
  {
    defaultValue: expandedRowRender,
    title: 'Expanded Row Render',
    key: 'expandedRowRender',
  },
  {
    defaultValue: {},
    title: 'Checkbox',
    key: 'rowSelection',
  },
  {
    defaultValue: scroll,
    title: 'Scrollable',
    key: 'scroll',
  },
];
export default class CustomizedView extends Component {
  constructor(props) {
    super(props);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      bordered: undefined,
      loading: undefined,
      pagination: true,
      size: 'default',
      expandedRowRender,
      title,
      showHeader,
      footer,
      rowSelection: {},
      scroll: scroll,
      dataList: this.props.dataList.getAll(),
      columns: this.createcolumns(clone(this.props.columns)),
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    };
  }
  onChange(pagination, filters, sorter) {
    const { dataList } = this.props;
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      this.setState({ dataList: dataList.getAll() });
    }
  }
  renderSwitch(option) {
    const checked = this.state[option.key] !== undefined;
    const onChange = () => {
      if (!checked) {
        this.setState({ [option.key]: option.defaultValue });
      } else {
        this.setState({ [option.key]: undefined });
      }
    };
    return (
      <FormItem label={option.title} key={option.key}>
        <Switch checked={checked} onChange={onChange} />
      </FormItem>
    );
  }
  createcolumns(columns) {    
    const monitoringColumn = {
      title: 'Ongoing Monitoring',
      dataIndex: 'ongoingmonitoring',
      render: (text, record, index) =>
        <MonitoringCell />,
    };
    columns.push(monitoringColumn);
    return columns;
  }
  onSearch() {
    let { searchText } = this.state;
    searchText = searchText.toUpperCase();
    const dataList = this.props.dataList
      .getAll()
      .filter(data => data['scanid'].toUpperCase().includes(searchText));
    this.setState({
      dataList,
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    });
  }
  onInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const filterDropdown = (
      <div className="isoTableSearchBox">
        <Input
          id="tableFilterInput"
          ref={ele => (this.searchInput = ele)}
          placeholder="Search name"
          value={this.state.searchText}
          onChange={this.onInputChange}
          onPressEnter={this.onSearch}
        />
        <Button type="primary" onClick={this.onSearch}>
          Search
        </Button>
      </div>
    );
    const columns = this.state.columns;
    columns[0] = {
      ...columns[0],
      filterDropdown,
      filterIcon: (
        <Icon
          type="search"
          style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }}
        />
      ),
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: visible =>
        this.setState({ filterDropdownVisible: visible }, () =>
          document.getElementById('tableFilterInput').focus()
        )
    };
    return (
      <CustomizedTableWrapper className="isoCustomizedTableWrapper">
        <div className="isoCustomizedTableControlBar">
          <Form layout="inline">
            {toggleOptions.map(option => this.renderSwitch(option))}
          </Form>
        </div>
        <TableWrapper
          {...this.state}
          columns={columns}
          onChange={this.onChange}
          dataSource={this.state.dataList}
          className="isoCustomizedTable"
        />
      </CustomizedTableWrapper>
    );
  }
}
