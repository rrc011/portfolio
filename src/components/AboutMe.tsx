import { useDetectLanguage } from '@/core/hooks/useDetectLanguage';
import me from '../assets/images/me.jpg';

export const AboutMe = () => {
  const language = useDetectLanguage();

  const birth = new Date('1994-12-11');

  const myAge = new Date().getFullYear() - birth.getFullYear();

  const ABOUT_ES = (
    <>
      <p>
        Me llamo Rafael Rodriguez, tengo {myAge} años y soy un apasionado de la tecnología. Empecé en la programación en
        el año 2015 y desde entoces y{' '}
        <strong>desde entonces he estado inmerso en el fascinante mundo del desarrollo de software</strong>.
      </p>
      <p>
        Me encanta JavaScript por su facilidad de uso y la diversidad de frameworks que ofrece. He tenido la oportunidad
        de trabajar con Angular, Vue y React en diferentes proyectos, explorando y aprovechando las capacidades únicas
        de cada uno de ellos.{' '}
        <strong>
          Además, he incorporado Node.js en mis proyectos personales, ampliando así mi conjunto de habilidades y
          explorando nuevas posibilidades en el desarrollo web
        </strong>
        .
      </p>
      <p>
        Mi experiencia con C# y .NET se extiende a lo largo de varios proyectos empresariales, donde he aprovechado las
        capacidades del lenguaje y el framework para desarrollar aplicaciones eficientes y de alta calidad.
        <strong>
          La modularidad y la seguridad inherentes a C# junto con la versatilidad de .NET Core me han permitido abordar
          desafíos complejos y entregar soluciones confiables a lo largo del tiempo
        </strong>
        .
      </p>
    </>
  );

  const ABOUT_EN = (
    <>
      <p>
        My name is Rafael Rodriguez, I am {myAge} years old, and I am passionate about technology. I started my journey
        in programming back in 2015, and{' '}
        <strong>since then, I have been immersed in the fascinating world of software development</strong>.
      </p>
      <p>
        I love JavaScript for its ease of use and the variety of frameworks it offers. I've had the opportunity to work
        with Angular, Vue, and React on different projects, exploring and leveraging the unique capabilities of each.{' '}
        <strong>
          Additionally, I have incorporated Node.js into my personal projects, expanding my skill set and exploring new
          possibilities in web development
        </strong>
        .
      </p>
      <p>
        My experience with C# and .NET spans across various enterprise projects, where I have harnessed the language and
        framework's capabilities to develop efficient and high-quality applications.
        <strong>
          The inherent modularity and security of C# along with the versatility of .NET Core have allowed me to tackle
          complex challenges and deliver reliable solutions over time
        </strong>
        .
      </p>
    </>
  );

  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-center">
      <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1">
        {language === 'es' ? ABOUT_ES : ABOUT_EN}
      </div>

      <img src={me} className="rounded-full size-64 order-1 md:order-2" />
    </section>
  );
};
