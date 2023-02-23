import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord, faInstagram, 
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars, faTimes, faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import WhiteKKLogo from '../../assets/WhiteKKLogo.png'

import BlueBG from '../../assets/forest_data/Background/BlueBG.png'
import CyanBG from '../../assets/forest_data/Background/CyanBG.png'
import GreenBG from '../../assets/forest_data/Background/GreenBG.png'
import GreyscaleBG from '../../assets/forest_data/Background/GreyscaleBG.png'
import OrangeBG from '../../assets/forest_data/Background/OrangeBG.png'
import PinkBG from '../../assets/forest_data/Background/PinkBG.png'
import PurpleBG from '../../assets/forest_data/Background/PurpleBG.png'
import RedBG from '../../assets/forest_data/Background/RedBG.png'
import YellowBG from '../../assets/forest_data/Background/YellowBG.png'

import Cyan from '../../assets/forest_data/Base Koala/Cyan.png'
import Blue from '../../assets/forest_data/Base Koala/Blue.png'
import Brown from '../../assets/forest_data/Base Koala/Brown.png'
import DarkBlue from '../../assets/forest_data/Base Koala/DarkBlue.png'
import DarkGreen from '../../assets/forest_data/Base Koala/DarkGreen.png'
import DarkPurple from '../../assets/forest_data/Base Koala/DarkPurple.png'
import DarkRed from '../../assets/forest_data/Base Koala/DarkRed.png'
import Green from '../../assets/forest_data/Base Koala/Green.png'
import Grey from '../../assets/forest_data/Base Koala/Grey.png'
import Midnight from '../../assets/forest_data/Base Koala/Midnight.png'
import Orange from '../../assets/forest_data/Base Koala/Orange.png'
import Pink from '../../assets/forest_data/Base Koala/Pink.png'
import Purple from '../../assets/forest_data/Base Koala/Purple.png'
import Red from '../../assets/forest_data/Base Koala/Red.png'
import Snow from '../../assets/forest_data/Base Koala/Snow.png'

import AngryEyes from '../../assets/forest_data/Eyes/AngryEyes.png'
import AviatorGlasses from '../../assets/forest_data/Eyes/AviatorGlasses.png'
import BlackEyes from '../../assets/forest_data/Eyes/Black.png'
import Blindfold from '../../assets/forest_data/Eyes/Blindfold.png'
import BloodshotEyes from '../../assets/forest_data/Eyes/BloodshotEyes.png'
import BlueEyes from '../../assets/forest_data/Eyes/Blue.png'
import Charon_sObol from '../../assets/forest_data/Eyes/Charon_sObol.png'
import ClosedEyes from '../../assets/forest_data/Eyes/ClosedEyes.png'
import DemonicEyes from '../../assets/forest_data/Eyes/DemonicEyes.png'
import EnergeticEyes from '../../assets/forest_data/Eyes/EnergeticEyes.png'
import Eyepatch from '../../assets/forest_data/Eyes/Eyepatch.png'
import FrogEyes from '../../assets/forest_data/Eyes/FrogEyes.png'
import GreenEyes from '../../assets/forest_data/Eyes/Green.png'
import LaserEyes from '../../assets/forest_data/Eyes/LaserEyes.png'
import OrangeEyes from '../../assets/forest_data/Eyes/Orange.png'
import PinkEyes from '../../assets/forest_data/Eyes/Pink.png'
import PurpleEyes from '../../assets/forest_data/Eyes/Purple.png'
import RedEyes from '../../assets/forest_data/Eyes/Red.png'
import ScaredEyes from '../../assets/forest_data/Eyes/ScaredEyes.png'
import Shades from '../../assets/forest_data/Eyes/Shades.png'
import ShutterShades from '../../assets/forest_data/Eyes/ShutterShades.png'
import SleepyEyes from '../../assets/forest_data/Eyes/SleepyEyes.png'
import SnakeEyes from '../../assets/forest_data/Eyes/SnakeEyes.png'
import TearyEyes from '../../assets/forest_data/Eyes/TearyEyes.png'
import WhiteEyes from '../../assets/forest_data/Eyes/White.png'
import YellowEyes from '../../assets/forest_data/Eyes/Yellow.png'

