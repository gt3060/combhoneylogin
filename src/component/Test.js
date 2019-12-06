import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, IndexRoute } from 'react-router-dom';
import { Checkbox, Button } from 'antd';
// import { hashHistory } from 'react-router';

import Testroute from './Testroute';

const Option = [];
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: Option,
            arr: [0, 2],
            plainOptions: ['北京', '天津', '上海', '重庆', '四川', '湖北', '湖南', '吉林', '广东', '广西'],
            checkAll: false,
        };
    }
    onChange = (checkedValues) => {
        // checkedValues.preventDefault()
        const { plainOptions } = this.state;
        console.log(checkedValues);
        this.setState({
            checkedList: checkedValues
        })
        for (let k in checkedValues) {
            let arr1 = plainOptions.findIndex((value, index, array) => value == checkedValues[k])
            // console.log(arr1)
        }
    }
    componentDidMount(){
        console.log(this.props.location.query)
    }
    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            checkAll: e.target.checked,
        });
    };
    Rquery = () => {
        this.props.history.push({
            pathname:'detail',
            query:"alal"
        });
    }

    render() {
        const { arr, plainOptions, checkAll, checkedList } = this.state;
        
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <Checkbox
                        onChange={this.onCheckAllChange}
                        checked={checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                {
                    arr.map((item) => {
                        Option.push(plainOptions[item]);
                        return;
                    })
                }
                <br /><br />
                <Checkbox.Group
                    options={plainOptions}
                    // defaultValue={checkedList}
                    value={checkedList}
                    onChange={this.onChange.bind(this)} />
                <br /><br />
                {/* <Link to={path}>跳转到详情页面</Link> */}

                hashHistory.push(path)
                <div>
                    <a href='#/detail'>去detail-Testroute</a>
                    <Button onClick={this.Rquery} type="primary">通过函数跳转</Button>
                </div>
                {/* <Router>
                    <div>
                        <ul>
                            <Button onClick={this.Rquery}>
                                <Link to={params}>测试Route传参query</Link>
                            </Button>
                        </ul>
                        <Route path="/query" component={Testroute} />
                    </div>
                </Router> */}
            </div>

        );
    }
}

export default Test;