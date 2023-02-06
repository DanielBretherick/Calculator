function criaCalculadora(){
  return{
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    
    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    cliqueBotoes(){
      document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      }.bind(this));
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

    apagaUm(){
      this.display.value=this.display.value.slice(0,-1);
    },

    realizaConta(){
      let conta = this.display.value;
      try{
        conta = eval(conta);
        if(!conta){
          alert('Conta invalida');
          return;
        }

        this.display.value = String(conta);
      } catch(e){
        alert('Conta Inválida');
        return;
      }
    },

    clearDisplay(){
      this.display.value = '';
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', e =>{
        if(e.keyCode===13){
          this.realizaConta();
        }
      });
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();