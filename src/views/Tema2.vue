<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Elementos de confección

    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Partes y clasificación de las agujas de confección

    .bloque-texto-g.bloque-texto-g--inverso.bg02.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aguja tiene más de mil años de invención, hoy en día existe gran variedad en marcas y tipos de agujas. En cuanto a las agujas de confección se clasifican de acuerdo con tres aspectos que juntos identifican el uso de la aguja: las propiedades de resistencia, la durabilidad y la geometría de la aguja. Estos factores permiten mejorar el desempeño en las costuras.
          br
          br
          | Para mejorar la calidad de la aguja y prolongar su vida útil, se han desarrollado recubrimientos en nitruro de titanio para aumentar su resistencia al desgaste, sobre todo del ojo y punta.

    .row.justify-content-center.align-items-center.mb-2.bg03.p-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-10
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 6.
          span Partes de la aguja.
        img(src='@/assets/curso/Tema2/img02.svg', alt='Ilustración técnica titulada "Partes de la aguja" que detalla la anatomía de una aguja de costura industrial para la guía de quienes operan la maquinaria. El esquema se divide en tres partes: a la izquierda, muestra una aguja completa identificando el talón (butt), el tronco (shank) y la hoja (blade), con un círculo que amplía la punta mediante una lupa para señalar la ranura corta (short groove), el ojo (eye), la punta (point) y el extremo (tip). A la derecha, dos vistas complementarias de perfil identifican la ranura larga (long groove), la hendidura (scarf), la segunda ranura larga (second long groove) y el rebaje (land).')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Sistemas de agujas

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-3.col-md-8
        img(src="@/assets/curso/Tema2/img03.png")
      .col-lg-7
        .row
          .col-lg-2.mb-3.d-none.d-lg-block
            img(src="@/assets/curso/Tema2/img04.svg")
          .col-lg-12
            p Dependiendo del tipo de máquina, marca, modelo y proceso a desarrollar se estima el sistema de aguja, el cual debe adecuarse a la geometría de la máquina, se debe consultar el manual de instrucciones de la máquina para asignar la referencia o sistema.
            p En el siguiente cuadro se especifican algunas referencias de agujas más generalizadas:

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th.bg05.text-white.w-25 Referencia
                th.bg05.text-white Máquina
            tbody
              tr
                td 134 - 135X5
                td Plana una aguja, plana dos agujas, ojaladora, presilladora.
              tr
                td 135X17
                td Botonadora, presilladora.
              tr
                td 16X231 - 16X257
                td Plana una aguja.
              tr
                td 175X1
                td Botonadora.
              tr
                td B63
                td Recubridora.
              tr
                td UY113
                td Encauchadoras, multiagujas, empretinadora.
              tr
                td UY128
                td Recubridora, cerradora de codo, pretinadora.
              tr
                td 501 - 558
                td Ojaladora de ojal de lágrima.
      .col-lg-5.col-10.col-md-8
        img(src="@/assets/curso/Tema2/img05.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Tamaño de agujas

    .row.justify-content-center.align-items-stretch.mb-4.bg01(data-aos="zoom-in-left")
      .col-lg-5.d-flex
        img.izq.d-none.d-lg-block(src='@/assets/curso/Tema2/img06.png', alt='', style='object-fit: cover;')
      .col-lg-7.p-5
        br
        p Describe el grosor del diámetro del asta, las dos formas más usadas son: sistema métrico (Nm) o llamado europeo, en unidades de centésimas de milímetros y el sistema Singer o americano.
        p El grosor está directamente relacionado con el grosor de material a coser, entre más grueso el material se requiere mayor calibre de la aguja. El calibre se encuentra inscrito en el cabo de la aguja.
        p En la siguiente tabla se describen algunos calibres y su equivalencia en ambos sistemas y la aplicación en el tipo de material:

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Tabla 8.
          span Equivalencia en calibre de agujas y el material a coser.

        .tabla-a.color-acento-contenido.mb-3.tabla-calibre-especial
          table
            thead
              tr
                th.bg05.text-white Sistema americano
                th.bg05.text-white Sistema europeo
                th.bg05.text-white Material a coser
            tbody
              tr
                td 9
                td 65
                td(rowspan="2") Liviano
              tr
                td 10
                td 70
              tr
                td 12
                td 80
                td(rowspan="2") Semipesado
              tr
                td 14
                td 90
              tr
                td 16
                td 100
                td(rowspan="5") Pesado
              tr
                td 18
                td 110
              tr
                td 20
                td 120
              tr
                td 21
                td 130
              tr
                td 22
                td 140


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Puntas de agujas


    p Las puntas de las agujas están relacionadas con el tipo de material a coser, las puntas de confección son redondas y aunque existen más de 20 tipos; tenemos 6 más utilizados los cuales se encuentran especificados en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-10
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 7.
          span Puntas de agujas.
        img(src='@/assets/curso/Tema2/fig7.svg', alt='Tabla técnica titulada "Puntas de agujas" que clasifica en ocho filas los diferentes tipos de puntas para maquinaria de costura industrial, sirviendo de guía para quienes seleccionan los insumos de confección. Cada fila contiene: a la izquierda, una ilustración del perfil de la aguja con un círculo que amplifica la silueta específica de su punta; al centro, las siglas técnicas (como TR, SKL, G, FG/SUK, FFG/SES, RG, R, RS) junto a la denominación del tipo de punta (puntas de bola especiales, pesada, mediana, fina, o puntas redondas ligeramente redondeada, normal y afilada); y a la derecha, una descripción detallada con la aplicación recomendada según el tipo de tejido o costura a realizar.')

    .cajon.color-primario.p-4.mb-3
      p.mb-0 Una vez se entiende la clasificación de las agujas y la clasificación de hilos, se comprende la relación de la aguja y el hilo. El tamaño de la aguja, la densidad del material y la numeración del hilo es una relación directa, si el material es pesado, el hilo y el tamaño de la aguja debe ser alto.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Guías y accesorios en diferentes máquinas

    .bloque-texto-g.bg07.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Son elementos que mejoran la eficiencia y calidad de las operaciones, como también los procesos, por ende la calidad de las prendas. Existe gran variedad de guías, pies, aditamentos, y también los llamados folders, los cuales se pueden ordenar y fabricar según una especificación exclusiva o adecuada al tipo de producción.
       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Máquina plana

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src="@/assets/curso/Tema2/img08.png")
      .col-lg-7
        .row
          .col-lg-2.mb-3.d-none.d-lg-block
            img(src="@/assets/curso/Tema2/img09.svg")
          .col-lg-12
            p Los pies prensatela son accesorios que guían la costura en el proceso de confección de acuerdo con la operación, el ancho de costura o el insumo a coser, además de su variedad se encuentran recubiertos en material de teflón para facilitar el arrastre de materiales textiles sintéticos o delicados.
            p Dentro de la variedad que existe se encuentran pies para procesos específicos como pespuntar, dobladillar, coser cremalleras, cintas, fruncir, embonar, acolchar, entre otros. 

    p Los usos de pies prensatela más utilizados en la industria y de acuerdo con su operación se observan a continuación:
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center(titulo="Pie guía fijo")
        .col-lg-6.mb-3.mb-md-0
          p Se encuentra en varias medidas de pulgada, puede ser lado derecho o izquierdo. Guía el material en el ancho de costura del pie. Pespuntes en cuellos, puños.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/1.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie compensado")
        .col-lg-6.mb-3.mb-md-0
          p Existen en varias medidas de pulgada, puede ser lado derecho o izquierdo, tiene un resorte para compensar el grosor de material. Guía el material en el ancho de costura del pie. Pespuntes de cortes, dobladillos, cuellos, pecheras.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/2.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie cremallera corriente universal")
        .col-lg-6.mb-3.mb-md-0
          p Para coser cremallera corriente, se puede utilizar posicionando la pieza a cualquier lado.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/3.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie cremallera un lado")
        .col-lg-6.mb-3.mb-md-0
          p Para coser cremallera corriente, sea continua, fija, separable. Existe lado derecho o lado izquierdo.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/4.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie cremallera invisible")
        .col-lg-6.mb-3.mb-md-0
          p Para coser cremalleras invisibles de todos los tamaños. Tiene dos canales para deslizar por los rieles de la cremallera.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/5.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie fruncido o recogido")
        .col-lg-6.mb-3.mb-md-0
          p Frunce o recoge el material al coser, existen de varios tipos, con tornillo o el llamado de tacón.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/6.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie embonar o envivar")
        .col-lg-6.mb-3.mb-md-0
          p Para fijar o hacer sesgos de embone, que pasan a través del canal. El ancho del canal de acuerdo con el grosor de embone, recostado a cualquiera de los lados o con ambos canales
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/7.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie encintar")
        .col-lg-6.mb-3.mb-md-0
          p Coser cintas, hiladillos, existen de varios anchos.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/8.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Pie dobladillo de rollito")
        .col-lg-6.mb-3.mb-md-0
          p Guía el material doblando doble vez, se encuentran de varias medidas.
        .col-lg-5.col-md-7.col-10
          figure
            img(src='@/assets/curso/Tema2/9.png', alt='')


    p Las guías más utilizadas son:
    
    .row.mb-3(data-aos="zoom-in-left")
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Guías de tope
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Guías imanadas
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Folder o embudo sesgador

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Máquina fileteadora

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0.d-flex.col-md-6
        img.w-100.h-100(src='@/assets/curso/Tema2/img10.png', alt='', style='object-fit: cover;')

      .col-lg-8.d-flex
        .bg09.p-5.text-white.w-100.d-flex.flex-column.justify-content-center
          p.mb-4 Las guías más usadas en la fileteadora son la guía de tope y guía para dobladillo tipo sonrisa.
          p.mb-4 Fólderes o embudos como los envivadores para coser sesgos en camisetas, pijamas.
          p.mb-4 Los aditamentos de fruncidor con el cual se desarrolla el proceso completo, ejecutando tres operaciones al tiempo, al sobrehilar, unir costuras y fruncir la pieza.
          p.mb-0 Se incluyen otros aditamentos como dosificadores de elásticos y portarrollos.
      .mb-4
      .row.justify-content-start.mb-2(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text   Máquina recubridora

    .bloque-texto-g.bg07.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Teniendo en cuenta la versatilidad de la máquina, y su capacidad para desarrollar varias puntadas, la máquina puede cambiar el pie si es para dobladillar, sesgar o realizar pespuntes.

    .row.justify-content-start.mb-2(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Guías y folders o embudos
    p #[b Guías dobladilladoras:] graduables, para piezas rectas o curvas.

    .fondo01.p-5.mb-4(data-aos="zoom-in-left")
        SlyderE(indicadores="derecha").fondo-interno.p-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.col-md-10.bg03.p-4.mb-3
              .titulo-sexto.color-secundario(data-aos='fade-right')
                h5 Figura 8.
                span Guía dobladilladora graduable.
              figure
                img(src='@/assets/curso/Tema2/fig8.png', alt='La imagen muestra, en el lado izquierdo, un accesorio de costura metálico correspondiente a una guía dobladilladora graduable, la cual cuenta con una placa deslizante fijada por dos tornillos y marcas numéricas de medición. A su derecha, un diagrama esquemático ilustra cómo se pliega la tela para formar un dobladillo, indicando la posición de la costura mediante dos líneas rojas verticales que terminan en forma de zigzag. ')
            .col-lg-5
              ul.lista-ul.lista-ul--separador
                li
                  i.fas.fa-hilo
                  | #[b Sesgadores:] sencillos o dobles, para cubrir orillos en escotes, sisas, dobladillos. De diferentes medidas de acuerdo con la medida del ancho de sesgo.
                li
                  i.fas.fa-hilo
                  | #[b Sesgador aéreo:] fijar encima de la prenda, los llamados tipo Adidas, quien fue la marca que popularizado este tipo de sesgos.

                li
                  i.fas.fa-hilo
                  | Sesgador para pasadores.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.col-md-10.bg03.p-4
              .titulo-sexto.color-secundario(data-aos='fade-right')
                h5 Figura 9.
                span Folder sesgador de máquina recubridora y tipo de costura.
              figure
                img(src='@/assets/curso/Tema2/fig9.png', alt='La imagen muestra, en el lado izquierdo, un accesorio metálico de costura conocido como folder sesgador, el cual cuenta con guías de alambre onduladas y piezas de metal plegadas. A su derecha, un diagrama ilustra el tipo de costura mostrando cómo una cinta de tela envuelve y se dobla sobre el borde de otra pieza plana, cruzada por una línea roja vertical que representa la ubicación de la puntada. En la parte superior se incluye el texto descriptivo "Figura 9. Folder sesgador de máquina recubridora y tipo de costura.".')
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/Tema2/img12.png', alt='')

          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.col-md-10.bg03.p-4.mb-3
              .titulo-sexto.color-secundario(data-aos='fade-right')
                h5 Figura 10.
                span Dosificador de elástico y tipo de costura.
              figure
                img(src='@/assets/curso/Tema2/fig10.png', alt='La imagen muestra, del lado izquierdo, un accesorio metálico de costura correspondiente a un dosificador de elástico, equipado con múltiples varillas, guías y tornillos ajustables. A su derecha, un diagrama esquemático ilustra el tipo de costura mediante líneas negras horizontales que representan la disposición del material, atravesadas verticalmente por una línea roja en forma de zigzag. ')
            .col-lg-5
              h5 Adimentos
              p Portarrollos, dosificadores de elásticos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Máquinas especializadas

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center(titulo="Máquina dos agujas")
        .col-lg-5.mb-3.mb-md-0
          ul.lista-ul
            li
              i.fas.fa-hilo
              | #[b Pies guía:] centro, lado derecho o izquierdo.
            li
              i.fas.fa-hilo
              | #[b Folder tipo avión:] guía el sesgo cubre varilla en la copa de los brasieres.
            li
              i.fas.fa-hilo
              | #[b Guía de almilla:] unir almilla.
          
        .col-lg-6.col-md-10.col-10
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 11.
            span Guía de almilla para dos agujas y tipo de costura.
          figure
            img(src='@/assets/curso/Tema2/fig11.png', alt='La imagen muestra una guía metálica de almilla para máquina de coser de dos agujas en el lado izquierdo, junto con un diagrama explicativo a su derecha. El diagrama ilustra mediante líneas cómo se pliegan y superponen las piezas de tela, destacando en color rojo la línea por donde pasa la costura. ')
      .row.justify-content-center.align-items-center(titulo="Máquina zigzadora")
        .col-lg-4.mb-3.mb-md-0
          p #[b Pie encauchar:] especiales para guiar los elásticos decorativos.
          
        .col-lg-6.col-md-10.col-10
          figure
            img(src='@/assets/curso/Tema2/img13.png', alt='')
      
      .row.justify-content-center.align-items-center(titulo="Adimentos")
        .col-lg-5.mb-3.mb-md-0
          ul.lista-ul
            li
              i.fas.fa-hilo
              | Dosificadores de elásticos.
            li
              i.fas.fa-hilo
              | Portarrollos.

          
        .col-lg-6.col-md-10.col-10
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 12.
            span Portarrollos para zigzadora con dosificador de elástico.
          figure
            img(src='@/assets/curso/Tema2/fig12.png', alt='La imagen muestra un accesorio de costura metálico fotografiado sobre un fondo blanco. El dispositivo consta de grandes discos blancos en la parte superior diseñados para sostener un carrete, los cuales están unidos a una estructura articulada de varillas de metal que incluye bases ajustables y guías en la parte inferior. ')

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3  Instrumentos de medición

    .row.justify-content-center.align-items-stretch.mb-4.bg002(data-aos="zoom-in-left")
      .col-lg-7.align-items-center.p-5.mb-0.text-white
        br
        br
        p La medición es un proceso que permite medir (obtener datos) de alguna magnitud, de la cual resulta un valor que corresponde a la relación del objeto de estudio y la unidad de referencia, lo que permite comparar con los patrones definidos en el sistema métrico. “Un instrumento de medición es un equipo, aparato o máquina que realiza la lectura de una propiedad (o característica) de una variable aleatoria; la procesa, la traduce y la hace entendible al analista encargado de la medición”. (Escamilla, 2015, p. 38)
        p Se requiere utilizar los instrumentos de medición de longitud para poder realizar la toma de medidas en patrones, piezas, costuras y prendas terminadas. Cabe anotar que existen instrumentos de medición análogos y digitales, que registran las medidas con precisión, es decir que miden las magnitudes con un error mínimo.
      .col-lg-5.d-flex
        img.w-100.h-100.der.d-none.d-lg-block(src='@/assets/curso/Tema2/img14.png', alt='', style='object-fit: cover;')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Calibrador o galga

    .cajon.color-secundario.p-4.mb-4
      p Este es un instrumento de precisión usado para toma de medidas específicas y exactas, especialmente ángulos y longitudes muy pequeñas. En la siguiente figura se observa un instrumento especialmente desarrollado por el SENA para este tipo de mediciones, en el cual los centímetros se convierten en fracciones de pulgada, como se observa en los laterales superior e inferior y lateral derecho, lo que facilita la medición de los anchos de costuras, y las puntadas por pulgada.

    h4 Calibrador o galga
    p #[b Guías dobladilladoras:] graduables, para piezas rectas o curvas.

    .bg03.p-5.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-6.col-md-10
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 13.
            span Guía Dobladilladora graduable
          img(src='@/assets/curso/Tema2/figu13.png', alt='Herramienta de medición de forma cuadrada denominada Calibrador, identificada institucionalmente con el logotipo del SENA en el centro. El diseño cuenta con una regla graduada en su margen izquierdo numerada del cero al cinco, y ranuras de inspección distribuidas en sus bordes perimetrales acompañadas por sus respectivas especificaciones de medida en fracciones de pulgada.')

    p El pie de rey o #[b #[em calibrador de Vernier]] se utiliza para la calibración de las partes de la máquina y medición de accesorios de acuerdo con el tipo de máquina. La escala principal de este tipo de calibradores es de pulgadas y milímetros.
    
    .bg10.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-11.col-md-10
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 14.
            span Calibrador de Vernier o Pie de rey.
          img(src='@/assets/curso/Tema2/fig14.png', alt='La imagen muestra un calibrador de Vernier o pie de rey digital apoyado sobre unos planos técnicos. El instrumento tiene su pantalla encendida, indicando una medida de 14.73 mm.')
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Cinta métrica

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        img(src='@/assets/curso/Tema2/img15.png', alt='')
      .col-lg-12
        p Herramienta que consiste en una cinta en material flexible, hasta 1, 5 metros; provisto de dos caras, se prefiere que por una cara contenga medidas en milímetros, centímetros y por el otro lado contenga las medidas en pulgadas. Se pueden medir superficies planas o curvas.

      
      




























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
