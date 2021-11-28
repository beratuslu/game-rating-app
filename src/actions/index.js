let nextGameId = 10;
export const addGame = (title, gameType, rating) => ({
  type: "ADD_GAME",
  id: nextGameId++,
  title: title,
  gameType,
  rating,
  color: "green",
});
export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleGame = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const deleteGame = (id) => ({
  type: "DELETE_GAME",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
