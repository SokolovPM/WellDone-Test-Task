import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectors } from 'src/__data__'
import { Row, Col } from 'src/core_modules'
import { Act } from './act'
import style from './style.css'

const mapStateToProps = (state) => ({
  journal: selectors.journal.getJournal(state)
})

const mapDispatchToProps = (dispatch) => ({
})

export const Journal = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ journal }) => (
  <div className={style.board}>
      <Row className={style.tableHeader} >
          <Col xs={2}>Дата</Col>
          <Col xs={2}>Исполнитель</Col>
          <Col xs={2}>Заказчик</Col>
          <Col xs={2}>Сумма</Col>
          <Col xs={2}>Акт</Col>
          <Col xs={2}>Счет фактура</Col>
      </Row>
      <div className={style.tableBody}>
          {_.map(journal, (act, i) => <Act act={act} key={act.Id} />)}
      </div>
  </div>
))