import Angel from '../../assets/forest_data/Outfit/Angel.png'
import BikerJacket from '../../assets/forest_data/Outfit/BikerJacket.png'
import Decomposing from '../../assets/forest_data/Outfit/Decomposing.png'
import Demon from '../../assets/forest_data/Outfit/Demon.png'
import Chiton from '../../assets/forest_data/Outfit/Chiton.png'
import MadScientistLabCoat from '../../assets/forest_data/Outfit/MadScientistLabCoat.png'
import MedievalArmour from '../../assets/forest_data/Outfit/MedievalArmour.png'
import PrisonOutfit from '../../assets/forest_data/Outfit/PrisonOutfit.png'
import Stitches from '../../assets/forest_data/Outfit/Stitches.png'
import TacticalVest from '../../assets/forest_data/Outfit/TacticalVest.png'
import Tuxedo from '../../assets/forest_data/Outfit/Tuxedo.png'
import BlackHoodie from '../../assets/forest_data/Outfit/BlackHoodie.png'
import BlueHoodie from '../../assets/forest_data/Outfit/BlueHoodie.png'
import GreenHoodie from '../../assets/forest_data/Outfit/GreenHoodie.png'
import GreyHoodie from '../../assets/forest_data/Outfit/GreyHoodie.png'
import OrangeHoodie from '../../assets/forest_data/Outfit/OrangeHoodie.png'
import PinkHoodie from '../../assets/forest_data/Outfit/PinkHoodie.png'
import PurpleHoodie from '../../assets/forest_data/Outfit/PurpleHoodie.png'
import RedHoodie from '../../assets/forest_data/Outfit/RedHoodie.png'
import WhiteHoodie from '../../assets/forest_data/Outfit/WhiteHoodie.png'
import YellowHoodie from '../../assets/forest_data/Outfit/YellowHoodie.png'
import BlackOversized from '../../assets/forest_data/Outfit/BlackOversized.png'
import BlueOversized from '../../assets/forest_data/Outfit/BlueOversized.png'
import GreenOversized from '../../assets/forest_data/Outfit/GreenOversized.png'
import GreyOversized from '../../assets/forest_data/Outfit/GreyOversized.png'
import OrangeOversized from '../../assets/forest_data/Outfit/OrangeOversized.png'
import PinkOversized from '../../assets/forest_data/Outfit/PinkOversized.png'
import PurpleOversized from '../../assets/forest_data/Outfit/PurpleOversized.png'
import RedOversized from '../../assets/forest_data/Outfit/RedOversized.png'
import WhiteOversized from '../../assets/forest_data/Outfit/WhiteOversized.png'
import YellowOversized from '../../assets/forest_data/Outfit/YellowOversized.png'
import BlackSinglet from '../../assets/forest_data/Outfit/BlackSinglet.png'
import BlueSinglet from '../../assets/forest_data/Outfit/BlueSinglet.png'
import GreenSinglet from '../../assets/forest_data/Outfit/GreenSinglet.png'
import GreySinglet from '../../assets/forest_data/Outfit/GreySinglet.png'
import OrangeSinglet from '../../assets/forest_data/Outfit/OrangeSinglet.png'
import PinkSinglet from '../../assets/forest_data/Outfit/PinkSinglet.png'
import PurpleSinglet from '../../assets/forest_data/Outfit/PurpleSinglet.png'
import RedSinglet from '../../assets/forest_data/Outfit/RedSinglet.png'
import WhiteSinglet from '../../assets/forest_data/Outfit/WhiteSinglet.png'
import YellowSinglet from '../../assets/forest_data/Outfit/YellowSinglet.png'

import BaseMouth from '../../assets/forest_data/Mouth/BaseMouth.png'
import BleedingMouth from '../../assets/forest_data/Mouth/BleedingMouth.png'
import Brace from '../../assets/forest_data/Mouth/Brace.png'
import Charon_sObolMouth from '../../assets/forest_data/Mouth/Charon_sObol.png'
import DemonicMouth from '../../assets/forest_data/Mouth/DemonicMouth.png'
import GoldGrilles from '../../assets/forest_data/Mouth/GoldGrilles.png'
import JokerMouth from '../../assets/forest_data/Mouth/JokerMouth.png'
import LaserMouth from '../../assets/forest_data/Mouth/LaserMouth.png'
import OpenMouth from '../../assets/forest_data/Mouth/OpenMouth.png'
import OrcFangs from '../../assets/forest_data/Mouth/OrcFangs.png'
import RoaringMouth from '../../assets/forest_data/Mouth/RoaringMouth.png'
import SadMouth from '../../assets/forest_data/Mouth/SadMouth.png'
import Salivating from '../../assets/forest_data/Mouth/Salivating.png'
import Smile from '../../assets/forest_data/Mouth/Smile.png'
import Smirk from '../../assets/forest_data/Mouth/Smirk.png'
import StitchedMouth from '../../assets/forest_data/Mouth/StitchedMouth.png'
import VampireFangs from '../../assets/forest_data/Mouth/VampireFangs.png'
import Whistling from '../../assets/forest_data/Mouth/Whistling.png'

