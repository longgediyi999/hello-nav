import React from 'react'
import './index.css'

function FilterBar ({filterKey, onInput, toggleType, type}: FilterProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__toggle-btn" onClick={toggleType}>
        <svg className={`icon ${type}-icon`} aria-hidden="true">
          <use href={`#icon-${type}`}></use>
        </svg>
      </div>
      <div className="filter-bar__input-warp">
        <input className="search-input" type="text" value={filterKey} onChange={() => {}} onInput={onInput} />
        <svg className="icon search-icon" aria-hidden="true">
          <use href="#icon-search"></use>
        </svg>
        <svg className="icon clear-icon" aria-hidden="true">
          <use href="#icon-clear11"></use>
        </svg>
      </div>
    </div>
  )
}

export default FilterBar
