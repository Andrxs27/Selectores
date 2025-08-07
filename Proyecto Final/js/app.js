//Liquidar nomina

const empleadoData = {
    nombre: "JUAN PEREZ",
    salarioBasico: 1300000,
    auxTransporte: 97032,
    horasExtras: 0,
    comisiones: 100000

}
    
class Nomina {
    constructor(nombre, salarioBasico, auxTransporte, horasExtras, comisiones) {
        this.nombre = nombre;
        this.salarioBasico = salarioBasico;
        this.auxTransporte = auxTransporte;
        this.horasExtras = horasExtras;
        this.comisiones = comisiones;
    }

    totalDevengado() {
        return this.salarioBasico + this.auxTransporte + this.horasExtras + this.comisiones;
    }

    salud() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    }

    pensiones() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    }

    totalDeducciones() {
        return this.salud() + this.pensiones();
    }

    netoPagado() {
        return this.totalDevengado() - this.totalDeducciones();
    }

    aportesPorSalud() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.085;
    }

    aportesPorPension() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.12;
    }

    seguridadSocial() {
        return this.aportesPorSalud() + this.aportesPorPension();
    }

    cesantias() {
        return this.totalDevengado() * 0.0833;
    }

    interesesCesantias() {
        return this.cesantias() * 0.12;
    }

    prima() {
        return this.totalDevengado() * 0.0833;
    }

    vacaciones() {
        return this.salarioBasico * 0.0417;
    }

    cajaCompensacion() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.04;
    }

    icbf() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.03;
    }

    sena() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.02;
    }

    aportesParaFiscales() {
        return this.cajaCompensacion() + this.icbf() + this.sena();
    }

    riesgoProfesional() {
        return (this.salarioBasico + this.horasExtras + this.comisiones) * 0.00522; // tarifariesgo
    }

    totalApropiado() {
        return this.cesantias() + this.interesesCesantias() + this.prima() + this.vacaciones() + this.aportesParaFiscales() + this.riesgoProfesional();
    }

    granTotal() {
        return this.totalDevengado() + this.seguridadSocial() + this.totalApropiado();
    }
}


   

// Crear instancia de empleado
const empleado1 = new Nomina(empleadoData.nombre, empleadoData.salarioBasico, empleadoData.auxTransporte, empleadoData.horasExtras, empleadoData.comisiones);

console.log("Nombre:", empleado1.nombre);
console.log("Total devengado:", empleado1.totalDevengado());
console.log("salud:", empleado1.salud());
console.log("pensiones:", empleado1.pensiones());
console.log("total deducciones:", empleado1.totalDeducciones());
console.log("Neto pagado:", empleado1.netoPagado());
console.log("aportes por salud:", empleado1.aportesPorSalud());
console.log("aportes por pension:", empleado1.aportesPorPension());
console.log("Seguridad social:", empleado1.seguridadSocial());
console.log("Cesantias:", empleado1.cesantias());
console.log("Intereses cesantias:", empleado1.interesesCesantias());
console.log("Prima:", empleado1.prima());
console.log("Vacaciones:", empleado1.vacaciones());
console.log("Caja compensacion:", empleado1.cajaCompensacion());
console.log("ICBF:", empleado1.icbf());
console.log("SENA:", empleado1.sena());
console.log("Aportes parafiscales:", empleado1.aportesParaFiscales());
console.log("Riesgo profesional:", empleado1.riesgoProfesional());
console.log("Total apropiado:", empleado1.totalApropiado());
console.log("Gran total:", empleado1.granTotal());