import Bald from '../../assets/forest_data/Headwear/Bald.png'
import DevilHorns from '../../assets/forest_data/Headwear/DevilHorns.png'
import EmoHair from '../../assets/forest_data/Headwear/EmoHair.png'
import ForeheadGem from '../../assets/forest_data/Headwear/ForeheadGem.png'
import GlassHead from '../../assets/forest_data/Headwear/GlassHead.png'
import Halo from '../../assets/forest_data/Headwear/Halo.png'
import HeadMetalSpikes from '../../assets/forest_data/Headwear/HeadMetalSpikes.png'
import HermesWings from '../../assets/forest_data/Headwear/HermesWings.png'
import HoleThroughForehead from '../../assets/forest_data/Headwear/HoleThroughForehead.png'
import Mohawk from '../../assets/forest_data/Headwear/Mohawk.png'
import Pompadour from '../../assets/forest_data/Headwear/Pompadour.png'
import FrankensteinStitches from '../../assets/forest_data/Headwear/FrankensteinStitches.png'
import SniperTarget from '../../assets/forest_data/Headwear/SniperTarget.png'
import BlackBaseball from '../../assets/forest_data/Headwear/BlackBaseball.png'
import BlueBaseball from '../../assets/forest_data/Headwear/BlueBaseball.png'
import GreenBaseball from '../../assets/forest_data/Headwear/GreenBaseball.png'
import GreyBaseball from '../../assets/forest_data/Headwear/GreyBaseball.png'
import OrangeBaseball from '../../assets/forest_data/Headwear/OrangeBaseball.png'
import PinkBaseball from '../../assets/forest_data/Headwear/PinkBaseball.png'
import PurpleBaseball from '../../assets/forest_data/Headwear/PurpleBaseball.png'
import RedBaseball from '../../assets/forest_data/Headwear/RedBaseball.png'
import WhiteBaseball from '../../assets/forest_data/Headwear/WhiteBaseball.png'
import YellowBaseball from '../../assets/forest_data/Headwear/YellowBaseball.png'
import BlackBeanie from '../../assets/forest_data/Headwear/BlackBeanie.png'
import BlueBeanie from '../../assets/forest_data/Headwear/BlueBeanie.png'
import GreenBeanie from '../../assets/forest_data/Headwear/GreenBeanie.png'
import GreyBeanie from '../../assets/forest_data/Headwear/GreyBeanie.png'
import OrangeBeanie from '../../assets/forest_data/Headwear/OrangeBeanie.png'
import PinkBeanie from '../../assets/forest_data/Headwear/PinkBeanie.png'
import PurpleBeanie from '../../assets/forest_data/Headwear/PurpleBeanie.png'
import RedBeanie from '../../assets/forest_data/Headwear/RedBeanie.png'
import WhiteBeanie from '../../assets/forest_data/Headwear/WhiteBeanie.png'
import YellowBeanie from '../../assets/forest_data/Headwear/YellowBeanie.png'

import Airpods from '../../assets/forest_data/Ears/Airpods.png'
import Earcuffs from '../../assets/forest_data/Ears/Earcuffs.png'
import Earstud from '../../assets/forest_data/Ears/EarStud.png'
import EarstudsAndCuffs from '../../assets/forest_data/Ears/EarstudsAndCuffs.png'
import Earrings from '../../assets/forest_data/Ears/Earrings.png'
import EarringsAndCuffs from '../../assets/forest_data/Ears/EarringsAndCuffs.png'



