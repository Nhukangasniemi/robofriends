import React from 'react';

const SearchBox = ({searchChange, searchField}) => {
    return (
        <div className="pa2">
            <input 
                type="search" 
                placeholder="Robot Search"
                className="pa3 ba b--green  bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;