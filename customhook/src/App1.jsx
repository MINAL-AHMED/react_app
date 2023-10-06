import CountController from "./components/CountController";

const App = () => {
  // const {
  //   count: count1,
  //   handleInc,
  //   handleDec,
  // } = useCounter({
  //   upperBound: 10,
  // });

  // const count2 = useCounter({
  //   initial: 5,
  //   lowerBound: 5,
  //   upperBound: 15,
  // }); bar bar state na create kore props ar moddhe arguent pass kore dilam
  return (
    <div>
      <CountController lowerBound={-10} />
      <CountController initial={5} lowerBound={-10} upperBound={10} />
    </div>
  );
};

export default App;