const background_asset = [
    {
        img: BlueBG,
        name: 'Blue',
        rarityScore: 'xx'
    },
    {
        img: CyanBG,
        name: 'Cyan',
        rarityScore: 'xx'
    },
    {
        img: GreenBG,
        name: 'Green',
        rarityScore: 'xx'
    },
    {
        img: GreyscaleBG,
        name: 'Greyscale',
        rarityScore: 'xx'
    },
    {
        img: OrangeBG,
        name: 'Orange',
        rarityScore: 'xx'
    },
    {
        img: PinkBG,
        name: 'Pink',
        rarityScore: 'xx'
    },
    {
        img: PurpleBG,
        name: 'Purple',
        rarityScore: 'xx'
    },
    {
        img: RedBG,
        name: 'Red',
        rarityScore: 'xx'
    },
    {
        img: YellowBG,
        name: 'Yellow',
        rarityScore: 'xx'
    },
    
]

const koala_asset = [
    {
        img: Cyan,
        name: 'Cyan',
        rarityScore: 'xx'
    },
    {
        img: Blue,
        name: 'Blue',
        rarityScore: 'xx'
    },
    {
        img: Brown,
        name: 'Brown',
        rarityScore: 'xx'
    },
    {
        img: DarkBlue,
        name: 'Dark Blue',
        rarityScore: 'xx'
    },
    {
        img: DarkGreen,
        name: 'Dark Green',
        rarityScore: 'xx'
    },
    {
        img: DarkPurple,
        name: 'Dark Purple',
        rarityScore: 'xx'
    },
    {
        img: DarkRed,
        name: 'Dark Red',
        rarityScore: 'xx'
    },
    {
        img: Green,
        name: 'Green',
        rarityScore: 'xx'
    },
    {
        img: Grey,
        name: 'Grey',
        rarityScore: 'xx'
    },
    {
        img: Midnight,
        name: 'Midnight',
        rarityScore: 'xx'
    },
    {
        img: Orange,
        name: 'Orange',
        rarityScore: 'xx'
    },
    {
        img: Pink,
        name: 'Pink',
        rarityScore: 'xx'
    },
    {
        img: Purple,
        name: 'Purple',
        rarityScore: 'xx'
    },
    {
        img: Red,
        name: 'Red',
        rarityScore: 'xx'
    },
    {
        img: Snow,
        name: 'Snow',
        rarityScore: 'xx'
    },
]

const eyes_asset = [
    {
        img: AngryEyes,
        name: 'Angry',
        rarityScore: 'xx'
    },
    {
        img: AviatorGlasses,
        name: 'Aviators',
        rarityScore: 'xx'
    },
    {
        img: Blindfold,
        name: 'Blindfold',
        rarityScore: 'xx'
    },
    {
        img: BloodshotEyes,
        name: 'Bloodshot',
        rarityScore: 'xx'
    },
    {
        img: Charon_sObol,
        name: 'Charon_sObol',
        rarityScore: 'xx'
    },
    {
        img: ClosedEyes,
        name: 'Closed',
        rarityScore: 'xx'
    },
    {
        img: DemonicEyes,
        name: 'Demonic',
        rarityScore: 'xx'
    },
    {
        img: EnergeticEyes,
        name: 'Energetic',
        rarityScore: 'xx'
    },
    {
        img: Eyepatch,
        name: 'Eyepatch',
        rarityScore: 'xx'
    },
    {
        img: FrogEyes,
        name: 'Frog Eyes',
        rarityScore: 'xx'
    },
    {
        img: LaserEyes,
        name: 'Laser',
        rarityScore: 'xx'
    },
    {
        img: ScaredEyes,
        name: 'Scared',
        rarityScore: 'xx'
    },
    {
        img: Shades,
        name: 'Shades',
        rarityScore: 'xx'
    },
    {
        img: ShutterShades,
        name: 'Shutter Shades',
        rarityScore: 'xx'
    },
    {
        img: SleepyEyes,
        name: 'Sleepy',
        rarityScore: 'xx'
    },
    {
        img: SnakeEyes,
        name: 'Snake',
        rarityScore: 'xx'
    },
    {
        img: TearyEyes,
        name: 'Teary',
        rarityScore: 'xx'
    },
    {
        img: WhiteEyes,
        name: 'White',
        rarityScore: 'xx'
    },
    {
        img: YellowEyes,
        name: 'Yellow',
        rarityScore: 'xx'
    },
    {
        img: BlackEyes,
        name: 'Black',
        rarityScore: 'xx'
    },
    {
        img: BlueEyes,
        name: 'Blue',
        rarityScore: 'xx'
    },
    {
        img: GreenEyes,
        name: 'Green',
        rarityScore: 'xx'
    },
    {
        img: OrangeEyes,
        name: 'Orange',
        rarityScore: 'xx'
    },
    {
        img: PinkEyes,
        name: 'Pink',
        rarityScore: 'xx'
    },
    {
        img: PurpleEyes,
        name: 'Purple',
        rarityScore: 'xx'
    },
    {
        img: RedEyes,
        name: 'Red',
        rarityScore: 'xx'
    },
]

