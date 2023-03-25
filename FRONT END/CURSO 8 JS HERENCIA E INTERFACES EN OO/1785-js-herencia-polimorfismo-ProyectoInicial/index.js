/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {Cuenta} from './Cuentas/Cuenta.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo= new CuentaAhorro(cliente, "9985","001",0);

console.log("MOSTRANDO CUENTA")
console.log(cuentaDeLeonardo);
console.log("DEPOSITANDO");
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
console.log("RETIRANDO 70 quedan");
cuentaDeLeonardo.retirarDeCuenta(70)
console.log(cuentaDeLeonardo.verSaldo());

console.log("MOSTRANDO CUENTA AHORRO");
console.log(cuentaAhorroLeonardo);
console.log("DEPOSITANDO");
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
console.log("RETIRANDO 120 quedan");
cuentaAhorroLeonardo.retirarDeCuenta(120)
console.log(cuentaAhorroLeonardo.verSaldo());



const cuentaNominaLeonardo = new CuentaNomina(cliente, "1234", "001", 100);
console.log("nomina---------");
console.log(cuentaNominaLeonardo);

cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());

const empleado = new Empleado("JUAN", "13414134", 10000);
const gerente =  new Gerente("MARCOS", "12345666", 12000);
const director = new Director("JOSE", "73452324", 11000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
empleado.asignarClave("12345");


console.log(SistemaAutenticacion.login(empleado,"12345"));
gerente.asignarClave("1212");
console.log(SistemaAutenticacion.login(gerente,"1212"));
cliente.asignarClave("9999");
console.log(SistemaAutenticacion.login(cliente,"9999"))


const gerente1 = new Gerente('Pedro Rivas','232344',12000);
gerente1.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente1,'655'));

//const director = new Director('Elena Moreno','232323',15000);

const cliente1 = new Cliente('Leonardo','13804050','123224');
cliente1.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente1,'01111'));