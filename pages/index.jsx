import Head from "next/head";
import Menu from "../components/Menu";
import menu from "../data";

export default function Home({ displayDate, weekNo, day }) {
  return (
    <div className="mt-8">
      <Head>
        <title>IIT-M-ESS</title>
        <meta
          name="description"
          content="The one-line answer to the qn 'food entha myre'"
        />
      </Head>

      <p className="text-center text-4xl font-semibold tracking-tight">
        IIT<span className="text-sky-400">M</span>ESS
      </p>
      <div className="flex justify-evenly py-2">
        <div>
          <p>Today, {displayDate}</p>
        </div>
        <div>
          <p>Week Number: {weekNo}</p>
        </div>
      </div>

      <div className="space-y-8">
        {Object.keys(menu)?.map((item) => (
          <div key={item}>
            <p className="text-xl text-center text-orange-400 font-semibold">
              <span className="capitalize">{item.split("mess")[0]}</span> Mess
            </p>

            <Menu data={menu[item]} weekNo={weekNo} day={day} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const incrementWeek = (weekNo, diffInWeeks) => {
    weekNo = (weekNo + diffInWeeks) % 4;
    if (weekNo == 0) return 4;
    return weekNo;
  };
  const startDate = "2022-05-01";
  var date = new Date();
  //adding 5:30 to gmt
  date.setHours(date.getHours() + 5.5);

  let today = date.toISOString().slice(0, 10);

  const dateSplit = today.split("-");
  const displayDate = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];

  let day;

  switch (date.getDay()) {
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

  return {
    props: {
      displayDate,
      weekNo,
      day,
    },
  };
}
