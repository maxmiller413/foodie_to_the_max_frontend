import React from "react"
import styles from "./Filter.module.css"


function Filter({ showRes, setShowRes, sortBy, setSortBy, rating, setRating, review, setReview }){

    function handleChangeSortBy(e){
        setSortBy(e.target.value)
    }

    function handleToggleRes(e){
        setShowRes(e.target.checked)
    }

    function handleChangeRating(e){
        setRating(e.target.value)
    }
    return(
    <div className={styles.container}>
		<div className={styles['search-summary']}>
			<h1 className='subtitle'> <strong> burgers </strong> berlin </h1>
			<p> Showing 1020 out of 543 results</p>
		</div>
		<div className={`${styles.filters} control-has-icons`}>

			<button className="button is-large has-addons">
				<span className="icon">
					
				<i className="fas fa-filter"></i>
				</span>
				<span>All Filters</span>
			</button>

			<div className="buttons has-addons">
				<button className="button">$</button>
				<button className="button">$$</button>
				<button className="button">$$$</button>
				<button className="button">$$$$</button>
			</div>

			<button className="button has-addons">
				<span className="icon"><i className="fas fa-clock"></i></span>
				<span>Open Now</span>
			</button>

			<button className="button has-addons">
				<span className="icon"><i className="fa fa-dollar-sign"></i></span>
				<span>CashBack</span>
			</button>
		</div>

		<div>
			<div className="ui item">
				<label>Sort by $ </label>
			</div>
			<div className="ui item">
				<select
					className={styles['select-control']}
					name="sort"
					onChange={handleChangeSortBy}
					value={sortBy}
					
				>
					<option value="All">All</option>
					<option value="$">$</option>
					<option value="$$">$$</option>
					<option value="$$$">$$$</option>
					<option value="$$$$">$$$$</option>
				</select>
			</div>
		

	


			<div className="ui item">
				<label>Sort by Rating</label>
			</div>
			<div className="ui item">
				<select
					className="ui selection dropdown"
					name="sort"
					onChange={handleChangeRating}
					value={rating}
				>
					<option value="All">All</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div className="ui item">
				<label>Open Now?</label>
			</div>
			<div className="ui item">
				<input
					className="ui toggle checkbox"
					checked={showRes}
					onChange={handleToggleRes}
					type="checkbox"
				/>
			</div>

			<div className="ui item">
				<label>SortBy Number of Reviews</label>
			</div>
			<div className="ui item">
				
				<button onChange={(e) => setReview()} className="ui toggle checkbox">

				</button>
			</div>
		</div>
	</div>
    )
}

export default Filter