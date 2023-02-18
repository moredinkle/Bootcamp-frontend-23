export const pokemonTypeColorMap: Record<string, string> = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export function shadeColor(color: string, decimal: number): string {
  const base = color.startsWith('#') ? 1 : 0;

  let r = parseInt(color.substring(base, 3), 16);
  let g = parseInt(color.substring(base + 2, 5), 16);
  let b = parseInt(color.substring(base + 4, 7), 16);

  r = Math.round(r / decimal);
  g = Math.round(g / decimal);
  b = Math.round(b / decimal);

  r = (r < 255)? r : 255;
  g = (g < 255)? g : 255;
  b = (b < 255)? b : 255;

  const rr = ((r.toString(16).length === 1)? `0${r.toString(16)}` : r.toString(16));
  const gg = ((g.toString(16).length === 1)? `0${g.toString(16)}` : g.toString(16));
  const bb = ((b.toString(16).length === 1)? `0${b.toString(16)}` : b.toString(16));

  return `#${rr}${gg}${bb}`;
}
