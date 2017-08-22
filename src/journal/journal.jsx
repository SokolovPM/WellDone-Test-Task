import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectors } from '../__data__'

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
     {_.map(journal, (act) => <Act act={act} key={act.Id} />)}
  </div>
))
