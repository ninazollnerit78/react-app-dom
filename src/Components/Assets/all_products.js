import p1_img from './sofa.jpg'
import p2_img from './pillow.jpg'
import p3_img from './barchair.jpg'
import p4_img from './work-lamp.jpg'
import p5_img from './table-lamp.jpg'
import p6_img from './butterfly.jpg'
import p7_img from './retro-lamp.jpg'
import p8_img from './globe-lamp.jpg'
import p9_img from './burros_tail.jpg'
import p10_img from './chair_2.jpg'
import p11_img from './chair_3.jpg'
import p12_img from './chair_4.jpg'
import p13_img from './chair_5.jpg'
import p14_img from './curtain_1.jpg'
import p15_img from './curtain_2.jpg'
import p16_img from './curtain_3.jpg'
import p17_img from './curtain_4.jpg'
import p18_img from './curtain_5.jpg'
import p19_img from './frame_1.jpg'
import p20_img from './frame_2.jpg'
import p21_img from './frame_3.jpg'
import p22_img from './frame_4.jpg'
import p23_img from './komoda_1.jpg'
import p24_img from './komoda_2.jpg'
import p25_img from './komoda_3.jpg'
import p26_img from './komoda_4.jpg'
import p27_img from './oprema.jpg'
import p28_img from './oprema_2.jpg'
import p29_img from './oprema_3.jpg'
import p30_img from './oprema_4.jpg'
import p31_img from './pillow_2.jpg'
import p32_img from './pillow_3.jpg'
import p33_img from './pillow_4.jpg'
import p34_img from './pillow_5.jpg'
import p35_img from './plant_1.jpg'
import p36_img from './plant_3.jpg'
import p37_img from './plant_5.jpg'
import p38_img from './pink_princess_philodendron.jpg'
import p39_img from './pot_1.jpg'
import p40_img from './pot_2.jpg'
import p41_img from './pot_3.jpg'
import p42_img from './pot_4.jpg'
import p43_img from './sofa_1.jpg'
import p44_img from './sofa_2.jpg'
import p45_img from './sofa_3.jpg'
import p46_img from './sofa_4.jpg'
import p47_img from './trosed_1.jpg'
import p48_img from './trosed_2.jpg'
import p49_img from './trosed_3.jpg'
import p50_img from './trosed_4.jpg'

