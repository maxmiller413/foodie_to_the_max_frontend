import React from "react"

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
    
	<div className="ui menu">

		<div className="ui item">
			<label>Sort by $ </label>
		</div>
		<div className="ui item">
			<select
				className="ui selection dropdown"
				name="sort"
				onChange={handleChangeSortBy}
				value={sortBy}
			>
				<option value="All">All</option>
				<option value="$">$</option>
				<option value="$$">$$</option>
				<option value="$$$">$$$</option>
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
		
    )
}

export default Filter