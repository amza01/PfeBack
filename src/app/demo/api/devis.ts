export interface Devis {
    id: string;
    code: string;
    date: Date;
    client: string;
    prixNet: number;
    prixHtNet: number;
    status: string;
    articlesQuantites: ArticleQuantite[];
  }
  export interface ArticleQuantite {
    article: any;
    quantite: number;
  }
  