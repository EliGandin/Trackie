export const parseLocation = (arr: unknown[]) => {
  return arr.map((el: unknown) => {
    return { name: el.display_name as string, coordinates: [el.lat, el.lon] };
  });
};

export const isOptionIncluded = (query: string, option: string) => {
  if (query === "") return;
  // Normalize the query and option for case-insensitive and optional whitespace comparison
  const normalizedQuery = query.trim().toLowerCase();
  const normalizedOption = option.trim().toLowerCase();

  // Check if the normalized query is included in the normalized option
  return normalizedOption.includes(normalizedQuery);
};
