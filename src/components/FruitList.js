import React from 'react';

const FruitList = ({ fruits }) => {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            <img src={fruit.image} alt={fruit.name} />
            <span>{fruit.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
