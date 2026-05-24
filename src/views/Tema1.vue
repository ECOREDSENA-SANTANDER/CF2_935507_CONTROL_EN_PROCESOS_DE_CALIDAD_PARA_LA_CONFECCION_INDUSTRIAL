<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Maquinaria y equipos en diferentes líneas de producción
      .bloque-texto-g.bloque-texto-g--inverso.bg001.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En todo proceso productivo es necesario que tanto operarios como supervisores reconozcan la maquinaria y equipos que ser requieren para el proceso productivo, de forma que se garantice su adecuada utilización de acuerdo con la línea de producción en la cual se involucran. Así mismo, conocer en detalle la maquinaria, equipos y sistemas de medición permiten garantizar la calidad de las prendas confeccionadas.
            br
            | 
      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Maquinaria y equipo en ropa exterior

      p Todas las máquinas costan de 3 componentes:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          img(src='@/assets/curso/Tema1/img02.svg', alt='')

      .cajon.color-acento-contenido.p-4.mb-4
        p En el proceso de confección de la ropa exterior se utiliza en gran medida la maquinaria básica. Adicionalmente se incluyen máquinas de terminados como la ojaladora y la botonadora, teniendo en cuenta las operaciones requeridas para la confección de la prenda. Además, se incluyen otros como el de planchado, conformado por la mesa, la caldera y la plancha industrial; y las prehormadoras especiales para cuellos, puños y bolsillos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de las máquinas de confección básica
      p A continuación se precisa para cada tipo de máquina sus partes, características y usos en los procesos de confección.

      .row.justify-content-start.mb-4
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Máquina plana una aguja

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.col-10.mb-3.col-md-8
          img(src="@/assets/curso/Tema1/img03.png")
        .col-lg-7
          .row
            .col-lg-2.mb-3.d-none.d-lg-block
              img(src="@/assets/curso/Tema1/ico.svg")
            .col-lg-12
            p La característica principal de la máquina es la generación de una puntada recta de doble pespunte, la cual requiere que se entrelacen dos hilos, en la aguja y en el gancho donde se aloja la caja bobina con la bobina.
            p En máquinas planas la velocidad máxima normalmente es de 3500 revoluciones por minuto (RPM) en motor de clutch, es decir, en máquinas mecánicas, si la máquina es automática alcanza las 4500 RPM, pero todo depende de la agilidad del operario y la dificultad del proceso de confección.
            p La máquina realiza operaciones básicas como unir piezas, hacer dobladillos, colocar cuellos, puños, ensamblar insumos como cremalleras, cintas, encajes, entre otras.
         
      p Las partes de la máquina plana una aguja son las siguientes:

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 1.
            span Partes del cabezote, máquina plana una aguja

          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del cabezote
                  th.bg05.text-white Función
              tbody
                tr
                  td Palanca de retroceso
                  td Retrocede la costura; sirve para rematar.
                tr
                  td Regulador del largo de puntada
                  td Cambia el tamaño de la puntada.
                tr
                  td Medidor de lubricación
                  td Indica el nivel de aceite que contiene la máquina.
                tr
                  td Volante
                  td Recibe el movimiento del motor; acciona manualmente la máquina.
                tr
                  td Guiahílos
                  td Orienta el hilo desde el cono hasta la aguja.
                tr
                  td Barra de la presión del prénsatela
                  td Regula la presión del prénsatela.
                tr
                  td Palanca tirahilo
                  td Suministra a la aguja el hilo para formar la puntada.
                tr
                  td Tensor del hilo de la aguja
                  td Sistema compuesto por 10 piezas que ajustan los discos tensores para graduar la fuerza al paso del hilo de la aguja.
                tr
                  td Barra del prénsatela
                  td Por medio de un tornillo sostiene el pie prénsatela.
                tr
                  td Pie prénsatela
                  td Sujeta el material durante el proceso de costura.
                tr
                  td Barra de aguja
                  td Sostiene la aguja y le da movimiento por medio de un tornillo.
                tr
                  td Planchuela de la aguja
                  td Permite el apoyo del material.
                tr
                  td Dientes de arrastre
                  td Transportan el material.
                tr
                  td Garfio o gancho rotatorio
                  td Junto con la aguja forman la puntada.
                tr
                  td Caja bobina
                  td Encierra la bobina para facilitar el desenrollado del hilo.
                tr
                  td Bobina
                  td Carrete sobre el que se envuelve el hilo.
                tr
                  td Rodillera
                  td Acciona el prénsatela con el movimiento de la rodilla.
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 2.
            span Partes del mueble, máquina plana una aguja

          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del mueble
                  th.bg05.text-white Función
              tbody
                tr
                  td Árbol
                  td Dispositivo que incluye los portaconos y guiahílos.
                tr
                  td Portaconos
                  td Soporte para ubicar hilos e hilazas.
                tr
                  td Guiahílos
                  td Todos los orificios que orientan el hilo desde el cono hasta la aguja.
                tr
                  td Mesa
                  td Facilita el manejo de los materiales.
                tr
                  td Devanador
                  td Sistema que permite el enrollado del hilo en la bobina.
                tr
                  td Estante
                  td Sostiene la mesa y el pedal.
                tr
                  td Varilla de embrague
                  td Conecta el pedal con el embrague del motor.
                tr
                  td Pedal
                  td Da movimiento a la máquina y la detiene controlando la velocidad.

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 3.
            span Partes del motor, máquina plana una aguja

          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del motor
                  th.bg05.text-white Función
              tbody
                tr
                  td Interruptor
                  td Dispositivo para prender y apagar la máquina. Utiliza colores como símbolos, rojo para apagar y negro o verde para encender.
                tr
                  td Correa
                  td Pieza que transmite la fuerza del motor a la máquina.
                tr
                  td Embrague
                  td Al accionarse coloca la máquina en movimiento.
                tr
                  td Polea
                  td Transmite el movimiento por medio de la correa.

      .row.justify-content-start.mb-4
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Máquina fileteadora

      .bloque-texto-g.bg11.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img04.png')})`}"
        )

        .bloque-texto-g__texto.p-5.d-flex.align-items-center
          .w-100
            p.mb-5 Tenga en cuenta que existen 3 tipos de máquinas fileteadoras:
            ul.lista-ul
              li.d-flex.mb-3
                i.fas.fa-hilo.me-2
                p.mb-0 #[b De 3 hilos:] únicamente realiza puntadas de sobrehilado.
              li.d-flex.mb-3
                i.fas.fa-hilo.me-2
                p.mb-0 #[b De 4 hilos:] realiza filete con costura de refuerzo.
              li.d-flex.mb-0
                i.fas.fa-hilo.me-2
                p.mb-0 #[b De 5 hilos:] realiza filete con puntada de seguridad.


      .cajon.color-secundario.p-4.mb-4
        p Además, según las operaciones que desarrolle se puede modificar el mueble y se habla de fileteadoras de cama plana y fileteadora de cama sumergida o cama baja. La diferencia radica en el nivel del plano del cabezote en la mesa, si sobresale es cama plana y si se encuentra al mismo nivel es cama sumergida.
        p La máquina se utiliza para sobrehilar piezas sencillas como falsos, aletilla, aletillón o para unir piezas por lados de costado, entrepierna, tiros y hombros. Para generar la puntada de filete la máquina requiere de tomadores de lazada llamados loopers.

      p El volante de las máquinas fileteadoras es más pequeño lo que hace que se eleven las RPM, por lo tanto, puede alcanzar una velocidad máxima de hasta 5000 RPM en motor de clutch o mecánicas pero en máquinas automáticas pueden alcanzar los 6000 RPM.
      p Tiene partes similares de la máquina plana, las cuales se describen a continuación:

      .row.justify-content-center.align-items-center.mb-2.bg03.p-4(data-aos="zoom-in-left")
        .col-lg-11.col-md-10
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Figura 1.
            span Partes de la fileteadora referencia JUKI MO-6704D.
          img(src='@/assets/curso/Tema1/fig1.svg', alt='Infografía técnica que detalla los componentes de una máquina fileteadora JUKI MO-6704D mediante tres esquemas. A la izquierda, se ilustra el mecanismo interno mostrando el guiahílos y los loopers (superior, inferior y de puntada de seguridad). En el centro, se presenta el recorrido del hilo por la estructura y la ubicación de las cuchillas. A la derecha, se muestra el exterior del equipo, identificando los tensores, las tapas frontal y lateral, y el volante. El diseño visual sirve de guía para quienes operan la maquinaria en procesos de confección.')

      p Las partes de la máquina fileteadora son las siguientes:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 4.
            span Partes del cabezote, máquina fileteadora

          .tabla-a.color-acento-contenido.mb-0
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del cabezote
                  th.bg05.text-white Función
              tbody
                tr
                  td Guiahílos
                  td Orienta el hilo desde el cono hasta la aguja.
                tr
                  td Tensores
                  td Ajustan los discos tensores para graduar la fuerza al paso del hilo de la aguja. Según su función puede ser de 3, 4 o 5 tensores.
                tr
                  td Botón regulador del largo de puntada
                  td Cambia el tamaño de puntada, se ajusta con el apoyo del volante, que indica el largo requerido.
                tr
                  td Volante
                  td Recibe el movimiento del motor; acciona manualmente la máquina.
                tr
                  td Medidor de lubricación
                  td Indica el nivel de aceite que contiene la máquina.
                tr
                  td Barra de la presión del prénsatela
                  td Regula la presión del prénsatela.
                tr
                  td Barra del prénsatela
                  td Barra del prénsatela
                tr
                  td Pie prénsatela
                  td Sujeta el material, en el proceso de costura, es movible, permite el transporte del material.
                tr
                  td Dientes de arrastre
                  td Transportan el material. Consta de 3 dientes de los cuales dos se encuentran unidos en el mismo y se denominan diente principal y cadenel, y otro separado que se denomina diente diferencial.
                tr
                  td Planchuela movible
                  td Ubicada en el lado izquierdo del cabezote, se retira para poder enhebrar el hilo del looper de puntada de seguridad.
                tr
                  td Tapa frontal
                  td Se desliza hacia la derecha y afuera para abrirla, permitiendo el enhebrado de los 3 loopers.
                tr
                  td Loopers
                  td Encargados de hacer la lazada de la puntada de filete tres hilos; filete y puntada de refuerzo 4 hilos; filete con puntada de seguridad 5 hilos.
                tr
                  td Botón diferencial
                  td Ubicado en la parte lateral, se ajusta según la operación y material.
                tr
                  td Canal de residuos
                  td Bajan los residuos sobrantes al manejarse la máquina.
                tr
                  td Cuchillas
                  td La cuchilla superior es movible y la inferior es fija, al roce van cortando de manera homogénea el sobrante del material.
                tr
                  td Visor o mirilla de aceite
                  td Ubicado en la parte superior del cabezote verifica la lubricación de la máquina.


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 5.
            span Partes del mueble, máquina fileteadora

          .tabla-a.color-acento-contenido.mb-0
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del mueble
                  th.bg05.text-white Función
              tbody
                tr
                  td Árbol
                  td Dispositivo que incluye los portaconos y guiahílos.
                tr
                  td Portaconos
                  td Soporte para ubicar hilos e hilazas. Depende de su tipo pueden ser que tenga 3, 4 o 5.
                tr
                  td Guiahílos
                  td Todos los orificios que orientan el hilo desde el cono hasta la aguja y los loopers.
                tr
                  td Mesa
                  td Facilita el manejo de los materiales.
                tr
                  td Cadena pedal
                  td Conecta el pedal con la palanca para levantar pie.
                tr
                  td Estante
                  td Sostiene la mesa y el pedal.
                tr
                  td Varilla de embrague
                  td Conecta el pedal con el embrague del motor.
                tr
                  td Pedal derecho
                  td Al activarse se levanta el prensatela.
                tr
                  td Pedal izquierdo
                  td Al activarse frena o acelera la velocidad de la fileteadora.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 6.
            span Partes del motor, máquina fileteadora

          .tabla-a.color-acento-contenido.mb-0
            table
              thead
                tr
                  th.bg05.text-white.w-25 Partes del motor
                  th.bg05.text-white Función
              tbody
                tr
                  td Interruptor
                  td Dispositivo para prender y apagar la máquina y según el modelo varía su posición. Utiliza colores rojo para apagar y negro o verde para encender.
                tr
                  td Correa
                  td Pieza que transmite la fuerza del motor a la máquina.
                tr
                  td Embrague
                  td Al accionarse coloca la máquina en movimiento.
                tr
                  td Polea
                  td Transmite el movimiento por medio de la correa.

      .row.justify-content-start.mb-4
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Máquina recubridora



















































































































  </template>

<script>
export default {
  name: 'Tema1',
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
