<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El esquema presentado expone de manera estructurada los componentes fundamentales del proceso productivo en la industria textil, bajo el eje central de "Maquinaria, equipos y elementos de confección". Se identifican dos vertientes principales: la primera aborda la maquinaria y los equipos especializados según diversas líneas de producción, abarcando desde la ropa exterior e interior hasta prendas deportivas, artículos en denim y procesos especiales. La segunda vertiente se enfoca en los elementos esenciales para la ejecución de la costura, detallando la clasificación y partes de las agujas, el uso de guías y accesorios específicos para las máquinas, y la importancia de los instrumentos de medición. Este enfoque integral permite comprender cómo la tecnología y los implementos técnicos se articulan para garantizar la calidad y eficiencia en la creación de cada pieza de vestir.
    

    .row.justify-content-center
      .col-lg-6.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Un mapa conceptual organizado jerárquicamente que detalla los recursos técnicos de la confección. En la parte superior, el título principal conecta con dos ramas principales. La rama izquierda describe la maquinaria aplicada a cinco categorías: ropa exterior, ropa interior, ropa deportiva, denim y procesos especiales. La rama derecha se centra en elementos auxiliares, mencionando la clasificación de agujas, guías y accesorios para máquinas, así como instrumentos de medición.")
    .row.justify-content-center
      .col-lg-3
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
