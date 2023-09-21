import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "m@m", "2021-01-01")
console.log(novoUser.exibirInfos())
// mas da forma como está aqui, qualquer pessoa pode mudar o nome deste usuário e por isso usamos o encapsulamento, para impedir isso