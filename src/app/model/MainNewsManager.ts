import Article from './article';

export class MainNewsManager{
    
    articles: Article[] = [];
    article: Article;
    constructor(){
        this.article = new Article();
        this.article.create(this.articleJson);

        this.articles.push(this.article);

        console.log(this.articles);
    }

    articleJson = {
        date: 1544538000000,
        keywords: [
        "profitability",
        "mining",
        "profitable",
        "based",
        "site",
        "currently",
        "miners",
        "market",
        "current",
        "rigs",
        "cryptocurrency",
        "crypto",
        "asic",
        "remain",
        "markets",
        "bitcoin"
        ],
        top_image: "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zZmI5Y2Q1Mjg0NzRmYjgwMjgxZmI3ZmIxNjRiNzhjNy5qcGc=.jpg",
        text: "Amid the cryptocurrency market crash, even the newest crypto mining machines are struggling to seal profits for their operators, according to real-time data published by mining profitability data site ASICMinerValue.com (AMV) today, Dec. 11. AMV is a site that calculates real-time profitability rates for “ASIC” miners, hardware that uses Application-Specific Integrated Circuit (ASIC) chips, tailored to efficiently mine cryptocurrency based on a specific hashing algorithm. Updated every minute, the site calculates profit yields for specific miners based on current power costs, network difficulty, block rewards, and cryptocurrency prices. As of press time, the site indicates that among ASIC mining machines geared to mine coins that are based on cryptographic hash function “SHA-256” –– such as Bitcoin (BTC) and Bitcoin Cash (BCH) –– only two are currently making any profit. Both models were released in October 2018, and show $0.58 and $0.21 in daily profits. ASIC miners tailored for SHA-256-based cryptocurrencies, in order of profitability, Dec. 11. Source: ASICMinerValue.com The currently most profitable machine, the Ebit 11++, was released by Chinese mining hardware manufacturer Ebang Communication and is currently priced at $2,024. As reported just this week, mining manufacturing giant Bitmain has announced it will be closing its development center in Israel and firing local employees, with local reports attributing the decision to “the current situation” and “shake-up” of the global crypto market. This October, even ahead of the recent market slump, a report from crypto outlet Diar indicated that crypto mining is gradually becoming profitable only for “big guns,” whose pockets are “deep” enough to subsidize burgeoning electricity costs. A Cointelegraph in-depth report published this November analyzed the impact of the protracted crypto bear market on the mining landscape, including its impact on global sales of Graphics Processing Units (GPUs).",
        title: "Just Two ASIC Bitcoin Mining Rigs Remain Profitable in Current Markets",
        url: "https://cointelegraph.com",
        authors: [
        "Marie Huillet"
        ]
    };

    
}