//Liquiadar nomina

const empleado1 = {
    nombre: "JUAN PEREZ",
    salarioBasico: 1300000,
    auxTransporte: 97.032,
    horasExtras: 0,
    comisiones: 100000,



    class nomina {
        constructor(nombre, salarioBasico, auxTransporte, horasExtras, comisiones) {
        this.nombre = nombre;
        this.salarioBasico = salarioBasico;
        this.auxTransporte = auxTransporte;
        this.horasExtras = horasExtras;
        this.comisiones = comisiones;
    //total devengado
    totalDevengado() {
        return this.salarioBasico + this.auxTransporte + this.horasExtras + this.comisiones;
    },

    salud() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    },

    pensiones() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    },

    totalDeducciones() {
        return this.salud() + this.pensiones();
    },

    netopagado() {
        return this.totalDevengado() - this.totalDeducciones();
    },

    aportesPorSalud() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.085;
    },

    aportesPorPension: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.12;
    },

    seguridadSocial: function() {
        return this.aportesPorSalud() + this.aportesPorPension();
    },

    cesantias: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.0833;
    },

    interesesCesantias: function() {
        return this.cesantias() * 0.12;
    },

    prima: function() {
        return this.totalDevengado() * 0.0833;
    },

    vaciones: function() {
        return this.salarioBasico * 0.0417;
    },

    cajaCompensacion: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    },

    icbf: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.03;
    },

    sena: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.02;
    },

    aportesParaFiscales: function() {
        return this.cajaCompensacion() + this.icbf() + this.sena();
    },

    riesgoprofesional: function() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.00522; // tarifariesgo
    },

    totalapropiado: function() {
        return this.cesantias() + this.interesesCesantias() + this.prima() + this.vaciones() + this.aportesParaFiscales() + this.riesgoprofesional();
    },

    grantotal: function() {
        return this.totalDevengado() - this.totalDeducciones() + this.totalapropiado();
    }
};


console.log("Nombre:", empleado1.nombre);
console.log("Total devengado:", empleado1.totalDevengado());
console.log("Total deducciones:", empleado1.totalDeducciones());
console.log("Neto pagado:", empleado1.netoPagado());
console.log("Gran total:", empleado1.granTotal());