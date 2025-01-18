import CommentSection from "./CommentSection";

export default function profiles({ Leaderboard }) {
  return (
    <div id="profile">
      <Item data={Leaderboard} />
    </div>
  );
}

function Item({ data }) {
  return (
    <>
      {data.map((value, index) => (
        <div className="pt-5" key={index}>
          <div className="item">
            <img className="rounded-full" src={value.img} alt="" />
            <h3 className="font-mono">{value.name}</h3>
            <span className="font-mono">{value.location}</span>
            <img className="rounded-full" src={value.image} alt="" />
            <CommentSection/>
            <div className="info"></div>
          </div>
          <div className="item">
          </div>
        </div>
      ))}
    </>
  );
}
