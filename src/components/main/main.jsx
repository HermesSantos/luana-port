import { TheFooter } from "../footer/footer"
import { Hello } from "../hello/hello"
import { PhotoSection } from "../photoSection/photoSection"
import { Works } from "../works/works"

export const MainBody = () => {
  return (
    <>
      <PhotoSection/>
      <Hello/>
      {/* <Works/> */}
      <TheFooter/>
    </>
  )
}