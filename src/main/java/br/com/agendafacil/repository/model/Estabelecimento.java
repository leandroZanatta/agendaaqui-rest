package br.com.agendafacil.repository.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_estabelecimento")
public class Estabelecimento {

	@Id
	@Column(name = "id_estabelecimento")
	private Long id;

	@Column(name = "tx_descricao")
	private String descricao;

}
