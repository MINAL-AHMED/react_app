import { useEffect, useState } from "react";
import Layout from "./Layout";
// const getTimes = (date) => {
//   return {
//     hours: DateFns.getHours(date),
//     minutes: DateFns.getMinutes(date),
//     seconds: DateFns.getSeconds(date),
//   };
// };

// const formatTime = (time) => {
//   return time < 10 ? `0${time}` : time;
// };
const ClockPage = () => {
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [date]);

  // const hours = date.getHours().toString().padStart(2, "0");
  // const minutes = date.getMinutes().toString().padStart(2, "0");
  // const seconds = date.getSeconds().toString().padStart(2, "0");

  // // const time = getTimes(date);
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Clock page</h1>
  //       <h1>
  //         {/* {formatTime(time.hours)}:{formatTime(time.minutes)}:
  //         {formatTime(time.seconds)} */}
  //         {hours}:{minutes}:{seconds}
  //       </h1>
  //     </Layout>
  //   </div>
  // );
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <>
      <Layout>
        <div>
          <h1>
            {hours}:{minutes}:{seconds}
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default ClockPage;
