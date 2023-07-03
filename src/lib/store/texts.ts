import { get, readable } from "svelte/store";

const storiesData = [
  "first lorem ipsum dummy text for practice",
  "second lorem ipsum for practice",
  "third lorem ipsum dolor sit amet it is a dummy text for practice",
  "fourth lorem ipsum dolor sit amet it is a dummy text for practice",
  "fifth lorem ipsum dolor sit amet it is a dummy text for practice",
];

const stories = readable(storiesData);

export function getNextStory(currentIndex: number): (typeof storiesData)[0] {
  const totalStories = storiesData.length;
  const nextIndex = (currentIndex + 1) % totalStories;
  return storiesData[nextIndex];
}

export const allStories = get(stories);

const shortPracticeTextByLetters = [
  {
    letter: "A",
    texts: [
      "Apple art abracadabra alleyway across agony antenna",
      "Acrobat attic amaze alongside almond alpha algae",
      "Aardvark absurd active amulet angelic anguish arrow",
    ],
  },
  {
    letter: "B",
    texts: [
      "Bubble babble beeblebrox babbled bumblebee bungalow",
      "Babble bobble blubber barbwire blabber bugbear",
      "Bebop bauble bearable bobsled bloodbath bramble",
    ],
  },
  {
    letter: "C",
    texts: [
      "Cackle cobweb crackle crinkle cactus cuckoo camouflage",
      "Cacklelock concoction chalice clack cackleberry circle",
      "Chuckle crack cocaine conch cluck cockatoo caramel",
    ],
  },
  {
    letter: "D",
    texts: [
      "Doodle doddle diddle dandy dipstick doodad dandelion",
      "Doodlebug doldrums dribble dodgem dragonfly duckling",
      "Dandyism dimwit dingdong dander doodleberry drumstick",
    ],
  },
  {
    letter: "E",
    texts: [
      "Eagle elf eel equestrian enamel eager elbow elephant",
      "Earmuff ecstasy eyepatch elm equator eclipse esquire",
      "Elevate elope elixir every ember elbowroom engulf",
    ],
  },
  {
    letter: "F",
    texts: [
      "Faffle fiefdom fluff fluffy fuffle riffraff falafel",
      "Feoff fifer fluffily fluffiness fief fuff fernleaf",
      "Fluffball footfall fifeffing farfalle fuzz buffoon",
    ],
  },
  {
    letter: "G",
    texts: [
      "Giraffe grasshopper goggles garden gate grape",
      "Guitar goose giant gift ghost glitter",
      "Gingerbread goldfish glue gorilla glass glove",
    ],
  },
  {
    letter: "H",
    texts: [
      "House hippo hamburger hat helicopter horse",
      "Heart honey hotdog hammer hula hoop",
      "Hippo house helicopter hat horse hammer",
    ],
  },
  {
    letter: "I",
    texts: [
      "Ice cream igloo island ink insect",
      "Igloo iguana iron ice cream inch",
      "Island ink insect iguana ice cream",
    ],
  },
  {
    letter: "J",
    texts: [
      "Jellyfish jacket jeans juice jar",
      "Jigsaw jelly jester jump jingle",
      "Jacket jeans juice jar jellyfish",
    ],
  },
  {
    letter: "K",
    texts: [
      "Kangaroo kettle key kite koala",
      "Keyboard king kiwi karate kiss",
      "Kettle key kite koala kangaroo",
    ],
  },
  {
    letter: "L",
    texts: [
      "Lion lemon ladder lamp leaf",
      "Lollipop lizard lake ladybug leg",
      "Ladder lamp leaf lollipop lion",
    ],
  },
  {
    letter: "M",
    texts: [
      "Monkey moon mushroom mountain mouse",
      "Magnet music map mailbox motorbike",
      "Mushroom mountain mouse magnet music",
    ],
  },
  {
    letter: "N",
    texts: [
      "Ninja nest nose net newspaper",
      "Noodle nut night nurse nail",
      "Nose net newspaper noodle ninja",
    ],
  },
  {
    letter: "O",
    texts: [
      "Opulent otter often oscillate onion outfit oblige",
      "Oxygen overflow olive owl oyster odor occupy",
      "Oblong oven ocean oboe onion ocelot oddity",
    ],
  },
  {
    letter: "P",
    texts: [
      "Polish peculiar penguin pillow panda puppy pineapple",
      "Popcorn pepper parrot panda penguin pencil pizza",
      "Paddle peach pickle panther piggy pumpkin party",
    ],
  },
  {
    letter: "Q",
    texts: [
      "Quick quiet quintessential quirky quiver quote queen",
      "Quilt quack quest quarter quirk quotient quintet",
      "Quietly quick quill quintessential quirky question",
    ],
  },
  {
    letter: "R",
    texts: [
      "Rapid rocket rainbow raccoon rabbit river robot",
      "Rhythm raspberry raven roller rickshaw reptile rabbit",
      "Rock rose rooster rhino rainbow river round",
    ],
  },
  {
    letter: "S",
    texts: [
      "Sunshine snake squirrel star strawberry sea snow",
      "Sailboat surfboard seashell sunflower spider sunset",
      "Starfish snail sandwich soccer sunshine snowflake",
    ],
  },
  {
    letter: "T",
    texts: [
      "Tiger turtle tree tulip toast train tiger",
      "Tractor tomato treasure teddy bear tea time",
      "Tropical toothbrush tornado t-shirt turtle toast",
    ],
  },
  {
    letter: "U",
    texts: [
      "Umbrella unicorn unicycle universe uniform ukulele",
      "Umbrella upside down utensil underwater underwear unique",
      "Umbrella uncle uniform unicorn universe utensil",
    ],
  },
  {
    letter: "V",
    texts: [
      "Violin vase vampire vegetables volcano van",
      "Vest velvet vulture violin village viking",
      "Vase vine volcano velvet violin village",
    ],
  },
  {
    letter: "W",
    texts: [
      "Whale watermelon wagon window windmill wand",
      "Waffle walnut wolf watermelon wizard wagon",
      "Whistle winter water window windmill wolf",
    ],
  },
  {
    letter: "X",
    texts: [
      "Xylophone x-ray xenon xylophone x-ray xylophone",
      "Xerox xmas x-ray xylem xerox x-ray",
      "Xenon xmas x-ray xylophone xerox xylem",
    ],
  },
  {
    letter: "Y",
    texts: [
      "Yellow yak yogurt yawn yoyo yellow",
      "Yacht yarn yeti yolk yogurt yawn",
      "Yak yellow yarn yoyo yolk yawn",
    ],
  },
  {
    letter: "Z",
    texts: [
      "Zebra zipper zucchini zigzag zoo zebra",
      "Zombie zodiac zest zigzag zucchini zoo",
      "Zebra zipper zodiac zest zigzag zoo",
    ],
  },
];
