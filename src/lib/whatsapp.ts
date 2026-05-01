export const getWhatsAppLink = (path: string = "/") => {
  const baseUrl = "https://wa.me/5527997979219?text=";
  const messages: Record<string, string> = {
    "/": "Olá, tudo bem? Estive no site de vocês e achei a proposta interessante. Gostaria de entender melhor como funcionam os serviços e como vocês podem me ajudar.",
    "/abertura-empresa": "Olá! Gostaria de informações sobre abertura de empresa. Podem me ajudar?",
    "/regularizacao-fiscal": "Olá! Gostaria de ajuda com a regularização fiscal da minha empresa.",
    "/planejamento-tributario": "Olá! Tenho interesse em realizar um planejamento tributário para pagar menos impostos.",
    "/enquadramento-tributario": "Olá! Gostaria de uma consultoria sobre enquadramento tributário para meu negócio.",
    "/alteracoes-societarias": "Olá! Preciso realizar alterações societárias no meu contrato social.",
    "/trocar-contador": "Olá! Estou insatisfeito com minha contabilidade atual e gostaria de migrar para a JLS."
  };

  const message = messages[path] || messages["/"];
  return baseUrl + encodeURIComponent(message);
};
