package br.com.agendafacil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication(scanBasePackages = { "br.com.agendafacil", "br.com.agendafacil.api" })
public class AgendafacilApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendafacilApplication.class, args);
	}

}
