import "./App.css";
import List from "./components/List";

function App() {
  const nickname = "이팔봉";
  const favorite = "고양이";
  const cats = ["아비시니안", "뱅갈", "샴", "페르시안", "러시안블루"];
  return (
    <>
      <strong className="school">JBNU</strong>
      <p
        style={{ color: "purple", fontWeight: "bold", fontSize: "3rem" }}
      >{`${nickname}`}</p>
      <h1>
        {nickname}은 {favorite}을 좋아함
      </h1>
      <ul>
        {cats.map((cat, index) => {
          // return <li key={index}>{item}</li>;
          return <List key={index} cat_type={cat} />;
        })}
      </ul>
    </>
  );
}

export default App;
