package br.com.agendafacil.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.agendafacil.dto.EstabelecimentoDTO;
import br.com.agendafacil.repository.EstabelecimentoRepository;
import br.com.agendafacil.service.EstabelecimentoService;

@Service
public class EstabelecimentoServiceImpl implements EstabelecimentoService {

	@Autowired
	private EstabelecimentoRepository estabelecimentoRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<EstabelecimentoDTO> adquirirEstabelecimentos() {

		List<EstabelecimentoDTO> retorno = new ArrayList<>();

		estabelecimentoRepository.findAll()
				.forEach(estabelecimento -> retorno.add(modelMapper.map(estabelecimento, EstabelecimentoDTO.class)));

		return retorno;
	}

}
