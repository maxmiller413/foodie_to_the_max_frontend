import React from "react"
import styles from "./Filter.module.css"
// ?

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
    <div className={`container`}>
		<div className={styles['search-summary']}>
			<h1 className='subtitle'> <strong> Fine Dining </strong> Chicago </h1>
			<p> Showing 50 out of 543 results</p>
		</div>
		<div className={`${styles.filters} control-has-icons`}>

		<div className="control has-icons-left">
				<div className="select is-primary is-light">
					<select
						className={styles['select-control']}
						name="sort"
						onChange={handleChangeSortBy}
						value={sortBy}
					>
						<option value="All">All Prices</option>
						<option value="$">$</option>
						<option value="$$">$$</option>
						<option value="$$$">$$$</option>
						<option value="$$$$">$$$$</option>
					</select>
				</div>
				<div className="icon has-text-primary is-small is-left">
					
					<i className="fas fa-dollar-sign is-danger"></i>
				</div>
			</div>

	


			
			<div className="control has-icons-left">
				<div className="select is-info is-light">
					<select
						className={styles['select-control']}
						name="sort"
						onChange={handleChangeRating}
						value={rating}
					>
						<option value="All">All Ratings</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<div className="icon has-text-info is-small is-left">
						<i className="fas fa-globe"></i>
					</div>
				</div>
			</div>

			{/* <div className="ui item">
				<label>Open Now?</label>
			</div> */}
			<div className="control">
				<div className="button is-outlined is-danger has-icons-left">
					<div className="icon has-text-danger is-left pl-3">
						<i className="fas fa-door-open"></i>
					</div>
					<div className="pl-2">Open Now
						<input
							className={`${styles['select-control']}`}
							checked={showRes}
							onChange={handleToggleRes}
							type="checkbox"
						></input>
					</div>
				</div>
			</div>
		
			{/* <div className="ui item">
				<label>SortBy Number of Reviews</label>
			</div>
			<div className="ui item">
				
				<button onChange={(e) => setReview()} className="ui toggle checkbox">

				</button>
			</div> */}

			{/* <button className="button is-large has-addons">
				<span className="icon">
					
				<i className="fas fa-filter"></i>
				</span>
				<span>All Filters</span>
			</button> */}

			{/* <div className="buttons has-addons">
				<button className="button">$</button>
				<button className="button">$$</button>
				<button className="button">$$$</button>
				<button className="button">$$$$</button>
			</div> */}

			{/* <button className="button has-addons">
				<span className="icon"><i className="fas fa-clock"></i></span>
				<span>Open Now</span>
			</button> */}

			{/* <button className="button has-addons">
				<span className="icon"><i className="fa fa-dollar-sign"></i></span>
				<span>CashBack</span>
			</button> */}
		</div>

		<div >
			{/* <div className="ui item">
				<label>Sort by $ </label>
			</div> */}
			
		</div>
	</div>
    )
}

export default Filter