const outfit_asset = [
    {
        img: Angel,
        name: 'Angel',
        rarityScore: 'xx'
    },
    {
        img: BikerJacket,
        name: 'Biker Jacket',
        rarityScore: 'xx'
    },
    {
        img: Chiton,
        name: 'Chiton',
        rarityScore: 'xx'
    },
    {
        img: Decomposing,
        name: 'Decomposing',
        rarityScore: 'xx'
    },
    {
        img: Demon,
        name: 'Demon',
        rarityScore: 'xx'
    },
    {
        img: MadScientistLabCoat,
        name: 'Mad Scientist Lab Coat',
        rarityScore: 'xx'
    },
    {
        img: MedievalArmour,
        name: 'Medieval Armour',
        rarityScore: 'xx'
    },
    {
        img: PrisonOutfit,
        name: 'Prison',
        rarityScore: 'xx'
    },
    {
        img: Stitches,
        name: 'Stitches',
        rarityScore: 'xx'
    },
    {
        img: TacticalVest,
        name: 'Tactical Vest',
        rarityScore: 'xx'
    },
    {
        img: Tuxedo,
        name: 'Tuxedo',
        rarityScore: 'xx'
    },
    {
        img: BlackHoodie,
        name: 'Black',
        rarityScore: 'xx'
    },
    {
        img: BlueHoodie,
        name: 'Blue',
        rarityScore: 'xx'
    },
    {
        img: GreenHoodie,
        name: 'Green',
        rarityScore: 'xx'
    },
    {
        img: GreyHoodie,
        name: 'Grey',
        rarityScore: 'xx'
    },
    {
        img: OrangeHoodie,
        name: 'Orange',
        rarityScore: 'xx'
    },
    {
        img: PinkHoodie,
        name: 'Pink',
        rarityScore: 'xx'
    },
    {
        img: PurpleHoodie,
        name: 'Purple',
        rarityScore: 'xx'
    },
    {
        img: RedHoodie,
        name: 'Red',
        rarityScore: 'xx'
    },
    {
        img: YellowHoodie,
        name: 'Yellow',
        rarityScore: 'xx'
    },
    {
        img: WhiteHoodie,
        name: 'White',
        rarityScore: 'xx'
    },
    {
        img: BlackOversized,
        name: 'Black Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: BlueOversized,
        name: 'Blue Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: GreenOversized,
        name: 'Green Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: GreyOversized,
        name: 'Grey Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: OrangeOversized,
        name: 'Orange Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: PinkOversized,
        name: 'Pink Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: PurpleOversized,
        name: 'Purple Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: RedOversized,
        name: 'Red Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: WhiteOversized,
        name: 'White Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: YellowOversized,
        name: 'Yellow Oversized Tee',
        rarityScore: 'xx'
    },
    {
        img: BlackSinglet,
        name: 'Black Singlet',
        rarityScore: 'xx'
    },
    {
        img: BlueSinglet,
        name: 'Blue Singlet',
        rarityScore: 'xx'
    },
    {
        img: GreenSinglet,
        name: 'Green Singlet',
        rarityScore: 'xx'
    },
    {
        img: GreySinglet,
        name: 'Grey Singlet',
        rarityScore: 'xx'
    },
    {
        img: OrangeSinglet,
        name: 'Orange Singlet',
        rarityScore: 'xx'
    },
    {
        img: PinkSinglet,
        name: 'Pink Singlet',
        rarityScore: 'xx'
    },
    {
        img: PurpleSinglet,
        name: 'Purple Singlet',
        rarityScore: 'xx'
    },
    {
        img: RedSinglet,
        name: 'Red Singlet',
        rarityScore: 'xx'
    },
    {
        img: WhiteSinglet,
        name: 'White Singlet',
        rarityScore: 'xx'
    },
    {
        img: YellowSinglet,
        name: 'Yellow Singlet',
        rarityScore: 'xx'
    },
]

