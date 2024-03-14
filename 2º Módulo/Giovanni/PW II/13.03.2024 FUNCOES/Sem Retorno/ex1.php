<?php

    function calculosMalucos($primeiroValor, $segundoValor) {
        echo "Valores informados recebidos pelo nosso calculador! </br>";
        echo "Realizando calculos na ordem informada... </br>";
        echo "Calculando... </br> </br>";

        $valoresSomados = $primeiroValor + $segundoValor;
        echo "A soma dos valores é: $valoresSomados </br>";

        $valoresSubtraidos = $primeiroValor - $segundoValor;
        echo "A soma dos valores é: $valoresSubtraidos </br>";

        $valoresMultiplicados = $primeiroValor * $segundoValor;
        echo "A soma dos valores é: $valoresMultiplicados </br>";

        $valoresDivididos = $primeiroValor / $segundoValor;
        echo "A soma dos valores é: $valoresDivididos </br>";
    }

    calculosMalucos(1, 2);

?>