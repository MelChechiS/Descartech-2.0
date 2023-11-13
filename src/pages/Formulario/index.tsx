import Toolbar from "../../components/Toolbar";
import styles from "./Formulario.module.scss";
import Footer from "../../components/Footer";


export default function Animais() {
  return (
    <div className={styles.back}>
      <Toolbar />


      <div className={styles.dispBox}>
        <h1 className={styles.dispBox__text}> Formulário para o Descarte: </h1>
      </div>
      <br></br>
      <br></br>


      <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="nome" className={styles.inputBox__label}>
                    {" "}
                    Nome:{" "}
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="sobrenome" className={styles.inputBox__label}>
                    {" "}
                    Sobrenome:{" "}
                  </label>
                  <input
                    id="sobrenome"
                    type="text"
                    name="sobrenome"
                    placeholder="Digite seu sobrenome"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cpf" className={styles.inputBox__label}>
                    {" "}
                    CPF:{" "}
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    placeholder="Digite seu cpf"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email:{""}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Telefone:{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    placeholder="(xx) xxxxx-xxxx"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade:{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="endereço" className={styles.inputBox__label}>
                    {" "}
                    Endereço:{" "}
                  </label>
                  <input
                    id="endereço"
                    type="text"
                    name="endereço"
                    placeholder="Digite sua Endereço"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="bairro" className={styles.inputBox__label}>
                    {" "}
                    Bairro:{" "}
                  </label>
                  <input
                    id="bairro"
                    type="text"
                    name="bairro"
                    placeholder="Digite sua Bairro"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Nº:{" "}
                  </label>
                  <input
                    id="number"
                    type="int"
                    name="number"
                    placeholder="Digite seu Número"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="Estado" className={styles.inputBox__label}>
                    {" "}
                    Estado:{" "}
                  </label>
                  <input
                    id="estado"
                    type="text"
                    name="estado"
                    placeholder="Digite seu Estado"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>


                <div>
                  </div></div>
              <div>

              <div className={styles.card}>
      <h2 className={styles.card_title}>O que você deseja?</h2>
      <div className={styles.button_container}>
        <button className={styles.action_button}>Descartar</button>
        <button className={styles.action_button}>Doar</button>
      </div>
      <div className={styles.checkbox}>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 1
          </label>
          <label>
            <input type="checkbox" /> Opção 2
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 3
          </label>
          <label>
            <input type="checkbox" /> Opção 4
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 5
          </label>
          <label>
            <input type="checkbox" /> Opção 6
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>
        <div className="column">
          <label>
            <input type="checkbox" /> Opção 7
          </label>
          <label>
            <input type="checkbox" /> Opção 8
          </label>
        </div>

      </div>
    </div>
      </div>
        <Footer/>
      </div>
  );
}
