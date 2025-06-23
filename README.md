# Requisitos

## Tipos de usuários:

```
{
  usuarios: [
    {
      "perfil": "COMUM",
      "nomeCompleto": "Leandro Zulli Silva",
      "cpfCnpj": "11111111111", Unique
      "email": "teste@teste.com.br", Unique
      "senha": "nomeCompleto:123456 = Basic bm9tZUNvbXBsZXRvOjEyMzQ1Ng==",
      "valorEmConta": 10
    },
    {
      "perfil": "LOJISTA",
      "nomeCompleto": "Vitória Giovana",
      "cpfCnpj": "22222222222", Unique
      "email": "teste2@teste.com.br", Unique
      "senha": "nomeCompleto:123456 = Basic bm9tZUNvbXBsZXRvOjEyMzQ1Ng=="
      "valorEmConta": 20
    }
  ]
}
```

## Regras de Envio / Transferência de dinheiro

[] - Usuários tem permissão de realizar transferência para Lojistas e entre outros usuários.
[] - Lojistas apenas recebem transferências
[] - O usuário não pode transferir com o saldo negativo

[] - Antes de finalizar a transferência, é necessário que consulte um serviço autorizador externo (Method - GET: https://util.devi.tools/api/v2/authorize)
[] - Em caso de erro ou incosistência no envio de uma transação de dinheiro, o valor transacionado deve retornar ao Usuário que o realizou
[] - É necessário que quem receber o pagamento, que seja notificado através desse mock (Method - POST: https://util.devi.tools/api/v1/notify)

## Estrutura de envio

POST /transfer
Content-Type: application/json

{
  "value": 100.0,
  "payer": 4,
  "payee": 15
}