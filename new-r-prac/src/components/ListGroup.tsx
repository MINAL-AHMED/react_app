import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
   onSelectItem:(item: string)=> void
}
function ListGroup({items,heading,onSelectItem}:Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h4>{heading}</h4>

      <ul className=" fw-bold">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active bg-success text-white"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
