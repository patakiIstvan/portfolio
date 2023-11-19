import ResumeVersion from "@/app/_components/secions/resumeVersion/ResumeVersion"

export default function Home(props) {
  return (
   <section className="resumeVersion stretchHeight">
    <ResumeVersion version={props.searchParams.v}/>
   </section>
  )
}
