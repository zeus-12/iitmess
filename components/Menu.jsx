const Menu = ({ data, weekNo, day }) => {
  data = data[`week${weekNo}`][day];

  const menuList = (meal) =>
    data[meal].map((food) => <li key={food}>{food}</li>);

  const meals = [
    { meal: "breakfast", colour: "orange-200" },
    { meal: "lunch", colour: "green-300" },
    { meal: "dinner", colour: "blue-300" },
  ];

  return (
    <div>
      <div className="flex justify-evenly">
        {meals.map((item) => (
          <div key={item.meal}>
            <p className={`text-${item.colour} capitalize`}>{item.meal}</p>
            <ul className="list-disc px-2">{menuList(item.meal)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
