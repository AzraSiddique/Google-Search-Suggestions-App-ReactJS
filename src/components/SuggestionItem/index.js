import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionUpdate} = props
  const {suggestion} = suggestionDetails

  const suggestionClick = () => {
    suggestionUpdate(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={suggestionClick}
      />
    </li>
  )
}

export default SuggestionItem
