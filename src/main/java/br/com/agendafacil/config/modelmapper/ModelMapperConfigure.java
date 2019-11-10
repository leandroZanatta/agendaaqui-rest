package br.com.agendafacil.config.modelmapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration.AccessLevel;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

@Component
public class ModelMapperConfigure implements ModelMapperConfigurer {

	@Override
	public void configure(ModelMapper modelMapper) {
		modelMapper.getConfiguration().setMethodAccessLevel(AccessLevel.PUBLIC).setFieldMatchingEnabled(Boolean.TRUE)
				.setMatchingStrategy(MatchingStrategies.STANDARD);
	}
}
