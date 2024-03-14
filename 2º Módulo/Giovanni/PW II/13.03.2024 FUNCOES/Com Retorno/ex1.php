<?php

    function numeroParaMes($numeroDoMes) {
        if ($numeroDoMes == 1) {
            return "Janeiro!";
        } else if ($numeroDoMes == 2) {
            return "Fevereiro";
        } else if ($numeroDoMes == 3) {
            return "Março";
        } else if ($numeroDoMes == 4) {
            return "Abril";
        } else if ($numeroDoMes == 5) {
            return "Maio";
        } else if ($numeroDoMes == 6) {
            return "Junho";
        } else if ($numeroDoMes == 7) {
            return "Julho";
        } else if ($numeroDoMes == 8) {
            return "Agosto";
        } else if ($numeroDoMes == 9) {
            return "Setembro";
        } else if ($numeroDoMes == 10) {
            return "Outubro";
        } else if ($numeroDoMes == 11) {
            return "Novembro";
        } else if ($numeroDoMes == 12) {
            return "Dezembro";
        } else {
            return "Inválido!";
        }
    }

    $mesAniversarioFlavia = 9;
    echo "Parábens, Flávia! </br>";
    echo "Estamos em ". numeroParaMes($mesAniversarioFlavia) ."! O mês do seu aniversário! :D";

?>
