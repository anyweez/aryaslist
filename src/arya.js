export default {
    members: [{
        name: 'Joffrey Baratheon',
        role: 'Former king of Westeros',
        portrait: '/dist/assets/profiles/joffrey-baratheon.jpg',
        reasoning: 'horrible ruler, ordered Ned Stark\'s execution.',
        fate: 'Olenna Tyrell kills him by poisoning his wine.',
        alive: false,
    },{
        name: 'Cersei Lannister',
        role: 'Queen of Westeros',
        portrait: '/dist/assets/profiles/cersei-lanister.jpg',
        reasoning: `involved in Ned Stark's execution and manipulated Sansa.`,
        fate: '',
        alive: true,
    },{
        name: 'Walder Frey',
        role: 'Lord of Riverrun',
        portrait: '/dist/assets/profiles/walder-frey.jpg',
        reasoning: `killed Rob and Catelyn Stark at the Red Wedding.`,
        fate: 'Unintentionally ate two of his sons in a pie, then Arya slit his throat.',
        alive: false,
    },{
        name: 'Meryn Trant',
        role: 'Member of the Kingsguard',
        portrait: '/dist/assets/profiles/meryn-trant.jpg',
        reasoning: `killed Syrio Forel.`,
        fate: 'Arya slit his throat in a brothel in Braavos.',
        alive: false,
    },{
        name: 'Tywin Lannister',
        role: 'Head of House Lannister',
        portrait: '/dist/assets/profiles/tywin-lanister.jpg',
        reasoning: `planned Red Wedding where Rob and Catelyn were killed.`,
        fate: `Crossbow'd by Tyrion.`,
        alive: false,
    },{
        name: 'Melisandre',
        role: 'Priestess of the Lord of the Light',
        portrait: '/dist/assets/profiles/melisandre.jpg',
        reasoning: `kidnapped Gendry.`,
        fate: '',
        alive: true,
    },{
        name: 'Beric Dondarrion',
        role: 'Leader of the Brotherhood Without Banners',
        portrait: '/dist/assets/profiles/beric-dondarrion.jpg',
        reasoning: `sold Gendry to Melisandre.`,
        fate: 'Dies often but keeps coming back.',
        alive: true,
    },{
        name: 'Thoros of Myr',
        role: 'Member of the Brotherhood Without Banners',
        portrait: '/dist/assets/profiles/thoros-of-myr.jpg',
        reasoning: `sold Gendry to Melisandre.`,
        fate: '',
        alive: true,
    },{
        name: 'Ilyn Payne',
        role: 'Executioner',
        portrait: '/dist/assets/profiles/ilyn-payne.jpg',
        reasoning: `executed Ned Stark.`,
        fate: '',
        alive: true,
    },{
        name: `The Mountain`,
        role: `Knight, Queen's Guard`,
        portrait: '/dist/assets/profiles/the-mountain.jpg',
        reasoning: `tortured her at Harrenhal.`,
        fate: 'Died in a duel with Oberyn but was (somewhat) resurrected by Qyburn.',
        alive: true,
    },{
        name: 'The Hound',
        role: 'Bodyguard of Joffrey Baratheon',
        portrait: '/dist/assets/profiles/the-hound.jpg',
        reasoning: `killed Mycah, the butcher's boy.`,
        fate: `Arya believes he's dead after dueling with Brienne of Tarth.`,
        alive: true,
    },{
        name: 'Polliver',
        role: 'Soldier for House Lannister',
        portrait: '/dist/assets/profiles/polliver.jpg',
        reasoning: `killed Lommy and stole Needle.`,
        fate: `Arya stabbed him in the throat.`,
        alive: false,
    },{
        name: 'Rorge',
        role: `Criminal and Night's Watchman`,
        portrait: '/dist/assets/profiles/rorge.jpg',
        reasoning: `threatened to rape Arya and tortures others.`,
        fate: `Arya stabs him immediately after learning his name.`,
        alive: false,
    },].sort(byName)
};

function byName(first, second) {
    return first.name < second.name ? -1 : 1;
}