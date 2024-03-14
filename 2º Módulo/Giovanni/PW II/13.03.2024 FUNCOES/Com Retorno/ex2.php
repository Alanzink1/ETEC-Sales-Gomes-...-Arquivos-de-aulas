<?php

    function numeroParaDiaSemanal($numeroDaSemana) {
        if ($numeroDaSemana == 1) {
            return "Domingo";
        } else if ($numeroDaSemana == 2) {
            return "Segunda-feira!";
        } else if ($numeroDaSemana == 3) {
            return "Terça-feira";
        } else if ($numeroDaSemana == 4) {
            return "Quarta-feira";
        } else if ($numeroDaSemana == 5) {
            return "Quinta-feira";
        } else if ($numeroDaSemana == 6) {
            return "Sexta-feira";
        } else if ($numeroDaSemana == 7) {
            return "Sábado";
        } else {
            return "Inválido!";
        }
    }

    echo "Eita, preula! </br>";
    echo "Chegamos na desanimada ". numeroParaDiaSemanal(2) ."! O dia de trabalho! :<";

?>