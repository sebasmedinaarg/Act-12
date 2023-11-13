// Creación de Perfil

// Nombre del estudiante
const studentName = "Manuel Lopez";

// Edad del estudiante
const studentAge = 12;

// Estado de inscripción del estudiante
const isEnrolled = true;

// Calificaciones y Asistencia

// Calificaciones
const gradeMath = 90;
const gradeScience = 80;
const gradeLanguage = 70;

// Asistencia
const totalClasses = 30;
const attendedClasses = 25;

// Calculando Estadísticas

// Promedio de calificaciones
const averageGrade = (gradeMath + gradeScience + gradeLanguage) / 3;

// Porcentaje de asistencia
const attendancePercentage = (attendedClasses / totalClasses) * 100;

// Mostrar Información

// Nombre, edad y estado de inscripción
console.log("Nombre:", studentName);
console.log("Edad:", studentAge);
console.log("Inscrito:", isEnrolled);

// Calificaciones y promedio
console.log("Calificación de matemáticas:", gradeMath);
console.log("Calificación de ciencias:", gradeScience);
console.log("Calificación de lenguaje:", gradeLanguage);
console.log("Promedio de calificaciones:", averageGrade);

// Asistencia
console.log("Total de clases:", totalClasses);
console.log("Clases asistidas:", attendedClasses);
console.log("Porcentaje de asistencia:", attendancePercentage);
