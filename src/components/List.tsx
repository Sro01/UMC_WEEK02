interface ListProps {
  cat_type: string;
}

const List = (props: ListProps) => {
  return <li style={{ listStyle: "none" }}>{props.cat_type}</li>;
};

export default List;
