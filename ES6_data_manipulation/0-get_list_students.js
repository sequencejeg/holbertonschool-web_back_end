export default function getListStudents() {
  const arr = [];
  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);

  return arr;
}
