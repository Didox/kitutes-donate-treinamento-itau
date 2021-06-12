# Build imagem docker
```shell
docker build . -t didox/validar_cpf_turma2_afya
```


# run imagem docker
``` shell
docker run -p 80:3000 --name validar_cpf_turma2_afya -d didox/validar_cpf_turma2_afya
```

# listar containers rodando
``` shell
docker ps
```

# parar container
``` shell
docker stop validar_cpf_turma2_afya
```

# Rodar container
``` shell
docker start validar_cpf_turma2_afya
```

# logar no docker
``` shell
docker login
```

# publicar imagem
``` shell
docker push didox/validar_cpf_turma2_afya
```

# baixar imagem
``` shell
docker pull didox/validar_cpf_turma2_afya
```