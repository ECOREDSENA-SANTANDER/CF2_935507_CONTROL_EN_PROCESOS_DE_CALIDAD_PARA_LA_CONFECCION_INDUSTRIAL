<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Maquinaria, equipos y elementos de confección',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre las partes, características y usos de las máquinas básicas y especializadas de confección, sus aplicaciones según la línea de producción, los elementos de confección como agujas, guías, pies prensatela, aditamentos y folders, así como los instrumentos de medición empleados para apoyar el control de calidad en los procesos de confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuáles son los tres componentes generales de toda máquina de confección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Área de trabajo, sustentadores y transmisores de energía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Agujas, botones y cremalleras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patronaje, corte y empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tela, hilo e insumos decorativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto: '¿Qué parte de la máquina corresponde al área de trabajo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La mesa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cabezote de la máquina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los ejes de transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto:
            '¿Cuál es la característica principal de la máquina plana una aguja?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Genera una puntada recta de doble pespunte con dos hilos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Realiza únicamente puntadas de sobrehilado con tres hilos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabaja solo con tecnología de ultrasonido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Une costuras tope a tope con cuatro agujas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto:
            '¿Qué función cumple la palanca de retroceso en la máquina plana una aguja?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indica el nivel de aceite de la máquina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retrocede la costura y sirve para rematar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sujeta el material durante el proceso de costura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transporta el material por medio de los dientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto: '¿Para qué sirve el regulador del largo de puntada?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para cambiar el tamaño de la puntada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para orientar el hilo desde el cono hasta la aguja.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para encerrar la bobina y facilitar el desenrollado del hilo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para sostener la mesa y el pedal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto: '¿Qué operaciones básicas realiza la máquina plana una aguja?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Unir piezas, hacer dobladillos, colocar cuellos, puños e insumos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar únicamente bordados y estampados digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cortar pasadores y coserlos automáticamente a la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar solo costuras de refuerzo en prendas de jean.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto:
            '¿Qué tipo de máquina fileteadora realiza filete con costura de refuerzo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fileteadora de 3 hilos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fileteadora de 4 hilos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La fileteadora de 5 hilos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La máquina plana dos agujas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto:
            '¿Qué tipo de máquina fileteadora realiza filete con puntada de seguridad?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fileteadora de 3 hilos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fileteadora de 4 hilos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La fileteadora de 5 hilos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La zigzadora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto:
            '¿Qué elementos requiere la máquina fileteadora para generar la puntada de filete?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomadores de lazada llamados loopers.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente una caja bobina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Botones de dos o cuatro huecos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un folder tipo avión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es la diferencia entre fileteadora de cama plana y cama sumergida?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En la cama plana el cabezote sobresale de la mesa y en la cama sumergida queda al mismo nivel.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La cama plana trabaja con ultrasonido y la cama sumergida con bobina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cama plana solo se usa para bordados y la cama sumergida solo para botones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En la cama plana no se utilizan loopers y en la cama sumergida sí.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuáles son los tres tipos de máquina recubridora según el tipo de cabezote?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cama plana, en L y cama cilíndrica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manual, digital y neumática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De 3 hilos, de 4 hilos y de 5 hilos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerradora, pretinadora y presilladora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto: '¿Para qué se utiliza la recubridora de cama cilíndrica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para realizar operaciones de dobladillo tubular.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para fijar botones de dos o cuatro huecos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para hacer ojal de lágrima en prendas denim.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para cortar material sobrante en estampación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto:
            '¿Qué funciones pueden programarse en una máquina plana automática?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corte de hilo, posicionamiento de aguja y levantar o bajar el pie.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lavandería, sublimación y estampación por transfer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificación de tallas y empaque del producto final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión de centímetros a fracciones de pulgada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto:
            '¿Para qué se utiliza la máquina zigzadora en la confección de ropa interior?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para fijación de elásticos en pantys y brasieres.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para realizar dobladillo tubular en camisetas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para unir costuras tope a tope en bóxer.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para cortar pasadores y coserlos a la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto: '¿Cuál es la función principal de la presilladora?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollar costuras de presilla para reforzar piezas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Medir puntadas por pulgada en los laterales de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hacer estampados por sublimación en poliéster.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dosificar elástico en prendas deportivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto: '¿Qué caracteriza a la máquina flat seamer?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es especializada en la unión de costuras tope a tope.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es una máquina exclusiva para ojales de lágrima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realiza únicamente costuras rectas de doble pespunte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se usa solo para planchado industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto:
            '¿Qué máquina utilizada en ropa denim requiere montaje de guías para pasar la pieza de pretina?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pretinadora o empretinadora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Botonadora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zigzadora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recubridora de cama cilíndrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto: '¿De qué depende la selección del sistema de aguja?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Del tipo de máquina, marca, modelo y proceso a desarrollar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente del color de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo del número de botones que tenga el producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Del tipo de empaque y embalaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto:
            '¿Qué relación existe entre el material a coser, el hilo y el tamaño de la aguja?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Si el material es pesado, el hilo y el tamaño de la aguja deben ser altos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Si el material es pesado, siempre se debe usar una aguja liviana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño de la aguja no tiene relación con el material.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La aguja solo se selecciona por la marca del fabricante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto:
            '¿Para qué se utilizan los instrumentos de medición de longitud en confección?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para tomar medidas en patrones, piezas, costuras y prendas terminadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para reemplazar los accesorios de las máquinas fileteadoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para programar tableros digitales con tecnología NFC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para alimentar elásticos en máquinas zigzadoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
