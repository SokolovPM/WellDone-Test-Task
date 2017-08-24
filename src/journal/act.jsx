import React, { Component } from 'react'
import moment from 'moment'

import { Row, Col } from 'src/core_modules'

import { ActLines } from './act-lines'
import style from './style.css'

export class Act extends Component {
    state = {
        showLines: false
    }

    handleRowClick = () => {
        this.setState({ showLines: !this.state.show })
    }

    handleClose = (e) => {
        this.setState({ showLines: false })
    }

    render () {
        const act = this.props.act
        return (
            <div>
                <div onClick={this.handleRowClick}>
                    <Row className={style.row} >
                        <Col xs={2}>
                            {moment(act.Date).format("DD.MM.YYYY")}
                        </Col>
                        <Col xs={2}>
                            {act.OrgName}
                        </Col>
                        <Col xs={2}>
                            {act.CustomerName}
                        </Col>
                        <Col xs={2}>
                            {act.TotalAmount}
                        </Col>
                        <Col xs={2}>
                            {act.FinanceNumber}
                        </Col>
                        <Col xs={2}>
                            {act.FinanceTaxNumber}
                        </Col>
                    </Row>
                </div>
                {this.state.showLines && <ActLines close={this.handleClose} lines={act.FinanceActLines}/> }
            </div>
        )
    }
}
