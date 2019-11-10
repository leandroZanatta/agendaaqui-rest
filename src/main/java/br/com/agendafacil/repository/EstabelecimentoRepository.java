package br.com.agendafacil.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.agendafacil.repository.model.Estabelecimento;

@Repository
public interface EstabelecimentoRepository extends PagingAndSortingRepository<Estabelecimento, Long> {

}
