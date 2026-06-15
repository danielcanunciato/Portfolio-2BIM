**1) O que é uma pipeline em um processo de desenvolvimento de software?**
A pipeline durante o processo de desenvolvimento de software é  uma sequência de etapas automáticas usadas para testar, validar, construir e entregar um software, ajudando a garantir que o sistema funcione corretamente antes de ser disponibilizado aos usuários.

**2) Qual é a diferença entre polling e webhook?**
Durante o polling, o sistema verifica repetidamente se houve alguma atualização. Já no webhook, a notificação é enviada automaticamente assim que um evento acontece, tornando a comunicação mais rápida.

**3) Quais são as três partes principais de um webhook?**
As três partes principais são:
 - Evento   :	que dispara a ação;
 - Endpoint :	que recebe os dados;
 - Payload  :	Que contém as informações enviadas na mensagem.

**4) Por que é importante usar um secret e uma assinatura HMAC em webhooks?**
Ambas ajudam a garantir a segurança da comunicação, já que com o secret e o HMAC é possível verificar se a mensagem veio de uma fonte confiável e se não foi alterada durante o envio.

**5) Por que uma mensagem como "ERRO! Build quebrado" é menos útil do que uma mensagem que informa serviço, autor, commit e link dos logs?**
Porque ela não fornece informações suficientes para identificar a causa do problema. Uma mensagem detalhada ajuda a equipe a localizar o erro mais rapidamente e tomar as ações necessárias para corrigi-lo.