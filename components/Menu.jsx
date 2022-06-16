const Menu = ({ data }) => {
  //2022 may 8 - sunday
  const incrementWeek = (weekNo, diffInWeeks) => {
    weekNo = (weekNo + diffInWeeks) % 4;
    if (weekNo == 0) return 4;
    return weekNo;
  };

  const startDate = "2022-05-01";

  // const today = '2022-05-23';

  var date = new Date();
  //adding 5:30 to gmt
  date.setHours(date.getHours() + 5.5);

  let today = date.toISOString().slice(0, 10);
  const dateSplit = today.split("-");
  const displayDate = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];
  // const today = new Date().toISOString().slice(0, 10);
  let day = "sunday";
  switch (new Date().getDay()) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case 6:
      day = "saturday";
  }

  let weekNo = 2;
  const diffInMs = new Date(today) - new Date(startDate);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const diffInWeeks = parseInt(diffInDays / 7);
  weekNo = incrementWeek(weekNo, diffInWeeks);

  data = data[`week${weekNo}`][day];

  const menuList = (meal) =>
    data[meal].map((food) => <li key={food}>{food}</li>);

  return (
    <div>
      <div className="flex justify-evenly py-2">
        <div>
          <p>Today, {displayDate}</p>
        </div>
        <div>
          <p>Week Number: {weekNo}</p>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div>
          <p className="text-orange-200">Breakfast</p>
          <ul>{menuList("breakfast")}</ul>
        </div>
        <div>
          <p className="text-green-300">Lunch</p>
          <ul>{menuList("lunch")}</ul>
        </div>
        <div>
          <p className="text-blue-300">Dinner</p>
          <ul>{menuList("dinner")}</ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
