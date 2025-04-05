import './Form.css';

function Form(props) {
  return (
    <div className="Form">
    <form action="#" method="post">
      
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"></input>
    
    <input type="submit" value="Enviar"></input>

    </form>
    </div>
  );
}

export default Form;