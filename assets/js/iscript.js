const ilkhan = {
    chart: {
        container: "#tree-simple",
        animateOnInit: true,
        connectors: {
            type: "step",
            style: {
                stroke: "black"
            }
        },
        rootOrientation: 'NORTH',
        node: {
            collapsable: true,
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
        }
    },
    
    nodeStructure: {
        text: { 
            name: "Hulegu",
            title:"c.1218 - 1265",
            reign: "Reigned 1256 - 1265",
            'data-blurb': "Founder of the Ilkhanate and responsible for many of the Mongol conquests in Western Asia. Known for his defeat of the caliphate and shrinkening of Islam in the area.",
            'data-wiki': "https://en.wikipedia.org/wiki/Hulagu_Khan",
        },
        HTMLclass: "ilkhan",
        image: "assets/img/hulegu.jpg",
        children: [
            {
                text: { 
                    name: "Abaqa",
                    title:"c.1234 - 1282",
                    reign: "Reigned 1265 - 1282",
                    'data-blurb': "Heir of the Ilkhanate after his father Hulegu whose reign was mostly comprised of the civil war with the Golden Horde. Also made attempts to invade Syria.",
                    'data-wiki': "https://en.wikipedia.org/wiki/Abaqa_Khan",
                },
                HTMLclass: "ilkhan",
                image: "assets/img/abaqa.png",
                children: [
                    {
                        text: { 
                            name: "Arghun",
                            title:"c.1258 - 1291",
                            reign: "Reigned 1284 - 1291",
                            'data-blurb': "During his rule of the Ilkhanate, sent embassies to Europe to try and form a Franco-Mongol alliance against the Muslims.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Arghun",
                        },
                        HTMLclass: "ilkhan",
                        image: "assets/img/arghun.png",
                        children: [
                            {
                                text: { 
                                    name: "Ghazan",
                                    title:"c.1271 - 1304",
                                    reign: "Reigned 1295 - 1304",
                                    'data-blurb': "One of the most prominent of the Ilkhans, converted the empire to Islam and is known for going to war with the Mamluks in Syria, as well as his cousins the Chagataiids.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/Ghazan",
                                },
                                HTMLclass: "ilkhan",
                                image: "assets/img/ghazan.png",
                            }
                        ],
                    },
                    {
                        text: { 
                            name: "Gaykhatu",
                            title:"c.??? - 1295",
                            reign: "Reigned 1291 - 1295",
                            'data-blurb': "Enthroned to due the absence of his cousin Baidu at the qirultai. Also introduced paper money to the Ilkhanate.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Gaykhatu",
                        },
                        HTMLclass: "ilkhan",
                        image: "assets/img/gaykhatu.png",
                    },
                ],
            },
            {
                text: { 
                    name: "Tekunder",
                    title:"c.1240 - 1284",
                    reign: "Reigned 1282 - 1284",
                    'data-blurb': "Turned the Ilkhanate into a sultanate, thus declaring himself the sultan. A convert to Islam, he attempted to make peace with the Mamluks. This angered his nephew Arghun who raised an army and overthrew him.",
                    'data-wiki': "https://en.wikipedia.org/wiki/Tekuder",
                },
                HTMLclass: "ilkhan",
                image: "assets/img/tekunder.png",
            },
            {
                text: { 
                    name: "Taraqai",
                    title:"c.??? - 1295",
                    'data-blurb': "One of Hulegu's sons. The father of Baidu",
                    'data-wiki': "https://en.wikipedia.org/wiki/Ilkhanate",
                },
                image: "assets/img/default.jpg",
                children: [
                    {
                        text: { 
                            name: "Baidu",
                            title:"c.??? - 1295",
                            reign: "Reigned 1295 - 1295",
                            'data-blurb': "Easy-going ruler of the Ilkhan put in power by the Mongol commander Ta'achar who had arranged the death of many Ilkhan Khans before him. Largely a puppet ruler, was eventually ousted from power by his cousin Ghazan.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Baydu",
                        },
                        HTMLclass: "ilkhan",
                        image: "assets/img/baidu.png",
                    }
                ],
            },
        ],
    },
};
var my_chart = new Treant(ilkhan, $);
// $('svg').addClass('dragscroll');

$('.node').on('click', function() {
    console.log($(this).children(".node-name").text())
    console.log($(this).data("blurb"))
    console.log($(this).data("wiki"))

    const name = $(this).children(".node-name").text()
    const blurb = $(this).data("blurb")
    const wiki = $(this).data("wiki")

    $('#info').html(
        `
        <div> <h>${name}</h> <a href=${wiki}>Wikipedia</a></div>
        <p>${blurb}</p>
        
        `
    )
});
