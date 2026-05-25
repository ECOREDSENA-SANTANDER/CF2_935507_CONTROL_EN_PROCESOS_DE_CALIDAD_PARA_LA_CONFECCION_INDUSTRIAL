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

      .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
        p En el proceso de confección de la ropa exterior se utiliza en gran medida la maquinaria básica. Adicionalmente se incluyen máquinas de terminados como la ojaladora y la botonadora, teniendo en cuenta las operaciones requeridas para la confección de la prenda. Además, se incluyen otros como el de planchado, conformado por la mesa, la caldera y la plancha industrial; y las prehormadoras especiales para cuellos, puños y bolsillos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de las máquinas de confección básica
      p A continuación se precisa para cada tipo de máquina sus partes, características y usos en los procesos de confección.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
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

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
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
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
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

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
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

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Máquina fileteadora

      .bloque-texto-g.bg11.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img04.png')})`}"
        )

        .bloque-texto-g__texto.p-5.d-flex.align-items-center
          .w-100
            p.mb-5 Tenga en cuenta que existen 3 tipos de máquinas fileteadoras:
            br 
            br
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


      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
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

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
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


      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
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

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
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

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-12.col-lg-7
          h4.bg3.py-2.w-card-text2 Máquina recubridora

      .bloque-texto-g.bloque-texto-g--inverso.bg001.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Existen tres tipos de recubridoras dependiendo del tipo de cabezote:
          br
          br
          .w-100
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-hilo.me-2
                p.mb-0 #[b Cama plana:] se utiliza para realizar operaciones de dobladillos, pespuntar. El cabezote no tiene modificación.
              li.d-flex.mb-1
                i.fas.fa-hilo.me-2
                p.mb-0 #[b En L:] al cabezote pueden adaptarse guías y embudos para las operaciones de sesgar y dobladillar.
              li.d-flex.mb-0
                i.fas.fa-hilo.me-2
                p.mb-0 #[b Cama cilíndrica:] especial para realizar operaciones de dobladillo tubular.

      .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
        p Las partes y funciones de la máquina son similares a la máquina fileteadora. La recubridora tiene un looper interno y un looper ciego para la puntada de recubridor, además tiene cinco sistemas tensores para cada hilo.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Tecnología en maquinaria y equipos de ropa exterior


      .row.justify-content-center.align-items-stretch.mb-4.bg01(data-aos="zoom-in-left")
        .col-lg-5.d-flex
          img.izq.d-none.d-lg-block(src='@/assets/curso/Tema1/img06.png', alt='', style='object-fit: cover;')
        .col-lg-7.p-5
          br
          p En la máquina plana automática, además de tener un tablero donde se programan costuras para remates, costuras continuas y costuras en cuadro, es posible programar funciones de corte de hilo, posicionar aguja y levantar y bajar pie. Existen tableros que además de ser táctiles, tienen tecnología de comunicación inalámbrica a través de celular (Near Field Communication NFC) donde se puede programar y realizar el control de funcionamiento de la máquina.
          p Los motores de las máquinas se han reemplazado por motores que ahorran energía, causan menos ruido y vibración, además de tener mayor nivel de velocidad. También existen motores mecatrónicos los cuales están integrados con el cabezote, logrando un mejor desempeño.

      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
        p Las máquinas fileteadoras y recubridoras se conectan a una red neumática para mejorar funciones como levantar el pie, corte de hebras, succionar material sobrante cortado y a través de mangueras direccionarlo a contenedores ubicados debajo de la mesa de la máquina.

      .row.justify-content-center.cursor-pointer.mb-3(data-aos="zoom-in-left")
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/a.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Ojaladoras
              p.mb-0 Se caracterizan por ser programables, en su tablero digital se gradúan tamaño, velocidad, medida de zigzag. La máquina tiene botones de seguridad de parada, para que al accionar inmediatamente termine el ciclo de la operación.
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/b.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Botonadoras
              p.mb-0 Son programables, se ajustan al número de huecos de los botones (2 o 4), también existen las de alimentación de tolva que organiza y posiciona el botón en la máquina.

        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/c.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Multiagujas
              p.mb-0 Se utilizan para colocar pecheras y realizar costuras en alforzas.
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/d.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Ribeteadoras
              p.mb-0 Máquinas semirobóticas que recogen, realizan costuras y sueltan ordenadamente la pieza.

      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Maquinaria y equipo ropa interior 
      
      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          img(src='@/assets/curso/Tema1/im07.png', alt='')
        .col-lg-12
          p En la confección de bóxer, pantys, brasieres, tops se requieren además de las máquinas básicas, máquinas con aditamentos como los dosificadores de elástico, máquina plana dos agujas, presilladora y zigzadora.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de las máquinas de confección de ropa interior


      .fondo1.mb-4.p-5(data-aos="zoom-in-left")
        .tarjeta.fondo2.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                h4 Máquina plana dos agujas
                p Las partes son las mismas de la plana una aguja, pero se diferencia en tener, como su nombre lo indica, dos agujas y dos ganchos. Las máquinas requieren de guías tipo avión las cuales se estudiarán en una próxima unidad.
                p Se utiliza en los brasieres para las operaciones de sujeción de sesgos cubre varillas.

              .col-lg-6.col-md-9
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 2.
                  span Partes máquina dos agujas.
                img(src='@/assets/curso/Tema1/fig2.png', alt='La imagen muestra una ilustración de una máquina de coser industrial plana de dos agujas montada sobre una mesa de trabajo. Mediante líneas indicadoras, el diagrama señala sus diferentes partes principales: dos sistemas tensores, el ecualizador, los pies prensatela, el devanador, el volante y el motor situado debajo de la mesa.')
       
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                h4 Máquina zigzadora
                p Tiene partes similares de la máquina plana, en la máquina zigzadora se encuentran botones reguladores del ancho y largo del zigzag, y cuenta con un mecanismo de alimentación para desarrollar la puntada.
                p Las operaciones que se desarrollan con las costuras de zigzag en tres pasos son: fijación de elásticos en pantys y brasieres.

              .col-lg-6.col-md-9
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 3.
                  span Partes de la máquina zigzadora Brother ZM-85-1A.
                img(src='@/assets/curso/Tema1/fig3.png', alt='La imagen muestra una ilustración de una máquina de coser zigzadora montada sobre una mesa de trabajo. Mediante líneas indicadoras, el diagrama señala tres de sus partes principales: el alimentador de hilo en la parte frontal, el visor de aceite en la parte superior y el botón graduador de puntada en el lateral derecho. ')

            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                h4 Presilladora
                p Es una máquina robusta que desarrolla las costuras de presilla para reforzar piezas, por ejemplo la fijación de tirantas de brasier, remates en costados de pantys y separación de sesgos.
                p Las siguientes son sus partes:

              .col-lg-6.col-md-9
                .titulo-sexto.color-secundario(data-aos='fade-right')
                  h5 Figura 4.
                  span Partes presilladora.
                img(src='@/assets/curso/Tema1/fig4.png', alt='La imagen muestra a la izquierda una fotografía en primer plano de unas manos operando una máquina de coser sobre una prenda de tela de jean. A la derecha, sobre un fondo gris, se presenta una lista enumerando las partes de la máquina: barra aguja, pie prensatela, gancho, dientes, planchuela, guiahilos, portaconos y tensores, destacando que cuenta con dos de estos últimos para el mismo hilo de la aguja. ')
     

            .row.justify-content-center.align-items-center
              .col-lg-5.mb-4.mb-md-0
                h4 Flat seamer
                p Máquina especializada en la unión de costuras tope a tope, utilizada en el caso de unión de bóxer o en prendas de control; la máquina tiene 4 agujas, 3 loopers, par de cuchillas para refilar el material sobrante.
              .col-lg-5.col-md-9
                img(src='@/assets/curso/Tema1/fig04.png', alt='')


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Tecnología en maquinaria y equipos de ropa interior

      .bloque-texto-g.bg008.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img07.png')})`}"
        )

        .bloque-texto-g__texto.p-5.d-flex.align-items-center
          .w-100
            p.mb-5 Existen modelos de máquinas automáticas que se programan según el material y logran controlar costuras de remate, posicionamiento de agujas y ancho de zigzag. En las máquinas con dosificadores, que pueden ser electrónicos, se ajusta el nivel de presión del elástico.
            br
            br
            p Actualmente se han desarrollado prendas sin costura, en las que los materiales con características especiales pueden unirse por método de fusión de las piezas mediante el uso de tecnología de ultrasonido.


      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3  Maquinaria y equipo ropa deportiva
      
      p La confección de prendas deportivas requiere del uso de maquinaria y equipo especializada, la cual permite realizar acabados y diferenciación en las prendas.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de la máquinas de ropa deportiva
      p Para el desarrollo de ropa deportiva además de la maquinaria básica se utilizan:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4.col-8.mb-3.col-md-4
          img(src="@/assets/curso/Tema1/img08.png")
        .col-lg-8.bg09.p-5.mb-3
          h4.bg5.py-2.w-card-text3.mb-4 Encauchadoras
          p.text-white Máquina de 4 agujas y 4 loopers, tiene un pooler (sistema de rodillos) el cual ayuda al arrastre de la pieza encauchada. Se adiciona aditamentos de soporte para el caucho y portarrollos para la alimentación del elástico.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Tecnología en maquinaria y equipos de ropa deportiva
      p Para el desarrollo de ropa deportiva además de la maquinaria básica se utilizan:

      .bloque-texto-g.bg07.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/IMG09.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Además de utilizar las máquinas electrónicas programables, se utiliza la máquina semirobot en algunas operaciones de prendas básicas, como coser pechera.
          br 
          br
          P También se emplea la tecnología de ultrasonido en materiales sintéticos con propiedades de antifluidos, antimanchas y otros para camisetas, chaquetas, la cual se ha desarrollado para completar todas las operaciones de la prenda.

      separador
      #t_1_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.4  Maquinaria y equipo ropa en denim

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          img(src='@/assets/curso/Tema1/img10.png', alt='')
      p Las prendas en denim tienen un gran posicionamiento en el mercado, conforme al alto número de operaciones de cada prenda, se han desarrollado máquinas especializadas en las procesos para mejorar el rendimiento de la producción.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de las máquinas de ropa denim


      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center(titulo="Presilladora")
          .col-lg-6.mb-3.mb-md-0
            p Realiza costuras de remate para asegurar las piezas y evitar se deshaga la costura, en el lado de la cremallera, costuras en laterales, bolsillos y demás.
          .col-lg-5.col-md-7.col-10
            figure
              img(src='@/assets/curso/Tema1/1.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Dos agujas")
          .col-lg-6.mb-3.mb-md-0
            p Al realizar simultáneamente dos costuras rectas en este tipo de prendas, en las operaciones de coser bolsillos, se requiere que tenga la máquina el mecanismo ecualizador.
          .col-lg-5.col-md-7.col-10
            figure
              img(src='@/assets/curso/Tema1/2.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Pretinadora o empreteinadora")
          .col-lg-6.mb-3.mb-md-0
            p Dispone de 4 agujas 4 loopers, pooler para el arrastre de la pieza, requiere de montaje de guías para pasar la pieza de pretina.
          .col-lg-5.col-md-7.col-10
            figure
              img(src='@/assets/curso/Tema1/3.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Cerradora de codo")
          .col-lg-6.mb-3.mb-md-0
            p Dispone de 2 o 3 agujas y 2 o 3 loopers según corresponda, requiere de un pooler para el arrastre del material. La forma del cabezote similar a un brazo doblado realiza operaciones de unión de piezas. Al colocarse la guía tipo caracol realiza costuras engarzadas para cerrar las piezas. En ropa deportiva se puede utilizar con un embudo o folder para sesgo aéreo y fijar el sesgo en los hombros y parte de escote (cinta hombros).
          .col-lg-5.col-md-7.col-10
            .titulo-sexto.color-secundario(data-aos='fade-right')
              h5 Figura 5.
              span Partes maquina cerradora de codo Brother DA-9280.
            figure
              img(src='@/assets/curso/Tema1/4.png', alt='Ilustración técnica titulada "Partes maquina cerradora de codo Brother DA-9280". El esquema detalla la estructura anatómica del equipo para la guía de quienes lo operan en la confección industrial, identificando sus partes principales: los tensores en la parte superior del cabezal, los canales guía hilos en el soporte inclinado de la derecha, y el prensatelas junto con los loopers en la zona frontal izquierda de costura, mostrando una sección translúcida que deja ver los mecanismos internos inferiores.')

        .row.justify-content-center.align-items-center(titulo="Cerradora de pedestal")
          .col-lg-6.mb-3.mb-md-0
            p La forma es en columna, a diferencia de la cerradora, realiza la misma función y tiene las mismas partes que la cerradora de codo.
          .col-lg-5.col-md-7.col-10
            figure
              img(src='@/assets/curso/Tema1/5.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Dobladilladora de bota")
          .col-lg-6.mb-3.mb-md-0
            p Con una aguja y gancho rotatorio, guía y cose el dobladillo de pantalones, faldas, shorts.
          .col-lg-5.col-md-7.col-10
            figure
              img(src='@/assets/curso/Tema1/6.png', alt='')


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg04.py-2.w-card-text Partes, características y usos de las máquinas de ropa denim

      p Esta tecnología ha automatizado los procesos, por ejemplo, en operaciones de coser bolsillos los semirobot recogen la pieza, fijan los bolsillos y retiran la pieza de manera organizada. Existen también máquinas automatizadas que realizan pasadores, los cortan y los cosen a la prenda.


      separador
      #t_1_5.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.5  Maquinaria en procesos especiales

      p La diferenciación de algunas prendas no solo se da en el proceso de confección, también se presentan en:


      TabsC.color-primario(data-aos="zoom-in-left")
        .py-3.py-md-4(titulo="Procesos de estampados")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-10.mb-3.mt-3
                figure
                  img(src='@/assets/curso/Tema1/img011.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas.fa-hilo
                  p.mb-0 #[b Transfer:] utiliza papel especial en el cual se imprime la imagen y se termofija, transfiriendo la imagen; se utiliza en diversos materiales.
                li.d-flex
                  i.fas.fa-hilo
                  p.mb-0 #[b Serigrafía:] por medio de la revelación de un marco con el negativo de la imagen se coloca en la pieza y se agrega vinilo textil y se deja secar.

                li.d-flex
                  i.fas.fa-hilo
                  p.mb-0 #[b Sublimación:] requiere de una impresora con tintas especiales y termo fijadora, en materiales cuya composición sea por lo menos 80% en poliéster.
             
        .py-3.py-md-4(titulo="Proceso de lavandería")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-10.mb-3.mt-3
                figure
                  img(src='@/assets/curso/Tema1/img12.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              p Se utilizan lavadoras especiales a temperaturas especificadas, con el fin de cambiar la textura de la prenda, se presenta varios procesos:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Prelavado:] mejora la textura del textil, obteniendo un textil más suavizado.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Suavizados o desengome:] a temperaturas de 40°, se retira la goma que tiene la tela.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Ston o desgaste:] efecto de envejecimiento o desgaste.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Bleach o blanqueamiento:] logra un efecto aclarante.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Dirty:] acabado envejecido.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Destroyed:] deshilachados.

                li.d-flex.mb-0
                  i.fas.fa-hilo
                  p.mb-0 #[b Otros:] craquelado, tye die, relieve, salpicados, desgastes, revestimientos, teñidos.
        
        .py-3.py-md-4(titulo="Proceso de bordado")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-10.mb-3.mt-3
                figure
                  img(src='@/assets/curso/Tema1/img13.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              p Máquinas multicabezas de 4, 6 hasta 12 cabezales desarrollan simultáneamente un diseño elaborado en programas especializados. Utiliza varias agujas y un gancho. Según la posición del bordado, para bordar gorras se requiere un bastidor especial para posicionar la pieza.










































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
