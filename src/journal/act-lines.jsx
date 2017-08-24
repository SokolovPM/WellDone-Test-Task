import React, { Component } from 'react'

import { Overlay, Row, Col } from 'src/core_modules'

import style from './style.css'

export const ActLines = ({ lines, close }) => (
    <Overlay>
      <div className={style.lines}>
          {_.map(lines, (line, i) => (
              <Row className={style.row} key={i}>
                  <Col xs={2}>
                      {line.Description}
                  </Col>
                  <Col xs={2}>
                      {line.Qty}
                  </Col>
                  <Col xs={2}>
                      {line.Rate}
                  </Col>
                  <Col xs={2}>
                      {line.Amount}
                  </Col>
                  <Col xs={2}>
                      {line.TaxRate}
                  </Col>
                  <Col xs={2}>
                      {line.TaxAmount}
                  </Col>
              </Row>
          ))}
          <div onClick={close} className={style.close}>Закрыть</div>
      </div>
    </Overlay>
)
