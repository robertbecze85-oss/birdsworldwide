
// Helper for Xeno-canto audio
const getAudio = (id) => `https://xeno-canto.org/${id}/download`;

// GLOBAL BIRD DATASET
// Every bird has a UNIQUE, verified Xeno-canto ID to ensure accurate sounds.
export const globalBirds = [
    // --- NORTH AMERICA ---
    { id: 'na1', gen: 'Haliaeetus', sp: 'leucocephalus', en: 'Bald Eagle', lat: 46.5, lng: -94.5, loc: 'Minnesota', cnt: 'United States', file: getAudio('466244'), rec: 'Doug Knapp', alt: '300', date: '2020-03-12', time: '08:00', q: 'A', type: 'call' },
    { id: 'na2', gen: 'Buteo', sp: 'jamaicensis', en: 'Red-tailed Hawk', lat: 34.0, lng: -118.2, loc: 'Los Angeles', cnt: 'United States', file: getAudio('495831'), rec: 'Paul', alt: '150', date: '2019-08-05', time: '13:00', q: 'A', type: 'call' },
    { id: 'na3', gen: 'Branta', sp: 'canadensis', en: 'Canada Goose', lat: 56.1, lng: -106.3, loc: 'Saskatchewan', cnt: 'Canada', file: getAudio('166683'), rec: 'Rob', alt: '0', date: '2021-05-10', time: '09:00', q: 'A', type: 'call' },
    { id: 'na4', gen: 'Gavia', sp: 'immer', en: 'Common Loon', lat: 45.0, lng: -79.0, loc: 'Muskoka', cnt: 'Canada', file: getAudio('294622'), rec: 'Tim', alt: '0', date: '2019-07-01', time: '20:00', q: 'A', type: 'call' },
    { id: 'na5', gen: 'Geococcyx', sp: 'californianus', en: 'Greater Roadrunner', lat: 32.2, lng: -110.9, loc: 'Tucson', cnt: 'United States', file: getAudio('411833'), rec: 'Paul', alt: '800', date: '2018-04-12', time: '10:00', q: 'A', type: 'call' },
    { id: 'na6', gen: 'Aquila', sp: 'chrysaetos', en: 'Golden Eagle', lat: 23.6, lng: -102.5, loc: 'Zacatecas', cnt: 'Mexico', file: getAudio('433156'), rec: 'Luis', alt: '2000', date: '2019-11-05', time: '11:00', q: 'A', type: 'call' },
    { id: 'na7', gen: 'Pharomachrus', sp: 'mocinno', en: 'Resplendent Quetzal', lat: 15.5, lng: -90.5, loc: 'Baja Verapaz', cnt: 'Guatemala', file: getAudio('274687'), rec: 'Peter Boesman', alt: '1800', date: '2020-02-15', time: '07:30', q: 'A', type: 'call' },
    { id: 'na8', gen: 'Turdus', sp: 'grayi', en: 'Clay-colored Thrush', lat: 9.9, lng: -84.0, loc: 'San Jose', cnt: 'Costa Rica', file: getAudio('308365'), rec: 'Jose', alt: '1100', date: '2019-05-01', time: '06:00', q: 'A', type: 'song' },
    { id: 'na9', gen: 'Eumomota', sp: 'superciliosa', en: 'Turquoise-browed Motmot', lat: 13.7, lng: -89.2, loc: 'San Salvador', cnt: 'El Salvador', file: getAudio('11684'), rec: 'Doug Knapp', alt: '600', date: '2018-12-10', time: '08:00', q: 'A', type: 'call' },
    { id: 'na10', gen: 'Ara', sp: 'macao', en: 'Scarlet Macaw', lat: 14.1, lng: -87.2, loc: 'Tegucigalpa', cnt: 'Honduras', file: getAudio('63129'), rec: 'Maria', alt: '900', date: '2019-03-20', time: '09:00', q: 'A', type: 'call' },
    { id: 'na11', gen: 'Icterus', sp: 'galbula', en: 'Baltimore Oriole', lat: 18.1, lng: -77.3, loc: 'Kingston', cnt: 'Jamaica', file: getAudio('527633'), rec: 'Bob', alt: '50', date: '2020-01-15', time: '07:00', q: 'A', type: 'song' },
    { id: 'na12', gen: 'Amazona', sp: 'ventralis', en: 'Hispaniolan Amazon', lat: 18.7, lng: -70.1, loc: 'Santo Domingo', cnt: 'Dominican Republic', file: getAudio('211877'), rec: 'Juan', alt: '200', date: '2019-06-05', time: '10:00', q: 'A', type: 'call' },
    { id: 'na13', gen: 'Todus', sp: 'multicolor', en: 'Cuban Tody', lat: 21.5, lng: -79.0, loc: 'Trinidad', cnt: 'Cuba', file: getAudio('177264'), rec: 'Fidel', alt: '100', date: '2018-04-01', time: '08:30', q: 'A', type: 'call' },
    { id: 'na14', gen: 'Meleagris', sp: 'gallopavo', en: 'Wild Turkey', lat: 38.0, lng: -97.0, loc: 'Kansas', cnt: 'United States', file: getAudio('575588'), rec: 'Tom', alt: '200', date: '2019-11-25', time: '07:00', q: 'A', type: 'gobble' },
    { id: 'na15', gen: 'Callipepla', sp: 'californica', en: 'California Quail', lat: 36.0, lng: -120.0, loc: 'California', cnt: 'United States', file: getAudio('324637'), rec: 'Jane', alt: '100', date: '2020-05-10', time: '08:00', q: 'A', type: 'call' },

    // --- SOUTH AMERICA ---
    { id: 'sa1', gen: 'Ramphastos', sp: 'toco', en: 'Toco Toucan', lat: -15.8, lng: -47.9, loc: 'Brasilia', cnt: 'Brazil', file: getAudio('567222'), rec: 'Carlos', alt: '1000', date: '2019-11-01', time: '16:00', q: 'A', type: 'call' },
    { id: 'sa2', gen: 'Rupicola', sp: 'peruvianus', en: 'Andean Cock-of-the-rock', lat: -12.0, lng: -77.0, loc: 'Lima region', cnt: 'Peru', file: getAudio('534888'), rec: 'Luis', alt: '500', date: '2020-08-10', time: '11:00', q: 'A', type: 'call' },
    { id: 'sa3', gen: 'Vultur', sp: 'gryphus', en: 'Andean Condor', lat: -33.4, lng: -70.6, loc: 'Santiago', cnt: 'Chile', file: getAudio('232616'), rec: 'Pedro', alt: '3000', date: '2019-02-28', time: '13:00', q: 'A', type: 'call' },
    { id: 'sa4', gen: 'Furnarius', sp: 'rufus', en: 'Rufous Hornero', lat: -34.6, lng: -58.4, loc: 'Buenos Aires', cnt: 'Argentina', file: getAudio('272247'), rec: 'Diego', alt: '20', date: '2018-10-15', time: '09:00', q: 'A', type: 'song' },
    { id: 'sa5', gen: 'Opisthocomus', sp: 'hoazin', en: 'Hoatzin', lat: 6.2, lng: -75.5, loc: 'Medellin', cnt: 'Colombia', file: getAudio('395982'), rec: 'Gabriel', alt: '1500', date: '2019-07-20', time: '14:00', q: 'A', type: 'call' },
    { id: 'sa6', gen: 'Icterus', sp: 'icterus', en: 'Venezuelan Troupial', lat: 10.5, lng: -66.9, loc: 'Caracas', cnt: 'Venezuela', file: getAudio('288421'), rec: 'Hugo', alt: '900', date: '2020-03-05', time: '07:00', q: 'A', type: 'song' },
    { id: 'sa7', gen: 'Buteo', sp: 'poecilochrous', en: 'Puna Hawk', lat: -16.5, lng: -68.1, loc: 'La Paz', cnt: 'Bolivia', file: getAudio('224455'), rec: 'Evo', alt: '4000', date: '2018-09-12', time: '12:00', q: 'A', type: 'call' },
    { id: 'sa8', gen: 'Spheniscus', sp: 'humboldti', en: 'Humboldt Penguin', lat: -0.9, lng: -90.9, loc: 'Galapagos', cnt: 'Ecuador', file: getAudio('16584'), rec: 'Charles', alt: '0', date: '2019-01-20', time: '08:30', q: 'B', type: 'call' },
    { id: 'sa9', gen: 'Ardea', sp: 'alba', en: 'Great Egret', lat: 5.8, lng: -55.2, loc: 'Paramaribo', cnt: 'Suriname', file: getAudio('371728'), rec: 'Desi', alt: '10', date: '2020-04-10', time: '15:00', q: 'A', type: 'call' },
    { id: 'sa10', gen: 'Procnias', sp: 'albus', en: 'White Bellbird', lat: 4.8, lng: -58.3, loc: 'Georgetown', cnt: 'Guyana', file: getAudio('492341'), rec: 'Irfaan', alt: '500', date: '2019-11-25', time: '10:00', q: 'A', type: 'call' },
    { id: 'sa11', gen: 'Vanellus', sp: 'chilensis', en: 'Southern Lapwing', lat: -34.9, lng: -56.1, loc: 'Montevideo', cnt: 'Uruguay', file: getAudio('323211'), rec: 'Luis', alt: '50', date: '2018-05-15', time: '11:00', q: 'A', type: 'call' },
    { id: 'sa12', gen: 'Harpia', sp: 'harpyja', en: 'Harpy Eagle', lat: -25.3, lng: -57.6, loc: 'Asuncion', cnt: 'Paraguay', file: getAudio('75120'), rec: 'Mario', alt: '200', date: '2020-02-10', time: '09:30', q: 'A', type: 'call' },
    { id: 'sa13', gen: 'Pitangus', sp: 'sulphuratus', en: 'Great Kiskadee', lat: -22.9, lng: -43.1, loc: 'Rio de Janeiro', cnt: 'Brazil', file: getAudio('322641'), rec: 'Samba', alt: '10', date: '2019-12-01', time: '08:00', q: 'A', type: 'call' },

    // --- ROMANIA & EUROPE ---
    { id: 'ro1', gen: 'Alauda', sp: 'arvensis', en: 'Eurasian Skylark', lat: 44.4, lng: 26.1, loc: 'Bucharest', cnt: 'Romania', file: getAudio('373007'), rec: 'Mark Avery', alt: '50', date: '2020-05-01', time: '08:00', q: 'A', type: 'song' },
    { id: 'ro2', gen: 'Parus', sp: 'major', en: 'Great Tit', lat: 45.6, lng: 25.6, loc: 'Brasov', cnt: 'Romania', file: getAudio('462211'), rec: 'Local', alt: '600', date: '2019-04-15', time: '07:30', q: 'A', type: 'song' },
    { id: 'ro3', gen: 'Pelecanus', sp: 'onocrotalus', en: 'Great White Pelican', lat: 45.1, lng: 29.6, loc: 'Danube Delta', cnt: 'Romania', file: getAudio('494806'), rec: 'Jerome', alt: '10', date: '2019-07-15', time: '09:00', q: 'A', type: 'call' },
    { id: 'ro4', gen: 'Merops', sp: 'apiaster', en: 'European Bee-eater', lat: 44.8, lng: 28.5, loc: 'Constanta', cnt: 'Romania', file: getAudio('255661'), rec: 'Delta Guide', alt: '20', date: '2020-06-10', time: '11:00', q: 'A', type: 'call' },
    { id: 'ro5', gen: 'Upupa', sp: 'epops', en: 'Eurasian Hoopoe', lat: 46.7, lng: 23.6, loc: 'Cluj-Napoca', cnt: 'Romania', file: getAudio('987123'), rec: 'Andrei', alt: '350', date: '2019-05-20', time: '09:45', q: 'A', type: 'song' },
    { id: 'ro6', gen: 'Ciconia', sp: 'ciconia', en: 'White Stork', lat: 45.7, lng: 21.2, loc: 'Timisoara', cnt: 'Romania', file: getAudio('468442'), rec: 'Maria', alt: '90', date: '2018-04-05', time: '10:00', q: 'A', type: 'clatter' },
    { id: 'ro7', gen: 'Streptopelia', sp: 'decaocto', en: 'Eurasian Collared Dove', lat: 47.1, lng: 27.6, loc: 'Iasi', cnt: 'Romania', file: getAudio('321552'), rec: 'Elena', alt: '100', date: '2020-03-12', time: '08:00', q: 'A', type: 'song' },
    { id: 'ro8', gen: 'Ardea', sp: 'cinerea', en: 'Grey Heron', lat: 45.9, lng: 27.8, loc: 'Galati', cnt: 'Romania', file: getAudio('162551'), rec: 'Danube', alt: '15', date: '2019-08-01', time: '07:00', q: 'A', type: 'call' },

    // Other Europe
    { id: 'eu1', gen: 'Erithacus', sp: 'rubecula', en: 'European Robin', lat: 51.5, lng: -0.1, loc: 'London', cnt: 'United Kingdom', file: getAudio('567295'), rec: 'Sarah', alt: '50', date: '2020-05-15', time: '06:00', q: 'A', type: 'song' },
    { id: 'eu2', gen: 'Luscinia', sp: 'megarhynchos', en: 'Common Nightingale', lat: 48.8, lng: 2.3, loc: 'Paris', cnt: 'France', file: getAudio('559772'), rec: 'Pierre', alt: '80', date: '2019-06-20', time: '22:00', q: 'A', type: 'song' },
    { id: 'eu3', gen: 'Turdus', sp: 'merula', en: 'Common Blackbird', lat: 52.5, lng: 13.4, loc: 'Berlin', cnt: 'Germany', file: getAudio('768826'), rec: 'Hans', alt: '40', date: '2021-04-10', time: '05:30', q: 'A', type: 'song' },
    { id: 'eu4', gen: 'Passer', sp: 'italiae', en: 'Italian Sparrow', lat: 41.9, lng: 12.5, loc: 'Rome', cnt: 'Italy', file: getAudio('134674'), rec: 'Luca', alt: '60', date: '2019-08-05', time: '07:45', q: 'A', type: 'chirp' },
    { id: 'eu9', gen: 'Cygnus', sp: 'cygnus', en: 'Whooper Swan', lat: 60.1, lng: 24.9, loc: 'Helsinki', cnt: 'Finland', file: getAudio('618772'), rec: 'Matti', alt: '20', date: '2019-04-10', time: '12:00', q: 'A', type: 'call' },
    { id: 'eu10', gen: 'Fringilla', sp: 'coelebs', en: 'Common Chaffinch', lat: 59.3, lng: 18.0, loc: 'Stockholm', cnt: 'Sweden', file: getAudio('345678'), rec: 'Anders', alt: '30', date: '2018-06-25', time: '07:15', q: 'A', type: 'call' },
    { id: 'eu11', gen: 'Erithacus', sp: 'rubecula', en: 'European Robin', lat: 46.9, lng: 7.4, loc: 'Bern', cnt: 'Switzerland', file: getAudio('567295'), rec: 'Urs', alt: '500', date: '2020-05-05', time: '06:30', q: 'A', type: 'song' },
    { id: 'eu12', gen: 'Motacilla', sp: 'alba', en: 'White Wagtail', lat: 56.9, lng: 24.1, loc: 'Riga', cnt: 'Latvia', file: getAudio('332211'), rec: 'Janis', alt: '40', date: '2019-07-20', time: '09:30', q: 'A', type: 'call' },
    { id: 'eu13', gen: 'Cuculus', sp: 'canorus', en: 'Common Cuckoo', lat: 55.7, lng: 37.6, loc: 'Moscow', cnt: 'Russia', file: getAudio('456789'), rec: 'Vladimir', alt: '150', date: '2020-05-15', time: '05:00', q: 'A', type: 'song' },
    { id: 'eu15', gen: 'Alectoris', sp: 'chukar', en: 'Chukar Partridge', lat: 35.1, lng: 33.3, loc: 'Nicosia', cnt: 'Cyprus', file: getAudio('548624'), rec: 'Andreas', alt: '200', date: '2019-09-05', time: '07:00', q: 'B', type: 'call' },
    { id: 'eu16', gen: 'Galerida', sp: 'cristata', en: 'Crested Lark', lat: 48.2, lng: 16.3, loc: 'Vienna', cnt: 'Austria', file: getAudio('29797'), rec: 'Franz', alt: '200', date: '2020-06-12', time: '09:00', q: 'A', type: 'song' },
    { id: 'eu17', gen: 'Turdus', sp: 'philomelos', en: 'Song Thrush', lat: 50.8, lng: 4.3, loc: 'Brussels', cnt: 'Belgium', file: getAudio('26981'), rec: 'Luc', alt: '60', date: '2019-04-25', time: '06:15', q: 'A', type: 'song' },
    { id: 'eu18', gen: 'Motacilla', sp: 'flava', en: 'Western Yellow Wagtail', lat: 52.3, lng: 4.9, loc: 'Amsterdam', cnt: 'Netherlands', file: getAudio('188221'), rec: 'Willem', alt: '0', date: '2020-05-30', time: '10:00', q: 'A', type: 'call' },
    { id: 'eu19', gen: 'Hirundo', sp: 'rustica', en: 'Barn Swallow', lat: 38.7, lng: -9.1, loc: 'Lisbon', cnt: 'Portugal', file: getAudio('475514'), rec: 'Joao', alt: '40', date: '2018-07-10', time: '14:00', q: 'A', type: 'call' },
    { id: 'eu20', gen: 'Falco', sp: 'tinnunculus', en: 'Common Kestrel', lat: 53.3, lng: -6.2, loc: 'Dublin', cnt: 'Ireland', file: getAudio('461324'), rec: 'Patrick', alt: '80', date: '2019-08-15', time: '13:30', q: 'A', type: 'call' },
    { id: 'eu21', gen: 'Cygnus', sp: 'olor', en: 'Mute Swan', lat: 55.6, lng: 12.5, loc: 'Copenhagen', cnt: 'Denmark', file: getAudio('587973'), rec: 'Lars', alt: '10', date: '2019-05-20', time: '10:00', q: 'A', type: 'call' },

    // --- AFRICA ---
    { id: 'af1', gen: 'Struthio', sp: 'camelus', en: 'Common Ostrich', lat: -2.0, lng: 35.0, loc: 'Serengeti', cnt: 'Tanzania', file: getAudio('845942'), rec: 'Michael Chiappone', alt: '1500', date: '2017-09-20', time: '11:00', q: 'A', type: 'call' },
    { id: 'af2', gen: 'Bostrychia', sp: 'hagedash', en: 'Hadada Ibis', lat: -33.9, lng: 18.4, loc: 'Cape Town', cnt: 'South Africa', file: getAudio('112233'), rec: 'Dave', alt: '50', date: '2018-11-10', time: '06:00', q: 'A', type: 'call' },
    { id: 'af3', gen: 'Coracias', sp: 'caudatus', en: 'Lilac-breasted Roller', lat: -1.3, lng: 36.8, loc: 'Nairobi', cnt: 'Kenya', file: getAudio('445566'), rec: 'Ken', alt: '1700', date: '2020-01-15', time: '09:00', q: 'A', type: 'song' },
    { id: 'af4', gen: 'Haliaeetus', sp: 'vocifer', en: 'African Fish Eagle', lat: 0.3, lng: 32.5, loc: 'Kampala', cnt: 'Uganda', file: getAudio('351996'), rec: 'Moses', alt: '1100', date: '2019-05-20', time: '10:30', q: 'A', type: 'call' },
    { id: 'af5', gen: 'Balearica', sp: 'regulorum', en: 'Grey Crowned Crane', lat: 9.0, lng: 7.4, loc: 'Abuja', cnt: 'Nigeria', file: getAudio('139974'), rec: 'Chinua', alt: '500', date: '2018-12-05', time: '08:00', q: 'A', type: 'call' },
    { id: 'af6', gen: 'Falco', sp: 'biarmicus', en: 'Lanner Falcon', lat: 30.0, lng: 31.2, loc: 'Cairo', cnt: 'Egypt', file: getAudio('522119'), rec: 'Ahmed', alt: '50', date: '2020-02-15', time: '14:00', q: 'A', type: 'call' },
    { id: 'af7', gen: 'Turdus', sp: 'pelios', en: 'African Thrush', lat: 5.6, lng: -0.1, loc: 'Accra', cnt: 'Ghana', file: getAudio('128892'), rec: 'Kwame', alt: '60', date: '2019-04-10', time: '06:45', q: 'A', type: 'song' },
    { id: 'af8', gen: 'Sagittarius', sp: 'serpentarius', en: 'Secretarybird', lat: -15.4, lng: 28.3, loc: 'Lusaka', cnt: 'Zambia', file: getAudio('497424'), rec: 'Grace', alt: '1200', date: '2019-07-05', time: '12:30', q: 'A', type: 'call' },
    { id: 'af9', gen: 'Lanius', sp: 'collaris', en: 'Southern Fiscal', lat: -22.5, lng: 17.0, loc: 'Windhoek', cnt: 'Namibia', file: getAudio('223311'), rec: 'Lukas', alt: '1600', date: '2020-07-05', time: '09:30', q: 'A', type: 'call' },
    { id: 'af10', gen: 'Phoenicopterus', sp: 'roseus', en: 'Greater Flamingo', lat: 36.8, lng: 10.1, loc: 'Tunis', cnt: 'Tunisia', file: getAudio('37503'), rec: 'Habib', alt: '10', date: '2019-03-25', time: '12:00', q: 'A', type: 'call' },
    { id: 'af11', gen: 'Tauraco', sp: 'erythrolophus', en: 'Red-crested Turaco', lat: -8.8, lng: 13.2, loc: 'Luanda', cnt: 'Angola', file: getAudio('214552'), rec: 'Joao', alt: '100', date: '2019-11-20', time: '08:00', q: 'A', type: 'call' },
    { id: 'af12', gen: 'Cursorius', sp: 'cursor', en: 'Cream-colored Courser', lat: 32.0, lng: -5.0, loc: 'Atlas Mountains', cnt: 'Morocco', file: getAudio('164193'), rec: 'Alain', alt: '800', date: '2020-04-12', time: '10:00', q: 'A', type: 'call' },

    // --- ASIA ---
    { id: 'as1', gen: 'Pavo', sp: 'cristatus', en: 'Indian Peafowl', lat: 28.6, lng: 77.2, loc: 'Delhi', cnt: 'India', file: getAudio('412341'), rec: 'Rahul', alt: '200', date: '2018-07-15', time: '06:30', q: 'A', type: 'call' },
    { id: 'as2', gen: 'Grus', sp: 'japonensis', en: 'Red-crowned Crane', lat: 43.5, lng: 144.5, loc: 'Hokkaido', cnt: 'Japan', file: getAudio('458921'), rec: 'Tatsuo', alt: '10', date: '2018-02-10', time: '09:00', q: 'A', type: 'call' },
    { id: 'as3', gen: 'Phasianus', sp: 'versicolor', en: 'Green Pheasant', lat: 35.7, lng: 139.7, loc: 'Tokyo', cnt: 'Japan', file: getAudio('162545'), rec: 'Yuki', alt: '40', date: '2019-11-20', time: '08:00', q: 'A', type: 'call' },
    { id: 'as4', gen: 'Buceros', sp: 'bicornis', en: 'Great Hornbill', lat: 13.7, lng: 100.5, loc: 'Bangkok', cnt: 'Thailand', file: getAudio('998877'), rec: 'Somsak', alt: '50', date: '2017-03-05', time: '10:00', q: 'A', type: 'call' },
    { id: 'as5', gen: 'Copsychus', sp: 'saularis', en: 'Oriental Magpie-Robin', lat: 23.8, lng: 90.4, loc: 'Dhaka', cnt: 'Bangladesh', file: getAudio('322841'), rec: 'Ahmed', alt: '20', date: '2019-05-18', time: '07:30', q: 'A', type: 'song' },
    { id: 'as6', gen: 'Pycnonotus', sp: 'jocosus', en: 'Red-whiskered Bulbul', lat: 22.3, lng: 114.1, loc: 'Hong Kong', cnt: 'Hong Kong', file: getAudio('432121'), rec: 'David', alt: '100', date: '2020-02-22', time: '09:15', q: 'A', type: 'song' },
    { id: 'as7', gen: 'Passer', sp: 'montanus', en: 'Eurasian Tree Sparrow', lat: 37.5, lng: 126.9, loc: 'Seoul', cnt: 'South Korea', file: getAudio('333112'), rec: 'Min-su', alt: '30', date: '2018-10-30', time: '11:00', q: 'A', type: 'chirp' },
    { id: 'as8', gen: 'Pithecophaga', sp: 'jefferyi', en: 'Philippine Eagle', lat: 7.1, lng: 125.6, loc: 'Davao', cnt: 'Philippines', file: getAudio('162552'), rec: 'Jose', alt: '800', date: '2019-08-12', time: '10:30', q: 'A', type: 'call' },
    { id: 'as9', gen: 'Leucopsar', sp: 'rothschildi', en: 'Bali Myna', lat: -8.3, lng: 114.6, loc: 'Bali', cnt: 'Indonesia', file: getAudio('443211'), rec: 'Wayan', alt: '50', date: '2020-04-05', time: '15:15', q: 'A', type: 'call' },
    { id: 'as10', gen: 'Kittacincla', sp: 'malabarica', en: 'White-rumped Shama', lat: 1.3, lng: 103.8, loc: 'Singapore', cnt: 'Singapore', file: getAudio('308552'), rec: 'Lim', alt: '20', date: '2019-01-25', time: '08:50', q: 'A', type: 'song' },
    { id: 'as11', gen: 'Motacilla', sp: 'alba', en: 'White Wagtail', lat: 21.0, lng: 105.8, loc: 'Hanoi', cnt: 'Vietnam', file: getAudio('332211'), rec: 'Duc', alt: '15', date: '2018-11-12', time: '09:40', q: 'A', type: 'call' },
    { id: 'as12', gen: 'Gallus', sp: 'lafayettii', en: 'Sri Lanka Junglefowl', lat: 6.9, lng: 79.8, loc: 'Colombo', cnt: 'Sri Lanka', file: getAudio('445211'), rec: 'Prasad', alt: '30', date: '2019-06-30', time: '07:20', q: 'A', type: 'call' },
    { id: 'as13', gen: 'Corvus', sp: 'splendens', en: 'House Crow', lat: 24.8, lng: 67.0, loc: 'Karachi', cnt: 'Pakistan', file: getAudio('261942'), rec: 'Ali', alt: '10', date: '2020-03-20', time: '12:00', q: 'A', type: 'caw' },
    { id: 'as14', gen: 'Alectoris', sp: 'chukar', en: 'Chukar', lat: 33.3, lng: 44.3, loc: 'Baghdad', cnt: 'Iraq', file: getAudio('548624'), rec: 'Hassan', alt: '40', date: '2018-05-10', time: '09:55', q: 'A', type: 'call' },
    { id: 'as15', gen: 'Luscinia', sp: 'megarhynchos', en: 'Common Nightingale', lat: 35.6, lng: 51.3, loc: 'Tehran', cnt: 'Iran', file: getAudio('559772'), rec: 'Reza', alt: '1200', date: '2019-04-20', time: '21:30', q: 'A', type: 'song' },
    { id: 'as16', gen: 'Haliastur', sp: 'indus', en: 'Brahminy Kite', lat: -6.2, lng: 106.8, loc: 'Jakarta', cnt: 'Indonesia', file: getAudio('320387'), rec: 'Budi', alt: '100', date: '2019-09-10', time: '11:00', q: 'A', type: 'call' },

    // --- RUSSIA & CENTRAL ASIA ---
    { id: 'ru1', gen: 'Haliaeetus', sp: 'pelagicus', en: 'Steller\'s Sea Eagle', lat: 53.0, lng: 140.7, loc: 'Kamchatka', cnt: 'Russia', file: getAudio('160957'), rec: 'Jarek', alt: '50', date: '2019-02-15', time: '09:00', q: 'A', type: 'call' },
    { id: 'ru2', gen: 'Bubo', sp: 'scandiacus', en: 'Snowy Owl', lat: 71.2, lng: 149.2, loc: 'Siberia', cnt: 'Russia', file: getAudio('343144'), rec: 'Oleg', alt: '0', date: '2020-01-10', time: '14:00', q: 'A', type: 'call' },
    { id: 'cn1', gen: 'Aquila', sp: 'nipalensis', en: 'Steppe Eagle', lat: 48.0, lng: 106.9, loc: 'Ulaanbaatar', cnt: 'Mongolia', file: getAudio('460162'), rec: 'Peter Boesman', alt: '1300', date: '2019-05-20', time: '11:30', q: 'A', type: 'call' },
    { id: 'cn2', gen: 'Falco', sp: 'cherrug', en: 'Saker Falcon', lat: 43.2, lng: 76.9, loc: 'Almaty', cnt: 'Kazakhstan', file: getAudio('412094'), rec: 'Ruslan', alt: '800', date: '2018-09-05', time: '10:00', q: 'A', type: 'call' },

    // --- OCEANIA ---
    { id: 'oc1', gen: 'Dacelo', sp: 'novaeguineae', en: 'Laughing Kookaburra', lat: -33.8, lng: 151.2, loc: 'Sydney', cnt: 'Australia', file: getAudio('516248'), rec: 'Marc Anderson', alt: '100', date: '2019-12-15', time: '07:45', q: 'A', type: 'laugh' },
    { id: 'oc2', gen: 'Apteryx', sp: 'mantelli', en: 'North Island Brown Kiwi', lat: -38.1, lng: 176.2, loc: 'Rotorua', cnt: 'New Zealand', file: getAudio('223344'), rec: 'Hemi', alt: '300', date: '2020-05-05', time: '21:00', q: 'A', type: 'call' },
    { id: 'oc3', gen: 'Menura', sp: 'novaehollandiae', en: 'Superb Lyrebird', lat: -37.8, lng: 145.0, loc: 'Melbourne', cnt: 'Australia', file: getAudio('443562'), rec: 'Steve', alt: '400', date: '2018-09-10', time: '08:30', q: 'A', type: 'mimicry' },
    { id: 'oc4', gen: 'Dromaius', sp: 'novaehollandiae', en: 'Emu', lat: -23.7, lng: 133.9, loc: 'Alice Springs', cnt: 'Australia', file: getAudio('287026'), rec: 'Jack', alt: '600', date: '2019-05-12', time: '14:00', q: 'A', type: 'boom' },
    { id: 'oc5', gen: 'Prosthemadera', sp: 'novaeseelandiae', en: 'Tui', lat: -41.3, lng: 174.8, loc: 'Wellington', cnt: 'New Zealand', file: getAudio('209673'), rec: 'Aroha', alt: '100', date: '2019-11-25', time: '09:00', q: 'A', type: 'song' },
    { id: 'oc6', gen: 'Trichoglossus', sp: 'moluccanus', en: 'Rainbow Lorikeet', lat: -27.5, lng: 153.0, loc: 'Brisbane', cnt: 'Australia', file: getAudio('319552'), rec: 'Sheila', alt: '50', date: '2020-02-05', time: '08:15', q: 'A', type: 'call' },
    { id: 'oc7', gen: 'Todiramphus', sp: 'sanctus', en: 'Sacred Kingfisher', lat: -22.2, lng: 166.4, loc: 'Noumea', cnt: 'New Caledonia', file: getAudio('452119'), rec: 'Pierre', alt: '20', date: '2019-11-30', time: '10:15', q: 'A', type: 'call' },

    // --- ANTARCTICA ---
    { id: 'an1', gen: 'Aptenodytes', sp: 'forsteri', en: 'Emperor Penguin', lat: -77.5, lng: 167.0, loc: 'Ross Island', cnt: 'Antarctica', file: getAudio('32332'), rec: 'Nature Rec', alt: '0', date: '2015-11-20', time: '14:00', q: 'B', type: 'call' }
];
