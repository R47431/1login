package com.example.backend.controller;


import com.example.backend.models.Usuario;
import com.example.backend.service.UsuarioService;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ServerErrorException;

import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class UsuarioController {

    @Autowired
    private final UsuarioRepository usuarioRepository;

    @Autowired
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioRepository usuarioRepository, UsuarioService usuarioService) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public Iterable<Usuario> listaUsuario() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> casdastra(@RequestBody Usuario usuario) {
        try {
            usuarioService.nomeExistente(usuario);

            usuario.setLogado(true);
            Usuario usuarioCadastra = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioCadastra);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (ServerErrorException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Ocorreu um erro ao processar o cadastro.");
        }
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> altera(@RequestBody Usuario usuario) {
        try {
            usuarioService.nomeExistente(usuario);

            usuario.setLogado(true);
            Usuario usuarioCadastra = usuarioRepository.save(usuario);

            return ResponseEntity.ok(usuarioCadastra);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (ServerErrorException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Ocorreu um erro ao processar o cadastro.");
        }
    }

    @DeleteMapping(path = "/{id}")
    public void deleta(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }


    @PostMapping("/login")
    public ResponseEntity<?> acessoAoLogin(@RequestBody Usuario usuario) {
        try {
            Usuario usuarioExistente =usuarioService.validarUsuarioExistente(usuario);
            return ResponseEntity.ok().body(usuarioExistente);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("acesso negado");
        }
    }

    @DeleteMapping("/all")
    public void emCasoDeValoresNullOuSemPaciencia() {
        usuarioRepository.deleteAll();
    }
}