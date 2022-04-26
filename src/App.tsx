import React, {useState} from 'react';
import './App.css';
import Accordion from "./componets/Accordion/Accordion";
import {Rating, RatingValueType} from "./componets/Rating/Rating";
import OnOff from "./componets/OnOff/OnOff";
import UnControlledAccordion from "./componets/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./componets/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./componets/OnOff/UnControlledOnOff";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn]=useState<boolean>(false)
  return (
    <div>
       {/* <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>*/}
        <Rating value={ratingValue}
                onClick={setRatingValue}
        />
        <Accordion titleValue={"Menu"}
                   collapsed={accordionCollapsed}
                   onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
        />
        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
        {/*<UnControlledAccordion titleValue={'Menu'} />*/}
        {/*<UnControlledAccordion titleValue={'Users'} />*/}
        {/*<UnControlledRating /> */}
        {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
        <UnControlledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
    </div>
  );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
