import * as analisesRepository from "../repository/analisesRepository.js";


export async function getAnalises30dias() {
  const valor = await analisesRepository.getAnalises30dias();
  if (!valor) throw new Error("Não há vendas nos ultimos 30 dias");

  return valor;
}

export async function getAnalisesGerais() {
  const valor = await analisesRepository.getAnalisesGerais();
  if (!valor) throw new Error("Não há vendas nos ultimos 30 dias");

  return valor;
}
                                                //string | string[]
export async function getAnalisesPeriodo(dataInicio: string, dataFim: string) {
  if(!dataInicio || !dataFim) throw new Error("Informações faltando")
  if(dataInicio > dataFim) throw new Error("DataInicio não pode ser maior que DataFim") 

  const valor = await analisesRepository.getAnalisesPeriodo(dataInicio, dataFim);
  if (!valor) throw new Error("Não há vendas entre essas datas");
        
  return valor;
}
