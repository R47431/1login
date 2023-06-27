package com.example.backend.service;

import com.example.backend.models.Usuario;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void validaCampoNome(@NotNull Usuario usuario) {

        Optional<Usuario> nomeExistente = usuarioRepository.findByNome(usuario.getNome());

        if (nomeExistente.isPresent() && !nomeExistente.get().equals(usuario)) {
            throw new IllegalArgumentException("O nome do produto já está em uso.");
        }
    }

    public Boolean usuarioCadastrado(String nome, Integer senha,boolean logado) {
        Usuario usuario = usuarioRepository.findByNomeAndSenhaAndLogado(nome, senha,logado);
        return (usuario.getNome().equals(nome) && usuario.getSenha().equals(senha)&& usuario.getLogado());
    }
    //TODO
    // fazer um metodo que mude o estado logado para true fazendo o usuario pode acessa.
}