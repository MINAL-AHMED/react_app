
function ListGroup(props: props) {
  let items = ["raj", "dhaka", "Mirpur"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h4> List Group</h4>

      <ul className=" fw-bold">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "list-group-item-active bg-success text-white" : "list-group-item"
            }
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedIndex(index)
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
