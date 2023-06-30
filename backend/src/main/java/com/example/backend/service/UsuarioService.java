package com.example.backend.service;

import com.example.backend.models.Usuario;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public void nomeExistente(Usuario usuario) {

        Optional<Usuario> nomeExistente = usuarioRepository.findByNome(usuario.getNome());

        if (nomeExistente.isPresent() && !nomeExistente.get().equals(usuario)) {
            throw new IllegalArgumentException("O nome do produto já está em uso.");
        }
    }
    public Usuario a(String nome, Integer senha){
        return usuarioRepository.findByNomeAndSenha(nome,senha);
    }

    public Boolean usuarioCadastrado(String nome, Integer senha) {
        Usuario usuario = usuarioRepository.findByNomeAndSenha(nome, senha);
        return (usuario.getNome().equals(nome) && usuario.getSenha().equals(senha) && usuario.getLogado());
    }

}