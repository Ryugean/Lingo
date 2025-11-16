import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./list";

const CoursesPage = async () => {

  const courses = await getCourses();
  const userProgess = await getUserProgress();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Language Cources
      </h1>
      <List
        courses={courses} 
        activeCourseId={userProgess?.activeCourseId}
      />
    </div>
  )
}

export default CoursesPage
