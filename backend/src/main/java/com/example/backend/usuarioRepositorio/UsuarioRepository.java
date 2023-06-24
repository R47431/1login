package com.example.backend.usuarioRepositorio;


import com.example.backend.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByNomeAndSenha (String nome, Integer senha);

    Optional<Usuario> findByNome (String nome);
}