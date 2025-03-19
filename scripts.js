const USD = 5.68;
const EUR = 6.1881;
const GBP = 7.354;

// Selecionando os elementos 
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    // Removendo os caracteres não numéricos (validando o input com regex)
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//capturando o evento de submit(enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD": ConvertCurrency(amount.value, USD, "USD");
            break;

        case "EUR": ConvertCurrency(amount.value, EUR, "€");
            break;

        case "GBP": ConvertCurrency(amount.value, GBP, "£");
            break;
    }
}

//Função para converter moedas
function ConvertCurrency(amount, price, symbol) {
    try {
        //atualizando o valor convertido
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        //calculando o valor
        let total = amount * price;

        //verifica se o resultado não é um número
        if (isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.");
        }

        //formatando o valor total
        total = formatCurrencyBRL(total).replace("R$", "");

        //exibindo o resultado
        result.textContent = `${total} reais`;

        //Aplica a classe que exibe o resultado
        footer.classList.add("show-result");

    } catch (error) {
        //remove a classe do footer caso ocorra um erro (removendo ele)
        // footer.classList.remove("show-result");

        console.log(error);
        alert("Ocorreu um erro ao realizar a conversão")
    }
}

function formatCurrencyBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}





