# ese-order
Repository for the Service-Oriented Software Engineering course

## Comandos Docker úteis

| Comando                     | O que faz                                                   |
|----------------------------|-------------------------------------------------------------|
| `docker-compose up`        | Sobe os containers (sem rebuild).                          |
| `docker-compose up -d`     | Sobe os containers em segundo plano.                       |
| `docker-compose down`      | Derruba os containers e a rede criada.                     |
| `docker-compose down -v`   | Derruba containers e apaga volumes (⚠️ dados somem!).       |
| `docker-compose build`     | Só faz o rebuild das imagens, sem subir.                   |
| `docker-compose ps`        | Mostra o status dos containers da sua stack.               |
| `docker-compose logs -f`   | Acompanha os logs de todos os serviços em tempo real.      |
