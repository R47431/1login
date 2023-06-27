package com.example.backend.controller;


import com.example.backend.models.Usuario;
import com.example.backend.service.UsuarioService;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ServerErrorException;

import java.util.HashMap;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class usuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public Iterable<Usuario> listaUsuario() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> casdastra(Usuario usuario) {
        try {
            usuarioService.validaCampoNome(usuario);

            Usuario usuarioCadastra = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioCadastra);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (ServerErrorException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Ocorreu um erro ao processar o cadastro.");
        }
    }

    @PutMapping
    public ResponseEntity<?> altera(Usuario usuario) {
        try {
            usuarioService.validaCampoNome(usuario);

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

    @GetMapping("/login")
    public ResponseEntity<?> acessoAoLogin(@RequestParam String nome, @RequestParam Integer senha,@RequestParam boolean logado) {
        try {
            Boolean usuarioCadastrado = usuarioService.usuarioCadastrado(nome, senha, logado);
            Optional<Usuario> obterUsuatio = usuarioRepository.findByNome(nome);

            if (usuarioCadastrado) {
                HashMap<String, Object> resposta = new HashMap<>();
                resposta.put("Usuario", obterUsuatio);
                resposta.put("resposta", "usuario esta Cadastrado");

                return ResponseEntity.ok(resposta);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nao Cadastrado");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("acesso negado");
        }
    }


    @DeleteMapping("/all")
    public void emCasoDeValoresNullOuSemPaciencia() {
        usuarioRepository.deleteAll();
    }
}



