import React, { Component } from 'react';
import { Button } from 'antd';

class Testroute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.location.query

        };
    }
    goBack = () => {
        this.props.history.goBack({
            query:"true"
        });
    }
    render() {
        return (
            <div>
                <div style={{color:"red"}}>{this.state.status}</div>
                <a href='#/'>回home-TEST</a>
                <Button onClick={this.goBack}>撤回</Button>
            </div>
        );
    }
}

export default Testroute;