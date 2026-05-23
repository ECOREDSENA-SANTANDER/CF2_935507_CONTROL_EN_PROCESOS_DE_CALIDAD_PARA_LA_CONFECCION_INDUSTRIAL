<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p El programa de control de calidad en confección industrial se presenta como una oportunidad formativa integral diseñada para que el personal operativo y el equipo de supervisión adquieran un dominio técnico absoluto sobre la maquinaria y los equipos utilizados en la manufactura textil. A lo largo de este proceso de aprendizaje continuo, quienes participan logran comprender a profundidad el funcionamiento mecánico y tecnológico de las diversas líneas de producción, abarcando la confección de ropa exterior, la delicada manufactura de la ropa interior, la especialización requerida para la ropa deportiva y la alta exigencia de los procesos en prendas de denim o vaqueras.
   
    .row.justify-content-center.align-items-stretch.mb-4.bg01
      .col-lg-5.d-flex
        img.w-100.h-100.izq.d-none.d-lg-block(src='@/assets/curso/portada/intro.png', alt='', style='object-fit: cover;')
      .col-lg-7.d-flex.align-items-center
        p.mb-0 Además de estudiar las máquinas básicas y aquellas de última tecnología mecatrónica o de automatización inteligente, el programa profundiza en la correcta selección y aplicación de componentes vitales para la manufactura, detallando la geometría y resistencia de las agujas, la clasificación de los prensatelas y la correcta instalación de guías o embudos especializados que facilitan el trabajo. Sumado a esto, el personal en formación desarrolla habilidades críticas en el uso de instrumentos de medición de alta precisión, como los calibradores de Vernier y las cintas métricas, lo cual resulta indispensable para verificar las especificaciones técnicas en cada etapa del ensamblaje.

    .cajon.color-acento-contenido.p-4.mb-4
      p De este modo, se garantiza que el equipo humano involucrado no solo optimice los tiempos de producción y el rendimiento de las herramientas tecnológicas, sino que también aplique rigurosos estándares de inspección para asegurar la máxima calidad y la excelencia en el acabado final de cualquier tipo de prenda a nivel industrial.












</template>

<script>
export default {
  name: 'Introduccion',
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