let all_products = [
    {
        id: 1,
        name: "FOTELJA NA RAZVLAČENJE",
        category: "FOTELJE",
        image: p1_img,
        opis: "Udobna, nova fotelja na razvlacenje.",
        price: 15000
    },
    {
        id: 2,
        name: "JASTUK SA KAKTUSIMA 30X30",
        category: "JASTUCI",
        image: p2_img,
        opis: "Predivan dezen kaktusa na jastuku.",
        price: 600
    },
    {
        id: 3,
        name: "BARSKA STOLICA",
        category: "STOLICE",
        image: p3_img,
        opis: "Nova stolica, nekoriscena.",
        price: 2000
    },
    {
        id: 4,
        name: "STONA LAMPA",
        category: "RASVETA",
        image: p4_img,
        opis: "Sa dobrim osvetljenjem za rad.",
        price: 500
    },
    {
        id: 5,
        name: "PLATNENA LAMPA",
        category: "RASVETA",
        image: p5_img,
        opis: "Komforna platnena lampa za vas dom.",
        price: 1000
    },
    {
        id: 6,
        name: "VISEĆA LEPTIR LAMPA",
        category: "RASVETA",
        image: p6_img,
        opis: "Divan dodatak decijoj sobi.",
        price: 1200
    },
    {
        id: 7,
        name: "VINTAGE LUSTER",
        category: "RASVETA",
        image: p7_img,
        opis: "Luster koji budi nostalgiju.",
        price: 2800
    },
    {
        id: 8,
        name: "OKRUGLA LAMPA",
        category: "RASVETA",
        image: p8_img,
        opis: "Mala sitnica za vasu sobu.",
        price: 700
    },
    {
        id: 9,
        name: "BURRO'S TAIL",
        category: "BILJKE",
        image: p9_img,
        opis: "Sedum morganianum (drugi naziv).",
        price: 1200
    },
    {
        id: 10,
        name: "BELA STOLICA",
        category: "STOLICE",
        image: p10_img,
        opis: "Udobna stolica za vasu dnevnu sobu.",
        price: 2000
    },
    {
        id: 11,
        name: "SIVA STOLICA",
        category: "STOLICE",
        image: p11_img,
        opis: "Siva stolica koja ce se savrseno uklapati uz vas namestaj.",
        price: 1800
    },
    {
        id: 12,
        name: "DRVENA STOLICA",
        category: "STOLICE",
        image: p12_img,
        opis: "Drvena stolica.",
        price: 900
    },
    {
        id: 13,
        name: "MODENA STOLICA",
        category: "STOLICE",
        image: p13_img,
        opis: "Udobna, savremena, zanimljiva stolica.",
        price: 2300
    },
    {
        id: 14,
        name: "SIVA ZAVESA",
        category: "ZAVESE",
        image: p14_img,
        opis: "Dugacka zavesa za prijatnu atmosferu.",
        price: 1900
    },
    {
        id: 15,
        name: "ZLATNI DRZAC ZA ZAVESU",
        category: "ZAVESE",
        image: p15_img,
        opis: "Drzac za zavesu.",
        price: 400
    },
    {
        id: 16,
        name: "NARANDZASTA ZAVESA",
        category: "ZAVESE",
        image: p16_img,
        opis: "Providna narandzasta zavesa.",
        price: 1700
    },
    {
        id: 17,
        name: "SUNCE DRZAC",
        category: "ZAVESE",
        image: p17_img,
        opis: "Drzac za zavesu u obliku sunca.",
        price: 600
    },
    {
        id: 18,
        name: "BRAON ZAVESA",
        category: "ZAVESE",
        image: p18_img,
        opis: "Tamna, braon zavesa.",
        price: 1800
    },
    {
        id: 19,
        name: "DRVENI OKVIR",
        category: "RAMOVI ZA SLIKE",
        image: p19_img,
        opis: "Svetli, drveni okvir, velicine 40x50.",
        price: 200
    },
    {
        id: 20,
        name: "DRVENI OKVIR",
        category: "RAMOVI ZA SLIKE",
        image: p20_img,
        opis: "Tamni, drveni okvir, velicine 40x50.",
        price: 250
    },
    {
        id: 21,
        name: "CRNI OKVIR",
        category: "RAMOVI ZA SLIKE",
        image: p21_img,
        opis: "Crni okvir, velicine 45x50.",
        price: 400
    },
    {
        id: 22,
        name: "ZLATNI OKVIR",
        category: "RAMOVI ZA SLIKE",
        image: p22_img,
        opis: "Zlatni okviri, velicine 10x15, 20x25, 30x35.",
        price: 800
    },
    {
        id: 23,
        name: "DRVENA KOMODA",
        category: "KOMODE",
        image: p23_img,
        opis: "Drvena uska komoda sa tri fioke.",
        price: 1500
    },
    {
        id: 24,
        name: "DRVENA KOMODA",
        category: "KOMODE",
        image: p24_img,
        opis: "Drvena siroka komoda, sa sest fioka.",
        price: 3000
    },
    {
        id: 25,
        name: "SIVA KOMODA",
        category: "KOMODE",
        image: p25_img,
        opis: "Siva komoda, savrsena pored kreveta.",
        price: 1400
    },
    {
        id: 26,
        name: "BELA KOMODA",
        category: "KOMODE",
        image: p26_img,
        opis: "Bela komoda, sa sest fioka.",
        price: 2800
    },
    {
        id: 27,
        name: "GRABULJE I LOPATICA",
        category: "OPREMA ZA BILJKE",
        image: p27_img,
        opis: "Grabulje i lopatica za zemlju.",
        price: 500
    },
    {
        id: 28,
        name: "KANTA ZA ZALIVANJE",
        category: "OPREMA ZA BILJKE",
        image: p28_img,
        opis: "Zelena kanta za zalivanje biljaka.",
        price: 900
    },
    {
        id: 29,
        name: "MAKAZE ZA BILJKE",
        category: "OPREMA ZA BILJKE",
        image: p29_img,
        opis: "Makaze za biljke.",
        price: 400
    },
    {
        id: 30,
        name: "BOCICA ZA PRSKANJE",
        category: "OPREMA ZA BILJKE",
        image: p30_img,
        opis: "Bocica za prskanje biljaka.",
        price: 300
    },
    {
        id: 31,
        name: "BELA RADA JASTUK",
        category: "JASTUCI",
        image: p31_img,
        opis: "Zuti i beli jastuci sa dezenom bele rade.",
        price: 700
    },
    {
        id: 32,
        name: "JASTUK CVET",
        category: "JASTUCI",
        image: p32_img,
        opis: "Jastuk u obliku cveta, beli i zeleni.",
        price: 600
    },
    {
        id: 33,
        name: "BELA RADA JASTUK",
        category: "JASTUCI",
        image: p33_img,
        opis: "Zuti i beli jastuci sa dezenom bele rade.",
        price: 700
    },
]

export default all_products;