const mouth_asset = [
    {
        img: BaseMouth,
        name: 'Base Mouth',
        rarityScore: 'xx'
    },
    {
        img: BleedingMouth,
        name: 'Bleeding',
        rarityScore: 'xx'
    },
    {
        img: Brace,
        name: 'Brace',
        rarityScore: 'xx'
    },
    {
        img: Charon_sObolMouth,
        name: 'Charon_sObol',
        rarityScore: 'xx'
    },
    {
        img: DemonicMouth,
        name: 'Demonic',
        rarityScore: 'xx'
    },
    {
        img: GoldGrilles,
        name: 'Gold Grilles',
        rarityScore: 'xx'
    },
    {
        img: JokerMouth,
        name: 'Joker',
        rarityScore: 'xx'
    },
    {
        img: LaserMouth,
        name: 'Laser',
        rarityScore: 'xx'
    },
    {
        img: OpenMouth,
        name: 'Open Mouth',
        rarityScore: 'xx'
    },
    {
        img: OrcFangs,
        name: 'Orc Fangs',
        rarityScore: 'xx'
    },
    {
        img: RoaringMouth,
        name: 'Roaring',
        rarityScore: 'xx'
    },
    {
        img: SadMouth,
        name: 'Sad Mouth',
        rarityScore: 'xx'
    },
    {
        img: Salivating,
        name: 'Salivating',
        rarityScore: 'xx'
    },
    {
        img: Smile,
        name: 'Smile',
        rarityScore: 'xx'
    },
    {
        img: Smirk,
        name: 'Smirk',
        rarityScore: 'xx'
    },
    {
        img: StitchedMouth,
        name: 'Stitched',
        rarityScore: 'xx'
    },
    {
        img: VampireFangs,
        name: 'Vampire Fangs',
        rarityScore: 'xx'
    },
    {
        img: Whistling,
        name: 'Whistling',
        rarityScore: 'xx'
    },
]

const headwear_asset = [
    {
        img: Bald,
        name: 'Bald',
        rarityScore: 'xx'
    },
    {
        img: DevilHorns,
        name: 'Devil Horns',
        rarityScore: 'xx'
    },
    {
        img: EmoHair,
        name: 'Emo Hair',
        rarityScore: 'xx'
    },
    {
        img: ForeheadGem,
        name: 'Forehead Gem',
        rarityScore: 'xx'
    },
    {
        img: FrankensteinStitches,
        name: 'Frankenstein Stitches',
        rarityScore: 'xx'
    },
    {
        img: GlassHead,
        name: 'Glass Head',
        rarityScore: 'xx'
    },
    {
        img: Halo,
        name: 'Halo',
        rarityScore: 'xx'
    },
    {
        img: HeadMetalSpikes,
        name: 'Head Metal Spikes',
        rarityScore: 'xx'
    },
    {
        img: HermesWings,
        name: 'Hermes Wings',
        rarityScore: 'xx'
    },
    {
        img: HoleThroughForehead,
        name: 'Hole Through Forehead',
        rarityScore: 'xx'
    },
    {
        img: Mohawk,
        name: 'Mohawk',
        rarityScore: 'xx'
    },
    {
        img: Pompadour,
        name: 'Pompadour',
        rarityScore: 'xx'
    },
    {
        img: SniperTarget,
        name: 'Sniper Target',
        rarityScore: 'xx'
    },
    {
        img: BlackBaseball,
        name: 'Black Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: BlueBaseball,
        name: 'Blue Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: GreenBaseball,
        name: 'Green Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: GreyBaseball,
        name: 'Grey Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: OrangeBaseball,
        name: 'Orange Baseball cap',
        rarityScore: 'xx'
    },
    {
        img: PinkBaseball,
        name: 'Pink Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: PurpleBaseball,
        name: 'Purple Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: RedBaseball,
        name: 'Red Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: WhiteBaseball,
        name: 'White Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: YellowBaseball,
        name: 'Yellow Baseball Cap',
        rarityScore: 'xx'
    },
    {
        img: BlackBeanie,
        name: 'Black Beanie',
        rarityScore: 'xx'
    },
    {
        img: BlueBeanie,
        name: 'Blue Beanie',
        rarityScore: 'xx'
    },
    {
        img: GreenBeanie,
        name: 'Green Beanie',
        rarityScore: 'xx'
    },
    {
        img: GreyBeanie,
        name: 'Grey Beanie',
        rarityScore: 'xx'
    },
    {
        img: OrangeBeanie,
        name: 'Orange Beanie',
        rarityScore: 'xx'
    },
    {
        img: PinkBeanie,
        name: 'Pink Beanie',
        rarityScore: 'xx'
    },
    {
        img: PurpleBeanie,
        name: 'Purple Beanie',
        rarityScore: 'xx'
    },
    {
        img: RedBeanie,
        name: 'Red Beanie',
        rarityScore: 'xx'
    },
    {
        img: WhiteBeanie,
        name: 'White Beanie',
        rarityScore: 'xx'
    },
    {
        img: YellowBeanie,
        name: 'Yellow Beanie',
        rarityScore: 'xx'
    },
]

