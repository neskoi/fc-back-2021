# API Equipa os Guri 

API de contribuição que conecta doadores a alunos que necessitam de material escolar

## Rotas POST
---

### POST /usuario/cadastro
Requisição do cadastro geral do usuario
```json
{
  "email": "fulanodasilva@.com",
  "password": "suasenha"
} 
```
Resposta com sucesso status(200) 
```json
{
  "message": "Usuário cadastrado com sucesso!" 
}
```
Resposta com erro status(400)
```json
{
  "message": "Não foi possível cadastrar o usuário: {Detalhes do erro}"
}
```
--------
-------



### POST /usuario/login
Requisição de login do usuário
```json
{
  "email": "fulanodasilva@.com",
  "password": "suasenha"
} 
```
Resposta com Sucesso status(200)
```json
{
  "data": {
    "email": "fulanodasilva@.com",
    "token": <AUTOINCREMENT>
  }
}
```
Resposta com erro status(400)
```json
{
  "message": "Senha Incorreta!"

}
```
Resposta com erro status(400)

```json
{
  "message": "Usuário não encontrado"

}
```
Resposta com erro status(503)
```json
{

  "message": "Não foi possível realizar o Login, tente novamente mais tarde!"

}
```

----
-----------
### POST /pessoa/cadastro
Recurso de cadastro da pessoa receptora
```json
{
  "fk_estado": int,
  "fk_banco": int,
  "fk_usuario": int,
  "nome": "Fulano Silva",
  "cpf": "50530281333",
  "rg": "999999999",
  "agencia": "0Re001",
  "conta": "000062500000"      
}
```

Resposta com Sucesso status(200)
```json
{
    "message": "Usuário cadastrado com sucesso!"
}
```
Resposta com erro status(400)
```json
{
    "message": "Não foi possível cadastrar o usuário:" 
}
```
---
---
## Rotas GET

### GET /pessoa/buscar
Resposta da busca dos usuarios cadastrados retornando os dados em arrays, no seguinte formato:
```json
[{
    "data": [
    { "pk_pessoa": int,
      "fk_estado": int,
      "fk_banco": int,
      "fk_usuario": int,
      "nome": "Fulano Silva",
      "cpf": "50530281333",
      "rg": int,
      "agencia": int,
      "conta": int
    },
    { 
        "pk_pessoa": int,
      "fk_estado": int,
      "fk_banco": int,
      "fk_usuario": int,
      "nome": "Ciclano da Silva",
      "cpf": "55500009999",
      "rg": int,
      "agencia": int,
      "conta": int
    }]
```
----