package com.example.backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer senha;
    private Boolean logado;

    public Usuario() {
    }

    public Usuario(String nome, Integer senha, Boolean logado) {
        this.nome = nome;
        this.senha = senha;
        this.logado = logado;
    }
}