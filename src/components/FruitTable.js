import React from 'react';

const FruitTable = ({ fruits }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map(fruit => (
          <tr key={fruit.id}>
            <td>{fruit.name}</td>
            <td><img src={fruit.image} alt={fruit.name} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FruitTable;