const ears_asset = [
    {
        img: Airpods,
        name: 'Airpods',
        rarityScore: 'xx'
    },
    {
        img: Earstud,
        name: 'Ear Stud',
        rarityScore: 'xx'
    },
    {
        img: Earcuffs,
        name: 'Ear Cuffs',
        rarityScore: 'xx'
    },
    {
        img: Earrings,
        name: 'Earrings',
        rarityScore: 'xx'
    },
    {
        img: EarringsAndCuffs,
        name: 'Earrings and Cuffs',
        rarityScore: 'xx'
    },
    {
        img: EarstudsAndCuffs,
        name: 'Ear Studs and Cuffs',
        rarityScore: 'xx'
    },
]

const styling = {
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px 0px                                                          '
    },
    image: {
        width: '100px',
        height: '100px',
        backgroundColor: '#212121'
    }
}

const Section = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10rem;
width: 80%;
margin: auto;
font-size: 18px;
font-weight: light;
`

const MobileSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding-right: 2.2rem;
padding-left: 2.2rem;
gap: 3rem;
margin-bottom: 4rem;
`

const Container = styled.div`
width: 85%;
margin: 0rem auto 0rem;
`

const MobileContainer = styled.div`
width: 85%;
margin: 0rem auto 0rem;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 5px 0px;
`

const Navigation = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem auto 3rem;
padding: 1rem 5%;
background-color: #272725;
border-radius: 5px;
`

const MobileNavigation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 1rem auto 3rem;
padding: 1rem 5%;
background-color: #272725;
border-radius: 5px;
`

const MobileNavContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 3rem 0rem 3rem;
`


const MobileNavbar = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #272725;
z-index: 2;
overflow: hidden;
`


