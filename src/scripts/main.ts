const botoes = document.querySelectorAll<HTMLInputElement>(".botoes");
const tela = document.querySelector<HTMLInputElement>("#tela")


botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      if (!tela) return;
  
      if (botao.value === "=") {
        try {
          const resultado = eval(tela.value);
          tela.value = resultado;
        } catch (erro) {
          tela.value = "Erro";
        }
      } else if(botao.value == "C") {
        tela.value = ""
      }else{
        tela.value += botao.value;
      }
    });
  });