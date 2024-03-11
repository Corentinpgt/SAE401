import SmallCard from "./components/Card/SmallCard.jsx"
import MediumCard from "./components/Card/MediumCard.jsx"
import BigCard from "./components/Card/BigCard.jsx";
import Tag from "./components/Tag.jsx";

export default function App() {
  return (
    <>
    <SmallCard/>
    <MediumCard/>
    <BigCard/>
    {/* <Tag intent="rent" text="Rent for $4.50"/>
    <Tag intent="sub" text="Subscribe to watch"/>
    <Tag intent="free" text="Watch for free"/> */}
    {/* <Button intent="free" border="none">Watch for free</Button> */}
    </>
  )
}
