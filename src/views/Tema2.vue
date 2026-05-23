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

    .bloque-texto-g.bloque-texto-g--inverso.bg02.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aguja tiene más de mil años de invención, hoy en día existe gran variedad en marcas y tipos de agujas. En cuanto a las agujas de confección se clasifican de acuerdo con tres aspectos que juntos identifican el uso de la aguja: las propiedades de resistencia, la durabilidad y la geometría de la aguja. Estos factores permiten mejorar el desempeño en las costuras.
          br
          br
          | Para mejorar la calidad de la aguja y prolongar su vida útil, se han desarrollado recubrimientos en nitruro de titanio para aumentar su resistencia al desgaste, sobre todo del ojo y punta.

    .row.justify-content-center.align-items-center.mb-2.bg03.p-4
      .col-lg-8
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 6.
          span Partes de la aguja.
        img(src='@/assets/curso/Tema2/img02.svg', alt='Ilustración técnica titulada "Partes de la aguja" que detalla la anatomía de una aguja de costura industrial para la guía de quienes operan la maquinaria. El esquema se divide en tres partes: a la izquierda, muestra una aguja completa identificando el talón (butt), el tronco (shank) y la hoja (blade), con un círculo que amplía la punta mediante una lupa para señalar la ranura corta (short groove), el ojo (eye), la punta (point) y el extremo (tip). A la derecha, dos vistas complementarias de perfil identifican la ranura larga (long groove), la hendidura (scarf), la segunda ranura larga (second long groove) y el rebaje (land).')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Sistemas de agujas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src="@/assets/curso/Tema2/img03.png")
      .col-lg-7
        .row
          .col-lg-2.mb-3
            img(src="@/assets/curso/Tema2/img04.svg")
          .col-lg-12
            p Dependiendo del tipo de máquina, marca, modelo y proceso a desarrollar se estima el sistema de aguja, el cual debe adecuarse a la geometría de la máquina, se debe consultar el manual de instrucciones de la máquina para asignar la referencia o sistema.
            p En el siguiente cuadro se especifican algunas referencias de agujas más generalizadas:

    .row.justify-content-center.mb-0
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
      .col-lg-5
        img(src="@/assets/curso/Tema2/img05.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Tamaño de agujas

    .row.justify-content-center.align-items-stretch.mb-4.bg01
      .col-lg-5.d-flex
        img.izq.d-none.d-lg-block(src='@/assets/curso/Tema2/img06.png', alt='', style='object-fit: cover;')
      .col-lg-7.p-5
        br
        p Describe el grosor del diámetro del asta, las dos formas más usadas son: sistema métrico (Nm) o llamado europeo, en unidades de centésimas de milímetros y el sistema Singer o americano.
        p El grosor está directamente relacionado con el grosor de material a coser, entre más grueso el material se requiere mayor calibre de la aguja. El calibre se encuentra inscrito en el cabo de la aguja.
        p En la siguiente tabla se describen algunos calibres y su equivalencia en ambos sistemas y la aplicación en el tipo de material:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Tabla 8.
          span Equivalencia en calibre de agujas y el material a coser.

        .tabla-a.color-acento-contenido.mb-5.tabla-calibre-especial
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
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          span Puntas de agujas.
        img(src='@/assets/curso/Tema2/fig7.svg', alt='Tabla técnica titulada "Puntas de agujas" que clasifica en ocho filas los diferentes tipos de puntas para maquinaria de costura industrial, sirviendo de guía para quienes seleccionan los insumos de confección. Cada fila contiene: a la izquierda, una ilustración del perfil de la aguja con un círculo que amplifica la silueta específica de su punta; al centro, las siglas técnicas (como TR, SKL, G, FG/SUK, FFG/SES, RG, R, RS) junto a la denominación del tipo de punta (puntas de bola especiales, pesada, mediana, fina, o puntas redondas ligeramente redondeada, normal y afilada); y a la derecha, una descripción detallada con la aplicación recomendada según el tipo de tejido o costura a realizar.')

    .cajon.color-primario.p-4.mb-3
      p.mb-0 Una vez se entiende la clasificación de las agujas y la clasificación de hilos, se comprende la relación de la aguja y el hilo. El tamaño de la aguja, la densidad del material y la numeración del hilo es una relación directa, si el material es pesado, el hilo y el tamaño de la aguja debe ser alto.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Guías y accesorios en diferentes máquinas

    .bloque-texto-g.bg07.p-3.p-sm-4.p-md-5.mb-4
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

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5
        img(src="@/assets/curso/Tema2/img08.png")
      .col-lg-7
        .row
          .col-lg-2.mb-3
            img(src="@/assets/curso/Tema2/img09.svg")
          .col-lg-12
            p Los pies prensatela son accesorios que guían la costura en el proceso de confección de acuerdo con la operación, el ancho de costura o el insumo a coser, además de su variedad se encuentran recubiertos en material de teflón para facilitar el arrastre de materiales textiles sintéticos o delicados.
            p Dentro de la variedad que existe se encuentran pies para procesos específicos como pespuntar, dobladillar, coser cremalleras, cintas, fruncir, embonar, acolchar, entre otros. 

    p Los usos de pies prensatela más utilizados en la industria y de acuerdo con su operación se observan a continuación:
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
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
    
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Guías de tope
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Guías imanadas
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.bg08
          .p-3
            h5.mb-0.text-center Folder o embudo sesgador

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text  Máquina fileteadora

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0.d-flex
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

    .bloque-texto-g.bg07.p-3.p-sm-4.p-md-5.mb-4
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
