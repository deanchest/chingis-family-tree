const chingis = {
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
            name: "Kublai",
            title:"c.1215 - 1294",
            reign: "Reigned 1260 - 1294",
            'data-blurb': "Founder of the Yuan Dynasty. Notably had a conflict with his younger brother Ariq Boke in the Toluid Civil War which marked the beginning of the empire's fragmentation and decline. Kublai's title may have been the Great Khan however his influence was largely only in Mongolia and China.",
            'data-wiki': "https://en.wikipedia.org/wiki/Kublai_Khan",
            'data-title': "khagan"
        },
        HTMLclass: "yuan",
        image: "assets/img/kublai.jpg",
        connectors: {
            type: "bCurve",
            style: {
                stroke: "pink",
                'stroke-width': 20,
            },
        },
        children: [
            {
                text: { 
                    name: "Chabi",
                    title:"c.1225 - 1281",
                    'data-blurb': "Favorite wife of Kublai and painted a picture of the role of women in Mongol culture, being Kublai's closest advisor, confidant, and ally in the royal court. Chabi had immense influence within the dynasty and had a large part as a patron of the arts as well as policymaker.",
                    'data-wiki': "https://en.wikipedia.org/wiki/Chabi",
                    'data-title': "wife"
                },
                image: "assets/img/chabi.jpg",
                children: [
                    {
                        text: { 
                            name: "Jingim",
                            title:"c.1243 - 1286",
                            'data-blurb': "Crown prince of the Yuan dynasty, however died before he could ascend to the throne. Believed to have died from alcoholism.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Zhenjin",
                            'data-title': "chingis"
                        },
                        image: "assets/img/jingim.png",
                        connectors: {
                            type: "bCurve",
                            style: {
                                stroke: "pink",
                                'stroke-width': 20,
                            },
                        },
                        children: [
                            {
                                text: { 
                                name: "Kökejin",
                                title:"c.??? - ???",
                                'data-blurb': "Wife of Jingim from the Khuyngirad tribe. Not to be confused with the Bayaut princess Kököchin in the Ilkhanate.",
                                'data-wiki': "https://books.google.com/books?id=OBEIq8kTQBcC&pg=PA148&lpg=PA148&dq=kokejin+khatun&source=bl&ots=gZMFJN1AEI&sig=ACfU3U2jPyICJF7zE_bPeu_A34DQD-JzeQ&hl=en&sa=X&ved=2ahUKEwif74P5s5XmAhXbJDQIHQgWDZ8Q6AEwDnoECBQQAg#v=onepage&q=kokejin%20khatun&f=false",
                                'data-title': "wife",
                                },
                                image: "assets/img/kokechin.jpg",
                                children: [
                                    {
                                        text: {
                                            name: "Darmabala",
                                            title: "c.1264 - 1293",
                                            'data-blurb': "One of Jingim and Kokejin's sons.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/K%C3%BCl%C3%BCg_Khan",
                                            'data-title': "chingis",
                                        },
                                        image: "assets/img/default.jpg",
                                        children: [
                                            {
                                                text: {
                                                    name: "Külüg",
                                                    title:"c.1281 - 1311",
                                                    'data-blurb': "Emperor of the Yuan dynasty who focused largely on building Buddhist temples and filling the royal court with many princes and riches.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/K%C3%BCl%C3%BCg_Khan",
                                                    'data-title': "khagan",
                                                },
                                                HTMLclass: "yuan",
                                                image: "assets/img/kulug.jpg",
                                            }
                                        ],
                                    },
                                    {
                                        text: {
                                            name: "Temür",
                                            title:"c.1265 - 1307",
                                            'data-blurb': "Son of the crown prince, the throne went to him after Jingim's untimely death.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Tem%C3%BCr_Khan",
                                            'data-title': "khagan",
                                        },
                                        HTMLclass: "yuan",
                                        image: "assets/img/temur.jpg",
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        text: { 
                            name: "Toghon",
                            title:"c.??? - 1301",
                            'data-blurb': "One of Kublai's sons. Notable for leading the Yuan armies in Vietnam.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Toghon_(son_of_Kublai)",
                            'data-title': "chingis"
                        },
                        image: "assets/img/default.jpg",
                    }
                ],
            }
        ],
    },
};
var my_chart = new Treant(chingis, $);
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