const TheForest = () => {

    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1100
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const [open, setOpen] = useState(false)

    const openNavbar = () => {
        setOpen(true)
    }

    const closeNavbar = () => {
        setOpen(false)
    }

    const ConditionalRendering = () => {
        if (open) {
            return (
                <Fragment>
                    <MobileNavbar>
                        <div style={{height: '3rem', display: 'flex', alignItems: 'center'}}>
                            <p style={{marginLeft: '1rem'}} onClick={closeNavbar}><FontAwesomeIcon icon={faAngleLeft} onClick={closeNavbar}/> Back</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                            <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginTop: '2rem'}} alt='Logo'/>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '1.5rem', gap: '0.6rem'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Home</a>
                                <a href='/#perks' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Perks</a>
                                <a href='/roadmap' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Roadmap</a>
                                <a href='/#kreators' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Kreators</a>
                                <a href='/theforest' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>The Forest</a>
                                <a href='/krewbrew' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Krew Brew</a>
                            </div>
                        </div>
                        <div style={{width: '30%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem'}}>
                            <a href='https://twitter.com/KoalaKrewNFT' alt='Twitter'><FontAwesomeIcon icon={faTwitter} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Instagram'><FontAwesomeIcon icon={faInstagram} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Discord'><FontAwesomeIcon icon={faDiscord} style={{color: '#d9d9d9'}}/></a>
                        </div>
                    </MobileNavbar>
                </Fragment>
            )
        } else if (!open && mobileView) {
            return (
                displayMobile()
            )
        } else {
            return (
                displayDesktop()
            )
        }
    }

    const displayDesktop = () => {
        return (
            <Fragment>
                <Navbar/>
                <Container>
                    <h1>The Forest</h1>
                    <Navigation>
                        <a href='#basekoala' style={{textDecoration: 'none', color: 'white'}}>Base Koala</a>
                        <a href='#headwear' style={{textDecoration: 'none', color: 'white'}}>Headwear</a>
                        <a href='#outfit' style={{textDecoration: 'none', color: 'white'}}>Outfit</a>
                        <a href='#ears' style={{textDecoration: 'none', color: 'white'}}>Ears</a>
                        <a href='#eyes' style={{textDecoration: 'none', color: 'white'}}>Eyes</a>
                        <a href='#mouth' style={{textDecoration: 'none', color: 'white'}}>Mouth</a>
                        <a href='#background' style={{textDecoration: 'none', color: 'white'}}>Background</a>
                    </Navigation>
                    <Section>
                        {/* Background Section*/}
                        <div>
                            <h2 id='basekoala' style={{color: '#E349AA'}}>Base Koala</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {koala_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 style={{color: '#E349AA'}}>Mouth</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {mouth_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p style={{paddingTop: '1rem'}}>{data.name}</p>
                                        </div>
                                        <span style={{paddingTop: '1rem'}}>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>

                        <div>
                            <h2 id='headwear' style={{color: '#E349AA'}}>Headwear</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {headwear_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={{...styling.image, paddingTop: '1rem'}}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 id='outfit' style={{color: '#E349AA'}}>Outfit</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {outfit_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p style={{paddingTop: '2rem'}}>{data.name}</p>
                                        </div>
                                        <span style={{paddingTop: '2rem'}}>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>

                        <div>
                            <h2 id='eyes' style={{color: '#E349AA'}}>Eyes</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {eyes_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>

    
                        <div>
                            <h2 id='background' style={{color: '#E349AA'}}>Background</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {background_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>

                        <div style={{marginBottom: '3rem'}}>
                            <h2 id='ears' style={{color: '#E349AA'}}>Ears</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {ears_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                    </Section>
                    <Footer/>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <MobileNavContainer>
                    <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginRight: '2rem'}} alt='Logo'/>
                    {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar}/>}
                    {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar}/>}
                </MobileNavContainer>
                <MobileContainer>
                    <MobileNavigation>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <a href='#basekoala' style={{textDecoration: 'none', color: 'white'}}>Base Koala</a>
                            <a href='#headwear' style={{textDecoration: 'none', color: 'white'}}>Headwear</a>
                            <a href='#outfit' style={{textDecoration: 'none', color: 'white'}}>Outfit</a>
                            <a href='#ears' style={{textDecoration: 'none', color: 'white'}}>Ears</a>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '1.5rem'}}>
                            <a href='#eyes' style={{textDecoration: 'none', color: 'white'}}>Eyes</a>
                            <a href='#mouth' style={{textDecoration: 'none', color: 'white'}}>Mouth</a>
                            <a href='#background' style={{textDecoration: 'none', color: 'white'}}>Background</a>
                        </div>
                    </MobileNavigation>
                    <MobileSection>
                        {/* Background Section*/}
                        <div>
                            <h2 id='basekoala' style={{color: '#E349AA'}}>Base Koala</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {koala_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 id='eyes' style={{color: '#E349AA'}}>Eyes</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {eyes_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 id='outfit' style={{color: '#E349AA'}}>Outfit</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {outfit_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p style={{paddingTop: '2rem'}}>{data.name}</p>
                                        </div>
                                        <span style={{paddingTop: '2rem'}}>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 id='mouth' style={{color: '#E349AA'}}>Mouth</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {mouth_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p style={{paddingTop: '1rem'}}>{data.name}</p>
                                        </div>
                                        <span style={{paddingTop: '1rem'}}>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
        
                        <div>
                            <h2 id='headwear' style={{color: '#E349AA'}}>Headwear</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {headwear_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={{...styling.image, paddingTop: '1rem'}}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                        <div>
                            <h2 id='background' style={{color: '#E349AA'}}>Background</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {background_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>

                        <div>
                            <h2 id='ears' style={{color: '#E349AA'}}>Ears</h2>
                            <div style={styling.heading}>
                                <p>Name</p>
                                <p>Rarity Score</p>
                            </div>
                            {ears_asset.map((data) => {
                                return (
                                    <Content>
                                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                            <img src={data.img} alt='Cyan' style={styling.image}/>
                                            <p>{data.name}</p>
                                        </div>
                                        <span>{data.rarityScore}</span>
                                    </Content>
                                )
                            })}
                        </div>
    
                    </MobileSection>
                    <Footer/>
                </MobileContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {ConditionalRendering()}
        </Fragment>
        
    )
}

export default TheForest