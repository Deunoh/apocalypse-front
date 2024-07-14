// Filter markers based on the selected type (return array of pinpoints)
export const filterMarkers = (markers, selectedType) => {
  return markers.filter(
    (marker) =>
      selectedType === 'Filtrer par type' || marker.type.name === selectedType
  );
};
