package com.example.backend.service;

import com.example.backend.models.Usuario;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository usuarioRepository;

    public void validaCampoNome(Usuario usuario) {

        Optional<Usuario> nomeExistente = usuarioRepository.findByNome(usuario.getNome());

        if (nomeExistente.isPresent() && !nomeExistente.get().equals(usuario)) {
            throw new IllegalArgumentException("O nome do produto já está em uso.");
        }
    }

    public Boolean validarCredenciais(String nome, Integer senha) {
        Usuario usuario = usuarioRepository.findByNomeAndSenha(nome, senha);
        return (usuario == null || (!usuario.getNome().equals(nome) && !usuario.getSenha().equals(senha)));
    }
}