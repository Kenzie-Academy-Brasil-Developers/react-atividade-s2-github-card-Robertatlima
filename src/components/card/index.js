import "./style.css";
function Card({ cardResult: { owner, full_name, description, html_url } }) {
  return (
    <div className="card">
      {owner === undefined ? (
        "Repositorio não existe"
      ) : (
        <div>
          <h2> {full_name}</h2>
          <img src={owner.avatar_url} alt={full_name} />
          <p> {description}</p>{" "}
          <a href={html_url}> Clique aqui para acessar o repositorio</a>
        </div>
      )}
    </div>
  );
}
export default Card;
