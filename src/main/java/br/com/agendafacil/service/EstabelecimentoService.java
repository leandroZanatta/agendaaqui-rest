package br.com.agendafacil.service;

import java.util.List;

import br.com.agendafacil.dto.EstabelecimentoDTO;

public interface EstabelecimentoService {

	public abstract List<EstabelecimentoDTO> adquirirEstabelecimentos();

}
