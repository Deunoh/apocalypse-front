import { expect, test } from 'vitest';
import { filterMarkers } from '../src/utils/filterMarkers.js';
const fakeMarkers = [
  { id: 1, type: { name: 'Arme' } },
  { id: 2, type: { name: 'Provision' } },
  { id: 3, type: { name: 'Soin' } },
  { id: 4, type: { name: 'Abri' } },
  { id: 5, type: { name: 'Danger' } },
  { id: 6, type: { name: 'Rassemblement' } },
  { id: 7, type: { name: 'Zombie' } },
  { id: 8, type: { name: 'Eau' } },
  { id: 9, type: { name: 'Zombie' } },
];

test('returns all markers when selected type is "Filtrer par type"', () => {
  const selectedType = 'Filtrer par type';
  const result = filterMarkers(fakeMarkers, selectedType);
  expect(result).toEqual(fakeMarkers);
});

test('returns only markers of the selected type', () => {
  const selectedType = 'Zombie';
  const result = filterMarkers(fakeMarkers, selectedType);
  expect(result).toEqual([
    { id: 7, type: { name: 'Zombie' } },
    { id: 9, type: { name: 'Zombie' } },
  ]);
});

test('resturn an empty array if the typse doesn\t exist', () => {
  const selectedType = 'Accident';
  const result = filterMarkers(fakeMarkers, selectedType);
  expect(result).toEqual([]);
});
