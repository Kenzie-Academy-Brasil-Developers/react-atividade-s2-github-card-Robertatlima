import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

function Search({ setCardResult }) {
  const formSchema = yup.object().shape({
    search: yup.string().required("Erro na busca do repositorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    fetch(`https://api.github.com/repos/${data.search}`)
      .then((response) => response.json())
      .then((response) => setCardResult(response));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          placeholder="Digite o nome do repositorio"
          {...register("search")}
        />
        {errors.serch?.message}

        <button>Pesquisar</button>
      </form>
    </div>
  );
}
export default Search;
