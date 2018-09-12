export const sort = (state = "title", action) => {
  switch (action.type) {
    case 'SORT_INPUT':
      return action.sort
    default:
      return state
  }
}

export const query = (state = "", action) => {
  switch (action.type) {
    case 'SEARCH_QUERY_INPUT':
      return action.string
    default:
      return state
  }
}

export const maxResults = (state = 10, action) => {
  switch (action.type) {
    case 'MAXRESULTS_INPUT':
      return action.maxResults
    default:
      return state
  }
}

export const findTitle = (state = "", action) => {
  switch (action.type) {
    case 'FIND_TITLE_INPUT':
      return action.title
    default:
      return state
  }
}

export const showResults = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_RESULTS':
      return action.show
    default:
      return state
  }
}