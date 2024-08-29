import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFilterlist = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          className="rating-item"
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingsFilterlist()}</ul>
    </div>
  )

  const renderCategoryFiltersList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategorytem = () => changeCategory(category.categoryId)

      const categoryClassName =
        activeCategoryId === category.categoryId
          ? 'category-name active-category-name'
          : 'category-name'

      return (
        <li
          key={category.categoryId}
          onClick={onClickCategorytem}
          className="category-item"
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilters = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoryFiltersList()}</ul>
    </div>
  )

  const onEntreSearchInput = event => {
    const {entreSearchInput} = props
    if (event.key === 'Entre') {
      entreSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="input-container">
        <input
          type="search"
          className="search-input"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEntreSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilters()}
      {renderRatingFilters()}
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
