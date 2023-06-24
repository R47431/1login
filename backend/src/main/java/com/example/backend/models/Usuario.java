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
    private Boolean acesso;


    public Usuario() {
    }

    public Usuario(String nome, int senha, boolean acesso) {
        this.nome = nome;
        this.senha = senha;
        this.acesso = acesso;
    }

}