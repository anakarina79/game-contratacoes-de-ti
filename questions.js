const questions = [
 {
  enunciado: "A Lei nº 14.133/2021 aplica-se às contratações de soluções de Tecnologia da Informação e Comunicação realizadas pela administração pública.",
  correta: "C",
  tema: "Abrangência da Lei 14.133/2021",
  justificativa: "A Lei nº 14.133/2021 é a norma geral de licitações e contratos e alcança também as contratações de TIC. Pense nela como o manual único de compras do setor público, independentemente do objeto ser físico ou tecnológico."
},
{
  enunciado: "As contratações de TI podem ser realizadas sem planejamento prévio, desde que haja urgência devidamente justificada.",
  correta: "E",
  tema: "Planejamento da Contratação de TI",
  justificativa: "Mesmo em situações urgentes, o planejamento é exigido. É como sair para viajar sem rota definida: a chance de erro e desperdício aumenta muito."
},
{
  enunciado: "O Estudo Técnico Preliminar é instrumento obrigatório para caracterizar o interesse público e a melhor solução para a contratação.",
  correta: "C",
  tema: "Estudo Técnico Preliminar (ETP)",
  justificativa: "O ETP serve para justificar a necessidade e a escolha da solução. Funciona como um diagnóstico médico antes do tratamento."
},
{
  enunciado: "O Estudo Técnico Preliminar pode ser dispensado quando a contratação envolver soluções de TIC simples e padronizadas.",
  correta: "C",
  tema: "Estudo Técnico Preliminar (ETP)",
  justificativa: "A legislação admite exceções justificadas. É como pular exames complexos quando o problema já é conhecido e simples."
},
{
  enunciado: "O Termo de Referência é documento que consolida os elementos necessários para a contratação.",
  correta: "C",
  tema: "Termo de Referência",
  justificativa: "O Termo de Referência funciona como o projeto detalhado da contratação. É o roteiro que orienta fornecedores e gestores."
},
{
  enunciado: "Nas contratações de TI, o Termo de Referência deve conter a descrição detalhada da solução, dos requisitos e dos critérios de medição.",
  correta: "C",
  tema: "Termo de Referência",
  justificativa: "Esses elementos permitem controle e fiscalização. É como um contrato de serviço que define exatamente o que será entregue."
},
{
  enunciado: "A definição da solução de TI deve ser baseada exclusivamente na tecnologia mais moderna disponível no mercado.",
  correta: "E",
  tema: "Planejamento da Contratação de TI",
  justificativa: "A escolha deve considerar custo-benefício e necessidade do órgão, não apenas modernidade. Nem sempre o mais novo é o mais adequado."
},
{
  enunciado: "O planejamento da contratação de TI deve estar alinhado ao planejamento estratégico do órgão.",
  correta: "C",
  tema: "Planejamento da Contratação de TI",
  justificativa: "A contratação precisa apoiar os objetivos institucionais. É como comprar ferramentas que realmente ajudem a executar o plano da empresa."
},
{
  enunciado: "A contratação de soluções de TI deve priorizar, sempre que possível, soluções padronizadas e reutilizáveis.",
  correta: "C",
 tema: "Contratações de TI",
  justificativa: "A padronização reduz custos e riscos. É como usar peças compatíveis em vez de criar tudo do zero."
},
{
  enunciado: "A análise de riscos é etapa facultativa no planejamento das contratações de TI.",
  correta: "E",
  tema: "Gestão de Riscos em Contratações de TI",
  justificativa: "A análise de riscos é obrigatória. Ignorar riscos é como dirigir sem considerar possíveis acidentes."
},
{
  enunciado: "A gestão de riscos na contratação de TI deve identificar, analisar e tratar eventos que possam comprometer os objetivos da contratação.",
  correta: "C",
  tema: "Gestão de Riscos em Contratações de TI",
  justificativa: "Essa gestão antecipa problemas e define respostas. Funciona como um plano de contingência."
},
{
  enunciado: "O modelo de contratação por resultados é admitido nas contratações de TI.",
  correta: "C",
  tema: "Modelos de Contratação de TI",
  justificativa: "Nesse modelo, o foco é o resultado entregue, não o esforço. É como pagar pelo produto final, não pelas horas trabalhadas."
},
{
  enunciado: "Nas contratações de TI, é vedada a definição de métricas de desempenho.",
  correta: "E",
  tema: "Modelos de Contratação de TI",
  justificativa: "As métricas são essenciais para medir qualidade e desempenho. Sem elas, não há como avaliar o serviço."
},
{
  enunciado: "O regime de execução indireta é aplicável às contratações de serviços de TI.",
  correta: "C",
  tema: "Execução Contratual de TI",
  justificativa: "Nesse regime, o particular executa o objeto contratado. É como terceirizar uma atividade especializada."
},
{
  enunciado: "A fiscalização do contrato de TI é responsabilidade exclusiva do fornecedor.",
  correta: "E",
  tema: "Fiscalização de Contratos de TI",
  justificativa: "A fiscalização cabe à Administração. É como conferir a entrega de um pedido antes de aceitá-lo."
},
{
  enunciado: "A Lei nº 14.133/2021 prevê a segregação de funções nas contratações de TI.",
  correta: "C",
  tema: "Governança nas Contratações",
  justificativa: "A segregação evita conflitos de interesse. É como separar quem pede, quem aprova e quem fiscaliza."
},
{
  enunciado: "O recebimento do objeto em contratos de TI pode ser provisório e definitivo.",
  correta: "C",
  tema: "Execução Contratual de TI",
  justificativa: "O recebimento provisório permite testes e validações antes da aceitação final."
},
{
  enunciado: "O recebimento definitivo do objeto de TI dispensa a verificação do atendimento aos requisitos contratuais.",
  correta: "E",
  tema: "Execução Contratual de TI",
  justificativa: "O recebimento definitivo só ocorre após a verificação completa. É como assinar a entrega apenas depois de conferir tudo."
},
{
  enunciado: "A contratação de soluções de TI deve prever níveis de serviço mensuráveis.",
  correta: "C",
  tema: "Acordo de Nível de Serviço (ANS)",
  justificativa: "Os níveis de serviço permitem controle objetivo. Funcionam como metas claras de desempenho."
},
{
  enunciado: "O Acordo de Nível de Serviço define apenas obrigações do contratado, sem prever penalidades.",
  correta: "E",
  tema: "Acordo de Nível de Serviço (ANS)",
  justificativa: "O ANS pode prever penalidades em caso de descumprimento. É como regras com consequências."
},
{
  enunciado: "A prorrogação dos contratos de TI depende de vantajosidade para a Administração.",
  correta: "C",
  tema: "Contratos Administrativos de TI",
  justificativa: "A prorrogação só é válida se for mais vantajosa que uma nova contratação. É avaliar se vale continuar ou trocar."
},
{
  enunciado: "A Lei nº 14.133/2021 permite a alteração unilateral dos contratos administrativos de TI em determinadas hipóteses.",
  correta: "C",
  tema: "Contratos Administrativos de TI",
  justificativa: "A Administração pode alterar o contrato dentro dos limites legais. É ajustar o caminho sem mudar o destino."
},
{
  enunciado: "O reequilíbrio econômico-financeiro é vedado nos contratos de TI.",
  correta: "E",
  tema: "Equilíbrio Econômico-Financeiro",
  justificativa: "O reequilíbrio é garantido quando fatos imprevisíveis afetam o contrato. É manter a balança justa."
},
{
  enunciado: "A rescisão contratual pode ocorrer por interesse público devidamente motivado.",
  correta: "C",
  tema: "Extinção dos Contratos de TI",
  justificativa: "A Administração pode rescindir contratos por interesse público. É como encerrar um acordo que deixou de fazer sentido."
},
{
  enunciado: "A gestão e a fiscalização dos contratos de TI são etapas distintas, mas complementares.",
  correta: "C",
  tema: "Gestão e Fiscalização de Contratos de TI",
  justificativa: "A gestão acompanha o contrato como um todo, enquanto a fiscalização verifica a execução. É trabalho em dupla."
},

];
