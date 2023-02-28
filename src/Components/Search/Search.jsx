import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { searchMovie } from '../../Features/currentGenreOrCategory';

import { inputPropsStyle, SearchContainer } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <SearchContainer>
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          sx: inputPropsStyle,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default Search;
