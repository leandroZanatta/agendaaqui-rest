package br.com.agendafacil.api;

import static br.com.agendafacil.constants.EndpointConstant.PATH_ESTABELECIMENTO;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agendafacil.dto.EstabelecimentoDTO;
import br.com.agendafacil.service.EstabelecimentoService;

@CrossOrigin
@RestController
@RequestMapping(value = PATH_ESTABELECIMENTO, consumes = { APPLICATION_JSON_VALUE, }, produces = {
		APPLICATION_JSON_VALUE })
public class EstabelecimentoApi {

	@Autowired
	private EstabelecimentoService estabelecimentoService;

	@GetMapping(consumes = { APPLICATION_JSON_VALUE, }, produces = { APPLICATION_JSON_VALUE })
	public ResponseEntity<List<EstabelecimentoDTO>> adquirirEstabelecimentos() {

		return ResponseEntity.ok(estabelecimentoService.adquirirEstabelecimentos());
	}

}
