import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { CustomMainLink, CustomImage, CustomCategoryLink, GenreImage } from './styles';
import genreIcons from '../../assets/genres';

import { useGetGenresQuery } from '../../Services/TMDB';
import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
  const { data, isFetching } = useGetGenresQuery();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);

  return (
    <>
      <CustomMainLink to="/">
        <CustomImage src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="Filmpire Logo" />
      </CustomMainLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <CustomCategoryLink key={value} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <GenreImage src={genreIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </CustomCategoryLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <CustomCategoryLink key={id} to="/">
              <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <GenreImage src={genreIcons[name.toLowerCase()]} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </CustomCategoryLink>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
