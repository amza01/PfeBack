interface Article {
    idArticle: number;
    code: string;
    libelle: string;
    quantiteArticle: number;
    prixUnitaire: number;
    tva: number;
    etat: string;
}

interface ArticleQuantite {
    article: Article;
    quantite: number;
}

interface Data {
    date: string;
    description: string;
    fournisseur: {
        id: number;
        email: string;
        numeroTel: string;
        addresse: string;
        rib: string;
    };
    articlesQuantites: { [key: string]: number };
    prixTotal: number;
}