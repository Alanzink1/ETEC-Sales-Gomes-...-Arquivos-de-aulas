<?php

    $variavel_booleana = true;

    if($variavel_booleana) {
        $primeiro_numero = 15;
        $segundo_numero = 37;
        $terceiro_numero = 88;
        $quarto_numero = 1;
        $quinto_numero = 9;
        
        $soma_dos_numeros = $primeiro_numero + $segundo_numero + $terceiro_numero + $quarto_numero + $quinto_numero;

        echo "A soma de todos os números é $soma_dos_numeros";
    } else {
        $primeiro_numero = 15;
        $segundo_numero = 37;
        $terceiro_numero = 88;
        $quarto_numero = 1;
        $quinto_numero = 9;
        
        $soma_dos_numeros = $primeiro_numero + $segundo_numero + $terceiro_numero + $quarto_numero + $quinto_numero;
        $media_dos_numeros = $soma_dos_numeros / 5;

        echo "A média de todos os números é $media_dos_numeros";
    }

?>