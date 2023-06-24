package com.example.backend.controller;



import com.example.backend.models.Usuario;
import com.example.backend.service.UsuarioService;
import com.example.backend.usuarioRepositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class usuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public Iterable<Usuario> listaUsuario (){
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> casdastra (Usuario usuario) {
        try {
            usuarioService.validaCampoNome(usuario);

            Usuario usuarioCadastra = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioCadastra);
        }catch (IllegalArgumentException e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Ocorreu um erro ao processar o cadastro.");
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping
    public Usuario altera (Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping(path = "/{id}")
    public void deleta (@PathVariable Long id) {
       usuarioRepository.deleteById(id);
    }

    @GetMapping("/acesso")
    public ResponseEntity<?> acessoAoLogin (@RequestParam String nome,@RequestParam Integer senha) {
        try {
            Usuario usuario = usuarioRepository.findByNomeAndSenha(nome, senha);

            if (usuario.getNome().equals(nome) && usuario.getSenha().equals(senha)) {
                return ResponseEntity.ok("ok");
            }
            return null;
        }catch (Exception e){
            return ResponseEntity.badRequest().body("erro a procura");
        }
    }

















    @DeleteMapping("/all")
    public void emCasoDeValoresNullOuSemPaciencia (){
        usuarioRepository.deleteAll();
    }
}




