const products = [
    {
        "name": "Gaming računar Ryzen 5 / RTX 4060",
        "image": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600",
        "description": "Gaming računar visokih performansi namenjen zahtevnim korisnicima i modernim igrama. Poseduje Ryzen 5 procesor i moćnu grafičku kartu za stabilan FPS u svim popularnim naslovima. Kućište je opremljeno RGB ventilatorima i odličnim hlađenjem. Idealan je za gaming, streaming i svakodnevni multitasking. Računar dolazi sa brzim SSD diskom koji omogućava brzo pokretanje sistema i aplikacija. Moderan dizajn savršeno se uklapa u svaki gaming setup.",
        "category": "Računari",
        "price": 115000,
        "countInStock": 5,
        "rating": 4.8,
        "numReviews": 18
    },
    {
        "name": "Laptop Lenovo IdeaPad 15",
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
        "description": "Laptop Lenovo IdeaPad 15 predstavlja odličan izbor za školu, fakultet i kancelarijski rad. Poseduje veliki ekran visoke rezolucije i pouzdane performanse za svakodnevne zadatke. Tastatura je udobna za duže korišćenje i kucanje. Laptop je lagan i jednostavan za nošenje. SSD disk omogućava brzo podizanje sistema i programa. Baterija pruža dugotrajan rad bez potrebe za čestim punjenjem.",
        "category": "Laptopovi",
        "price": 68000,
        "countInStock": 8,
        "rating": 4.6,
        "numReviews": 14
    },
    {
        "name": "Monitor 24\" Full HD 75Hz",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
        "description": "Monitor dijagonale 24 inča pruža kvalitetnu Full HD rezoluciju i osvežavanje od 75Hz. Idealan je za gaming, gledanje filmova i svakodnevni rad. Tanak okvir daje moderan izgled i omogućava bolje iskustvo pri korišćenju više monitora. Slika je jasna i oštra sa dobrim prikazom boja. Monitor poseduje HDMI i VGA priključke za jednostavno povezivanje. Stabilno postolje omogućava sigurno korišćenje na svakom radnom stolu.",
        "category": "Monitori",
        "price": 17500,
        "countInStock": 12,
        "rating": 4.5,
        "numReviews": 20
    },
    {
        "name": "Mehanička gaming tastatura RGB",
        "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
        "description": "Mehanička gaming tastatura dizajnirana je za brzo i precizno kucanje tokom igranja. Poseduje RGB osvetljenje sa više različitih efekata. Mehanički svičevi pružaju odličan osećaj pri pritisku tastera. Tastatura je izdržljiva i namenjena dugotrajnom korišćenju. Idealan je izbor za gamere i korisnike koji puno kucaju. Moderan dizajn savršeno se uklapa uz gaming opremu.",
        "category": "Periferije",
        "price": 7200,
        "countInStock": 15,
        "rating": 4.7,
        "numReviews": 25
    },
    {
        "name": "Gaming miš 7200 DPI",
        "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
        "description": "Precizan gaming miš sa podesivim DPI vrednostima omogućava brzo i tačno pomeranje kursora. Ergonomski dizajn pruža udobnost čak i tokom višesatnog korišćenja. Miš poseduje RGB osvetljenje i dodatne tastere za lakše igranje. Pogodan je za FPS, MOBA i druge vrste igara. Kvalitetni senzori obezbeđuju stabilan rad bez kašnjenja. Lagan dizajn omogućava brze pokrete i bolju kontrolu.",
        "category": "Periferije",
        "price": 3500,
        "countInStock": 20,
        "rating": 4.4,
        "numReviews": 16
    },
    {
        "name": "Gaming slušalice sa mikrofonom",
        "image": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
        "description": "Gaming slušalice sa mikrofonom pružaju kvalitetan stereo zvuk i jasnu komunikaciju tokom igranja. Mekani jastučići omogućavaju udobno korišćenje tokom dužih sesija. Mikrofon visokog kvaliteta smanjuje šumove iz okoline. Slušalice imaju moderan gaming dizajn sa LED osvetljenjem. Pogodne su za igranje, muziku i online sastanke. Jednostavno se povezuju sa računarom i drugim uređajima.",
        "category": "Periferije",
        "price": 6900,
        "countInStock": 10,
        "rating": 4.6,
        "numReviews": 19
    },
    {
        "name": "SSD 1TB NVMe",
        "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600",
        "description": "SSD disk kapaciteta 1TB omogućava veoma brzo učitavanje sistema i aplikacija. NVMe tehnologija pruža znatno bolje performanse u odnosu na klasične SSD diskove. Idealan je za gaming računare i profesionalni rad. Veliki kapacitet omogućava skladištenje velikog broja igara i fajlova. Disk je pouzdan i energetski efikasan. Kompaktne dimenzije omogućavaju jednostavnu instalaciju.",
        "category": "Komponente",
        "price": 9500,
        "countInStock": 9,
        "rating": 4.9,
        "numReviews": 31
    },
    {
        "name": "RAM memorija 16GB DDR4",
        "image": "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600",
        "description": "RAM memorija kapaciteta 16GB DDR4 omogućava stabilan i brz rad računara. Namenjena je za gaming, multitasking i zahtevnije aplikacije. Visoka brzina memorije poboljšava ukupne performanse sistema. Memorija je kompatibilna sa velikim brojem matičnih ploča. Kvalitetna izrada garantuje dugotrajan i pouzdan rad. Idealan je izbor za unapređenje postojećeg računara.",
        "category": "Komponente",
        "price": 6200,
        "countInStock": 14,
        "rating": 4.5,
        "numReviews": 13
    },
    {
        "name": "Grafička kartica RTX 4060 8GB",
        "image": "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
        "description": "RAM memorija kapaciteta 16GB DDR4 omogućava stabilan i brz rad računara. Namenjena je za gaming, multitasking i zahtevnije aplikacije. Visoka brzina memorije poboljšava ukupne performanse sistema. Memorija je kompatibilna sa velikim brojem matičnih ploča. Kvalitetna izrada garantuje dugotrajan i pouzdan rad. Idealan je izbor za unapređenje postojećeg računara.",
        "category": "Komponente",
        "price": 52000,
        "countInStock": 4,
        "rating": 4.8,
        "numReviews": 22
    },
    {
        "name": "Procesor AMD Ryzen 5 5600",
        "image": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
        "description": "AMD Ryzen 5 5600 procesor pruža odlične performanse za gaming i svakodnevni rad. Zahvaljujući velikom broju jezgara i visokim radnim frekvencijama omogućava stabilan multitasking. Procesor je idealan za moderne igre, obradu podataka i produktivne aplikacije. Energetski je efikasan i ima nisku potrošnju energije. Kompatibilan je sa velikim brojem AM4 matičnih ploča. Predstavlja odličan odnos cene i performansi za korisnike koji žele brz i pouzdan računar.",
        "category": "Komponente",
        "price": 14500,
        "countInStock": 7,
        "rating": 4.7,
        "numReviews": 17
    },
    {
        "name": "Matična ploča B550",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        "description": "Matična ploča za AMD procesore.",
        "category": "Komponente",
        "price": 13500,
        "countInStock": 6,
        "rating": 4.4,
        "numReviews": 11
    },
    {
        "name": "Napajanje 650W 80+ Bronze",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
        "description": "Napajanje od 650W sa 80+ Bronze sertifikatom pruža stabilno i sigurno napajanje svih komponenti računara. Kvalitetni materijali omogućavaju dugotrajan i pouzdan rad sistema. Efikasno hlađenje smanjuje temperaturu i nivo buke tokom korišćenja. Pogodno je za gaming i profesionalne konfiguracije srednje i više klase. Poseduje zaštitu od prenapona i kratkog spoja. Moderan dizajn i dobra organizacija kablova olakšavaju sklapanje računara.",
        "category": "Komponente",
        "price": 8900,
        "countInStock": 10,
        "rating": 4.3,
        "numReviews": 9
    },
    {
        "name": "Kućište sa RGB ventilatorima",
        "image": "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
        "description": "Gaming kućište sa RGB ventilatorima pruža odličan protok vazduha i moderan izgled računara. Prednji panel omogućava efikasno hlađenje svih komponenti tokom intenzivnog korišćenja. Kućište poseduje providnu bočnu stranicu za prikaz unutrašnjosti računara. Kompatibilno je sa velikim brojem matičnih ploča i grafičkih karti. RGB osvetljenje daje atraktivan gaming izgled. Idealno je za korisnike koji žele moderan i funkcionalan setup.",
        "category": "Kućišta",
        "price": 10500,
        "countInStock": 8,
        "rating": 4.6,
        "numReviews": 15
    },
    {
        "name": "Web kamera Full HD",
        "image": "https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=600",
        "description": "Web kamera Full HD omogućava kvalitetnu sliku tokom online sastanaka, nastave i streaminga. Visoka rezolucija pruža jasnu i oštru sliku u svim uslovima. Ugrađeni mikrofon omogućava jednostavnu komunikaciju bez dodatne opreme. Kamera je kompatibilna sa većinom popularnih aplikacija za video pozive. Kompaktne dimenzije omogućavaju lako postavljanje na monitor ili laptop. Idealan je izbor za posao, školu i svakodnevnu komunikaciju.",
        "category": "Periferije",
        "price": 4200,
        "countInStock": 13,
        "rating": 4.2,
        "numReviews": 10
    },
    {
        "name": "USB WiFi adapter",
        "image": "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600",
        "description": "USB WiFi adapter omogućava brzo i stabilno povezivanje računara na bežičnu mrežu. Kompaktne dimenzije čine ga jednostavnim za nošenje i korišćenje. Adapter podržava veliki broj modernih WiFi standarda za stabilan internet signal. Instalacija je jednostavna i ne zahteva dodatno tehničko znanje. Pogodan je za desktop računare i laptopove bez ugrađenog WiFi modula. Predstavlja praktično i povoljno rešenje za bežično povezivanje.",
        "category": "Mrežna oprema",
        "price": 2200,
        "countInStock": 18,
        "rating": 4.1,
        "numReviews": 7
    },
    {
        "name": "Ruter Dual Band",
        "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
        "description": "Dual Band ruter omogućava stabilnu i brzu internet konekciju za kućne i poslovne korisnike. Podržava rad na 2.4GHz i 5GHz mrežama za bolje performanse i manja zagušenja. Veliki domet signala omogućava kvalitetnu pokrivenost prostora. Ruter je jednostavan za instalaciju i podešavanje. Pogodan je za streaming, gaming i svakodnevno korišćenje interneta. Moderan dizajn lako se uklapa u svaki prostor.",
        "category": "Mrežna oprema",
        "price": 7600,
        "countInStock": 11,
        "rating": 4.5,
        "numReviews": 14
    },
    {
        "name": "Eksterni hard disk 2TB",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600",
        "description": "Eksterni hard disk kapaciteta 2TB namenjen je sigurnom čuvanju velikog broja fajlova, fotografija i video sadržaja. Veliki kapacitet omogućava pravljenje rezervnih kopija važnih podataka. Disk je kompaktan i jednostavan za nošenje. Brz prenos podataka omogućava efikasno korišćenje u svakodnevnom radu. Kompatibilan je sa računarima i laptopovima različitih proizvođača. Predstavlja praktično rešenje za dodatni prostor za skladištenje.",
        "category": "Skladištenje",
        "price": 12000,
        "countInStock": 6,
        "rating": 4.4,
        "numReviews": 12
    },
    {
        "name": "Podloga za miš XL",
        "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600",
        "description": "Velika podloga za miš i tastaturu.",
        "category": "Dodaci",
        "price": 1800,
        "countInStock": 25,
        "rating": 4.3,
        "numReviews": 21
    },
    {
        "name": "USB-C Hub 7 u 1",
        "image": "https://plugable.com/cdn/shop/files/main_ori_0a84a6f9-0f78-48ba-9222-977955e1f3d4.jpg?v=1718235273",
        "description": "Adapter sa više priključaka za laptopove i računare.",
        "category": "Dodaci",
        "price": 4900,
        "countInStock": 9,
        "rating": 4.2,
        "numReviews": 8
    },
    {
        "name": "Termalna pasta",
        "image": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600",
        "description": "Termalna pasta za bolje hlađenje procesora.",
        "category": "Servisna oprema",
        "price": 900,
        "countInStock": 30,
        "rating": 4.6,
        "numReviews": 18
    },
    
  {
    "name": "Gaming računar Intel i5 / RTX 4070",
    "image": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600",
    "description": "Snažan gaming računar za moderne igre i profesionalni rad.",
    "category": "Računari",
    "price": 145000,
    "countInStock": 4,
    "rating": 4.9,
    "numReviews": 12
},
{
    "name": "Office računar Ryzen 3",
    "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600",
    "description": "Pouzdan računar za kancelarijski rad, internet i multimediju.",
    "category": "Računari",
    "price": 52000,
    "countInStock": 9,
    "rating": 4.4,
    "numReviews": 7
},
{
    "name": "HP Pavilion 15",
    "image": "https://crdms.images.consumerreports.org/prod/products/cr/models/409676-15-to-16-inch-laptops-hp-pavilion-15-eg3097nr-10035194.png",
    "description": "Moderan laptop za posao, školu i svakodnevnu upotrebu.",
    "category": "Laptopovi",
    "price": 79000,
    "countInStock": 6,
    "rating": 4.5,
    "numReviews": 11
},
{
    "name": "ASUS TUF Gaming F15",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    "description": "Gaming laptop visokih performansi sa odličnim hlađenjem.",
    "category": "Laptopovi",
    "price": 132000,
    "countInStock": 5,
    "rating": 4.8,
    "numReviews": 16
},
{
    "name": "Monitor 27\" IPS 144Hz",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    "description": "Gaming monitor sa IPS panelom i osvežavanjem od 144Hz.",
    "category": "Monitori",
    "price": 32900,
    "countInStock": 8,
    "rating": 4.7,
    "numReviews": 19
},
{
    "name": "Monitor 32\" QHD",
    "image": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600",
    "description": "Veliki monitor visoke rezolucije za rad i zabavu.",
    "category": "Monitori",
    "price": 41900,
    "countInStock": 5,
    "rating": 4.6,
    "numReviews": 13
},
{
    "name": "Kućište Mid Tower Black",
    "image": "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
    "description": "Elegantno kućište sa odličnim protokom vazduha.",
    "category": "Kućišta",
    "price": 6900,
    "countInStock": 12,
    "rating": 4.4,
    "numReviews": 8
},
{
    "name": "Kućište White RGB",
    "image": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600",
    "description": "Atraktivno belo kućište sa RGB osvetljenjem.",
    "category": "Kućišta",
    "price": 11900,
    "countInStock": 6,
    "rating": 4.7,
    "numReviews": 14
},
{
    "name": "Switch 8 Port Gigabit",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    "description": "Mrežni switch za brzo povezivanje uređaja.",
    "category": "Mrežna oprema",
    "price": 3900,
    "countInStock": 10,
    "rating": 4.3,
    "numReviews": 6
},
{
    "name": "Mesh WiFi sistem",
    "image": "https://www.netgear.com/nz/media/CMS_Product_Image-Humdinger_RBKE963-Studio_tcm160-141405.jpg",
    "description": "Napredno rešenje za pokrivanje cele kuće WiFi signalom.",
    "category": "Mrežna oprema",
    "price": 15900,
    "countInStock": 5,
    "rating": 4.8,
    "numReviews": 9
},
{
    "name": "SSD 2TB SATA",
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600",
    "description": "Brz SSD velikog kapaciteta za skladištenje podataka.",
    "category": "Skladištenje",
    "price": 14900,
    "countInStock": 8,
    "rating": 4.7,
    "numReviews": 15
},
{
    "name": "USB Flash 128GB",
    "image": "https://images.ctshop.rs/img/products/2025-12-19/team-group-gen1-bk-usb-flash-memorija-128gb-usb-3-2-gen1-crna_dk4sj_4.webp",
    "description": "Praktična USB memorija za svakodnevnu upotrebu.",
    "category": "Skladištenje",
    "price": 1900,
    "countInStock": 30,
    "rating": 4.2,
    "numReviews": 10
},
{
    "name": "Držač za monitor",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    "description": "Podesivi nosač za monitor sa lakim montiranjem.",
    "category": "Dodaci",
    "price": 3500,
    "countInStock": 11,
    "rating": 4.4,
    "numReviews": 7
},
{
    "name": "LED traka za setup",
    "image": "https://www.hoba.rs/cdn/shop/products/FNLEDTRAKASET5m.jpg?v=1651411449&width=800",
    "description": "RGB LED osvetljenje za gaming i radni sto.",
    "category": "Dodaci",
    "price": 2200,
    "countInStock": 20,
    "rating": 4.3,
    "numReviews": 12
},
{
    "name": "Set šrafcigera za računare",
    "image": "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600",
    "description": "Profesionalni alat za servisiranje računara.",
    "category": "Servisna oprema",
    "price": 2600,
    "countInStock": 15,
    "rating": 4.6,
    "numReviews": 11
},
{
    "name": "Komplet za čišćenje računara",
    "image": "https://kompaskomerc.co.rs/wp-content/uploads/2024/06/6523.jpg",
    "description": "Komplet za održavanje i čišćenje računarske opreme.",
    "category": "Servisna oprema",
    "price": 1700,
    "countInStock": 18,
    "rating": 4.5,
    "numReviews": 9
}
]

export default products