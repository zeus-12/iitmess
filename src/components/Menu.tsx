const Menu = ({
  data,
  weekNo,
  day,
}: {
  data: any;
  weekNo: number;
  day: any;
}) => {
  data = data[`week${weekNo}`][day];

  const meals = [
    { meal: "breakfast", colour: "text-orange-200" },
    { meal: "lunch", colour: "text-green-300" },
    { meal: "dinner", colour: "text-blue-300" },
  ];

  return (
    <div className="flex justify-evenly border-[0.025px] mt-2 border-gray-900 rounded-lg py-4 hover:scale-[101%] transition-all duration-200 transform ease-in-out">
      {meals.map((item) => (
        <div key={item.meal}>
          <p className={`${item.colour} capitalize`}>{item.meal}</p>
          <ul className="list-disc px-2">
            <MenuList meal={item.meal} data={data} />
          </ul>
        </div>
      ))}
    </div>
  );
};

const MenuList = ({ meal, data }: { meal: string; data: any }) =>
  data[meal].map((food: any) => <li key={food}>{food}</li>);

export default Menu;
