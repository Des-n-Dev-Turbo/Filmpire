import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';

import { searchMovie, selectGenreOrCategory } from '../Features/currentGenreOrCategory';
import { ColorModeContext } from '../Utils/ToggleColorMode';
import { fetchToken } from '../Utils';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_REACT_APP_ALAN_AI_KEY,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        switch (command) {
          case 'changeMode': {
            if (mode === 'light') {
              setMode('light');
            } else {
              setMode('dark');
            }
            break;
          }
          case 'login': {
            fetchToken();
            break;
          }
          case 'logout': {
            localStorage.clear();
            window.location.href = '/';
            break;
          }
          case 'chooseGenre': {
            const foundGenre = genres.find((genre) => genre.name.toLowerCase() === genreOrCategory.toLowerCase());

            if (foundGenre) {
              navigate('/');
              dispatch(selectGenreOrCategory(foundGenre.id));
            } else {
              const parsedCategory = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
              navigate('/');
              dispatch(selectGenreOrCategory(parsedCategory));
            }

            break;
          }
          case 'search': {
            navigate('/');
            dispatch(searchMovie(query));
            break;
          }
          default: {
            break;
          }
        }
      },
    });
  }, []);
};

export default useAlan;
