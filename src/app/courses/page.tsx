import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import courses from '@/utils/courses';

export default function CoursesPage() {
  return (
    <div>
      <Header />
      <main className="px-8 pb-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Todos los cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
