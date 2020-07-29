import React from 'react';
import Home from './home/Home';
import Work from './work/Work';
import CastingCouch from './work/Casting_Couch/CastingCouch';
import Muse from './work/Muse/Muse';
import LongLegs from './work/Yea-Shes-Got-Long-Legs-and-Huge-Tits/LongLegs';
import FiveWays from './work/5_WAYS/FiveWays';
import MeowTV from './work/meowTV/MeowTV';
import LoveFascism from './work/Love-and-Fascism-in-the-21st-Century/LoveFascism';
import ActFour from './work/Act-4/ActFour';
import SexBrief from './work/Sex-Brief/SexBrief';
import Buster from './work/Buster/Buster';
import IPhoneNotes from './work/iPhone-Notes/IPhoneNotes';
import Beige from './work/Beige/Beige';
import BangBang from './work/Bang-Bang-Youre-Mine/BangBang';
import SomethingDrawings3 from './work/something-drawings-3/SomethingDrawings3';
import SomethingDrawings2 from './work/something-drawings-2/SomethingDrawings2';
import SomethingDrawings1 from './work/something-drawings-1/SomethingDrawings1';
import SomethingFractions from './work/something-fractions/SomethingFractions';
import Text from './text/Text';
import Audio from './audio/Audio';
import ReadTheRoom from './READTHEROOM/ReadTheRoom';
const routes = {
  '/': () => <Home />,
  '/text': () => <Text />,
  '/work': () => <Work />,
  '/work/Casting-Couch': () => <CastingCouch />,
  '/work/Muse': () => <Muse />,
  '/work/Yea-Shes-Got-Long-Legs-and-Huge': () => <LongLegs/>,
  '/work/5-Ways': () => <FiveWays/>,
  '/work/meowTV': () => <MeowTV/>,
  '/work/Love-Fascism': () => <LoveFascism/>,
  '/work/Act-4': () => <ActFour/>,
  '/work/Sex-Brief': () => <SexBrief/>,
  '/work/Buster': () => <Buster/>,
  '/work/iPhone-Notes': () => <IPhoneNotes/>,
  '/work/My-Beige-Girl': () => <Beige/>,
  '/work/Bang-Bang-Youre-Mine': () => <BangBang/>,
  '/work/Something-Drawings-3': () => <SomethingDrawings3/>,
  '/work/Something-Drawings-2': () => <SomethingDrawings2/>,
  '/work/Something-Drawings-1': () => <SomethingDrawings1/>,
  '/work/Something-Fractions': () => <SomethingFractions/>,
  '/audio': () => <Audio />,
  '/READTHEROOM': () => <ReadTheRoom/>
};
export default routes;