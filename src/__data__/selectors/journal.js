import { createSelector } from 'reselect'

const flagSelector = (selector, name) => createSelector(
  selector,
  (map) => map.get(name)
)

const journalStateSlice = (state) => state.journal

const journal = flagSelector(journalStateSlice, 'journal')

export const getJournal = createSelector(
  journal,
  (journal) => journal
)
