const products = [
    {
        id: 1,
        title: 'Maçã Gala',
        price: 'R$ 7.50',
        image: 'https://img.fazendinha.me/production/produtor/462/produtos/3838/ceccon-organicos-maca-gala-importada-organico-ceccon-kg-1646428115.jpg',
        description: 'Maçãs frescas e doces, ideais para sucos e lanches.\nQuantidade por compra: 1 kg',
        producer: 'Rodinei Ramos',
        local: 'Pomar da Montanha',
        category: 'Frutas'
    },
    {
        id: 2,
        title: 'Banana Nanica',
        price: 'R$ 5.00',
        image: 'https://ceagesp.gov.br/wp-content/uploads/2017/06/Banana-Nanica-28.9.2011-645-600x400.jpg',
        description: 'Bananas maduras, saborosas e ricas em potássio.\nQuantidade por compra: 1 kg',
        producer: 'Maria Santos',
        local: 'Sítio Frutífero',
        category: 'Frutas'
    },
    {
        id: 3,
        title: 'Alface Crespa',
        price: 'R$ 3.00',
        image: 'https://i.pinimg.com/736x/0c/aa/e5/0caae5377bc609e935f1db156f265510.jpg',
        description: 'Folhas frescas e crocantes, cultivadas sem agrotóxicos.\nQuantidade por compra: 1 maço',
        category: 'Verduras',
        producer: 'Carlos Oliveira',
        local: 'Horta Orgânica'
        
    },
    {
        id: 4,
        title: 'Tomate Italiano',
        price: 'R$ 8.00',
        image: 'https://www.agrolink.com.br/upload/imagens-resizes/9e5b1d789a8e4655a3aeeb5508c912ca_858x483.jpg',
        description: 'Tomates maduros e suculentos, ideais para molhos.\nQuantidade por compra: 1 kg',
        category: 'Verduras',
        producer: 'João Silva',
        local: 'Fazenda Silva'
    },
    {
        id: 5,
        title: 'Mel Puro de Abelha',
        price: 'R$ 25.00',
        image: 'https://s2-g1.glbimg.com/9FFio_yR7MTXS_P_lYc7jAM-_Fc=/0x164:2667x3433/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/n/L/Vv7CeITvy3GaAxq148yA/art-rachen-asj5dfw8uaw-unsplash-mel.jpg',
        description: 'Mel natural, sem aditivos, colhido de forma artesanal.\nQuantidade por compra: 500 g',
        category: 'category.homemadeProduct',
        producer: 'Lucia Ferreira',
        local: 'Horta da Vovó'
    },
    {
        id: 6,
        title: 'Queijo Minas Frescal',
        price: 'R$ 30.00',
        image: 'https://laticiniosholandes.com.br/wp-content/uploads/2021/09/4-1024x576.jpg',
        description: 'Queijo leve e fresco, ótimo para café da manhã.\nQuantidade por compra: 500 g',
        category: 'category.homemadeProduct',
        producer: 'Lucia Ferreira',
        local: 'Horta da Vovó'
    },
    {
        id: 7,
        title: 'Laranja Pera',
        price: 'R$ 6.00',
        image: 'https://cdn.awsli.com.br/600x450/1302/1302937/produto/51139540/ffbde3fae3.jpg',
        description: 'Laranjas doces, perfeitas para suco natural.\nQuantidade por compra: 1 kg',
        category: 'Frutas',
        producer: 'Maria Santos',
        local: 'Sítio Frutífero'
    },
    {
        id: 8,
        title: 'Cenoura',
        price: 'R$ 5.50',
        image: 'https://blog.plantei.com.br/wp-content/uploads/2022/02/como-plantar-cenoura-na-horta.jpg',
        description: 'Cenouras crocantes, ideais para saladas e cozidos.\nQuantidade por compra: 1 kg',
        category: 'Verduras',
        producer: 'Carlos Oliveira',
        local: 'Horta Orgânica'
    },
    {
        id: 9,
        title: 'Cebolinha',
        price: 'R$ 2.50',
        image: 'https://jpimg.com.br/uploads/2025/06/5-beneficios-da-cebolinha-verde-para-a-saude-e-como-inclui-la-na-dieta.jpg',
        description: 'Tempera e decora pratos com sabor e frescor.\nQuantidade por compra: 1 maço',
        category: 'Erva',
        producer: 'Ana Costa',
        local: 'Fazenda Verde'
    },
    {
        id: 10,
        title: 'Uva Niágara',
        price: 'R$ 10.00',
        image: 'https://abastecimento.jundiai.sp.gov.br/wp-content/uploads/2020/07/Tela-22.1.jpg',
        description: 'Uvas doces, ideais para consumo direto.\nQuantidade por compra: 1 kg',
        category: 'Frutas',
        producer: 'Rodinei Ramos',
        local: 'Pomar da Montanha'
    },
    {
        id: 11,
        title: 'Pimentão Verde',
        price: 'R$ 10.00',
        image: 'https://organicosinbox.com.br/wp-content/uploads/2020/11/pimentao-verde-organico.jpg',
        description: 'Pimentões frescos, ideais para refogados e recheios.\nQuantidade por compra: 1 kg',
        category: 'Verduras',
        producer: 'João Silva',
        local: 'Fazenda Silva'
    },
    {
        id: 12,
        title: 'Morango',
        price: 'R$ 12.00',
        image: 'https://pescacerta.pt/wp-content/uploads/2020/08/morangos.jpg',
        description: 'Morangos doces e suculentos, cultivados em clima frio.\nQuantidade por compra: 250 g',
        category: 'Frutas',
        producer: 'Rodinei Ramos',
        local: 'Pomar da Montanha'
    },
    {
        id: 13,
        title: 'Abacaxi Pérola',
        price: 'R$ 9.00',
        image: 'https://img.fazendinha.me/production/produtor/462/produtos/3788/ceccon-organicos-abacaxi-perola-organico-ceccon-un-1646423628.jpg',
        description: 'Uvas doces, ideais para consumo direto.\nQuantidade por compra: 1 unidade',
        category: 'Frutas',
        producer: 'Maria Santos',
        local: 'Sítio Frutífero'
    },
    {
        id: 14,
        title: 'Abobrinha Italiana',
        price: 'R$ 7.00',
        image: 'https://ceagesp.gov.br/wp-content/uploads/2015/08/abobrinha_italiana-600x469.jpg',
        description: 'Legume leve, ideal para grelhar ou refogar.\nQuantidade por compra: 1 kg',
        category: 'Legumes',
        producer: 'Carlos Oliveira',
        local: 'Horta Orgânica'
    },
    {
        id: 15,
        title: 'Salsinha',
        price: 'R$ 2.50',
        image: 'https://saborethos.com.br/wp-content/uploads/2020/05/salsa-salsinha-tempero-0419-1400x800-1-768x439.jpg',
        description: 'Tempera pratos com aroma fresco e sabor marcante.\nQuantidade por compra: 1 maço',
        category: 'Erva',
        producer: 'Ana Costa',
        local: 'Fazenda Verde'
    },
    {
        id: 16,
        title: 'Batata Inglesa',
        price: 'R$ 6.50',
        image: 'https://www.coisasdaroca.com/wp-content/uploads/2021/07/Batata-inglesa.jpg',
        description: 'Batatas ideais para fritar, assar ou cozinhar.\nQuantidade por compra: 1 kg',
        category: 'Legume',
        producer: 'João Silva',
        local: 'Fazenda Silva'
    },
    {
        id: 17,
        title: 'Melancia',
        price: 'R$ 12.00',
        image: 'https://image.tuasaude.com/media/article/cp/bf/beneficios-da-melancia_21634.jpg',
        description: 'Fruta refrescante e doce, perfeita para dias quentes.\nQuantidade por compra: 1 unidade',
        category: 'Frutas',
        producer: 'Maria Santos',
        local: 'Sítio Frutífero'
    },
    {
        id: 18,
        title: 'Espinafre',
        price: 'R$ 4.00',
        image: 'https://www.infoescola.com/wp-content/uploads/2010/02/espinafre_224442694.jpg',
        description: 'Rico em ferro, ótimo para refogados e omeletes.\nQuantidade por compra: 1 maço',
        category: 'Verduras',
        producer: 'Carlos Oliveira',
        local: 'Horta Orgânica'
    },
    {
        id: 19,
        title: 'Manjericão',
        price: 'R$ 3.00',
        image: 'https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg',
        description: 'Erva aromática ideal para massas e molhos.\nQuantidade por compra: 1 maço',
        category: 'Erva',
        producer: 'Rodinei Ramos',
        local: 'Pomar da Montanha'
    },
    {
        id: 20,
        title: 'Goiaba Vermelha',
        price: 'R$ 8.00',
        image: 'https://image.tuasaude.com/media/article/1b/bc/beneficios-da-goiaba_13191.jpg?width=686&height=487',
        description: 'Fruta doce e nutritiva, rica em vitamina C.\nQuantidade por compra: 1 kg',
        category: 'Frutas',
        producer: 'Maria Santos',
        local: 'Sítio Frutífero'
    }
];