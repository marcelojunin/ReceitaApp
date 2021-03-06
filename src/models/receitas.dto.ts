import { AvaliacaoDTO } from './avaliacao.dto';
import { ItensDTO } from './itens.dto';
export interface ReceitasDTO {
    id: string;
    descricao: string;
    titulo: string;
    itens: ItensDTO[];
    avaliacao: AvaliacaoDTO[];
}
