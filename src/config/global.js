export default {
  global: {
    Name: 'Maquinaria, equipos y elementos de confección',
    Description:
      'Reconocer las partes y funciones de las máquinas básicas y especializadas, para establecer sus diferencias y similitudes. Identificar la utilidad de cada máquina en los procesos de la línea de producción. La aguja es un elemento elemental para el funcionamiento de la máquina; identificar los tipos de aguja, para seleccionar la aguja adecuada para la producción a elaborar. Especificar la aplicación de los pies, guías, aditamentos según la línea de producto. Reconocer los sistemas de medición y su aplicación para el control de la calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Maquinaria y equipos en diferentes líneas de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Maquinaria y equipo en ropa exterior',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Maquinaria y equipo ropa interior',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Maquinaria y equipo ropa deportiva',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Maquinaria y equipo ropa en denim',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Maquinaria en procesos especiales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Partes y clasificación de las agujas de confección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Guías y accesorios en diferentes máquinas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instrumentos de medición',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Dobladillo',
      significado:
        'es el borde de la tela doblada dos veces sobre sí misma y asegurada con puntadas a mano o a máquina en la parte inferior de faldas, vestidos, pantalones y orillos de mangas etc.',
    },
    {
      termino: 'Empalme / empate',
      significado: 'sobreponer unas puntadas sobre otras ya existentes.',
    },
    {
      termino: 'Guías',
      significado:
        'accesorios acondicionados a las máquinas para facilitar y agilizar el trabajo y la terminación de las prendas.',
    },
    {
      termino: '<i>Looper</i>',
      significado: 'garfio, pieza que se enhebra hilo para formar lazada.',
    },
    {
      termino: 'Motor de <i>clutch</i>',
      significado:
        'se utiliza para máquinas de coser industriales, este motor maneja diferentes rpm que varían dependiendo de la clase de máquina.',
    },
    {
      termino: 'Prehormar',
      significado:
        'planchar las piezas de los bolsillos doblando los orillos de acuerdo con el ancho de costura, se utiliza una plantilla para que quede conforme a las medidas especificadas.',
    },
    {
      termino: 'Presilla',
      significado:
        'costura en zigzag, usada para reforzar otra costura sobre la cual se coloca o una pieza, para evitar se descosa o exista desgarre (rompa) de material.',
    },
    {
      termino: 'Proceso',
      significado:
        'son las diferentes etapas que se requieren y siguen para elaborar un producto.',
    },
  ],
  referencias: [
    {
      referencia: 'COATS Group. (2020). Todo sobre agujas. COATS.',
      link: '',
    },
    {
      referencia:
        'Escamilla Esquivel, A. (2015). Metrología y sus aplicaciones. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39456?page=51',
    },
    {
      referencia:
        'Gómez, S. (2020, 5 julio). Asesoría, diseño, fabricación de todo tipo de folders - Guías para máquinas de coser.',
      link: 'http://aditamentossaulgomez.blogspot.com/',
    },
    {
      referencia:
        'Groz-Beckert. (2020). Sewing machine needles for the clothing industry. Groz-Beckert.',
      link:
        'https://www.groz-beckert.com/en/products/sewing/bekleidungsindustrie/',
    },
    {
      referencia:
        'Groz-Beckert. (2019). Sewing machine needles for the apparel industry (p. 6).',
      link:
        'https://www.groz-beckert.com/mm/media/en/web/pdf/Sewing_machine_needles_for_the_apparel_industry.pdf',
    },
    {
      referencia:
        'ManualsLib. Brother ZM-851A máquina zigzadora. Manual de instrucciones (p. 15).',
      link:
        'https://www.manualslib.com/manual/442708/Brother-Zm-851a.html?page=15#manual',
    },
    {
      referencia:
        'ManualsLib. Enhebrado de la máquina - JUKI MO-6704D. Manual de instrucciones (p. 5, 40).',
      link:
        'https://www.manualslib.com/manual/559355/Juki-Mo-6704d.html?page=40#manual',
    },
    {
      referencia:
        'ManualsLib. Etiquetas de advertencia - Brother T-8422A. Manual de instrucciones (p. 5).',
      link:
        'https://www.manualslib.com/manual/442249/Brother-T-8422a.html?page=5#manual',
    },
    {
      referencia:
        'ManualsLib. Nombre de las piezas principales - Brother DA-9280. Manual de instrucciones. Máquina de brazo de tres agujas (2 agujas) de cadeneta (p. 8).',
      link:
        'https://www.manualslib.com/manual/482480/Brother-Da-9280.html?page=8#manual',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: '--',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '--',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
