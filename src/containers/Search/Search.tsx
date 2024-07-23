import React, {useEffect} from 'react';
import './Search.css';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {setInputValue} from '../../store/searchSlice';
import {AppDispatch} from '../../app/store';
import {fetchShows} from '../../store/searchThunks';
import {Link} from 'react-router-dom';

const Search = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const inputValue = useAppSelector(state => state.search.inputValue);
  const results = useAppSelector(state => state.search.results);

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchShows());
    }
  }, [dispatch, inputValue]);

  return (
    <div>
      <div className={'container add-container'}>
        <form onSubmit={(event) => {event.preventDefault(); dispatch(fetchShows());}}>
          <label htmlFor="showInput">Search for TV Show</label>
          <div className="form-group">
            <input
              type='text'
              id={'showInput'}
              name={'showInput'}
              value={inputValue}
              onChange={(event) => dispatch(setInputValue(event.target.value))}
              className="form-control"
            />
            {
              results && (
                <div className={results.length > 0 ? 'search-results active': 'search-results'}>
                  {results.map(show => (
                    <Link to={`/shows/${show.id}`} key={show.id} className="search-result-items">{show.name}</Link>
                  ))}
                </div>
              )
            }
          </div>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;