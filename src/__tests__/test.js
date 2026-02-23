import { getHealthStatus, sortHeroes } from '../index';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 50 }, 'wounded'],
  [{ name: 'Мечник', health: 10 }, 'critical'],
])('should return correct health status for %o', (character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortHeroes(input);
  
  expect(result).toEqual(expected);
});