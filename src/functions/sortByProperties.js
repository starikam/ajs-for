export default function sortByProperties(object, propertySortOrder) {
  const propertiesInGivenOrder = propertySortOrder
    .filter((property) => Object.prototype.hasOwnProperty.call(object, property))
    .map((property) => ({ key: property, value: object[property] }));

  const otherProperties = [];

  for (const property in object) {
    if (!propertySortOrder.includes(property)) {
      otherProperties.push({ key: property, value: object[property] });
    }
  }

  otherProperties.sort((item1, item2) => (item1.key < item2.key ? -1 : 1));

  return [...propertiesInGivenOrder, ...otherProperties];
}
