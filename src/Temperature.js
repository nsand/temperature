export default class Temperature {
	static UNITS = {
		CELSIUS: 'c',
		FAHRENHEIT: 'f',
	}
	static F = (value) => {
		return new Temperature(value, Temperature.UNITS.FAHRENHEIT);
	}
	static C = (value) => {
		return new Temperature(value, Temperature.UNITS.CELSIUS);
	}
	constructor(value, unit=Temperature.UNITS.CELSIUS) {
		this.value = value;
		this.initialUnit = this.unit = unit;
	}
	valueOf() {
		if (this.unit === Temperature.UNITS.CELSIUS) {
			return this.asCelsius();
		}
		return this.asFahrenheit();
	}
	asCelsius() {
		return this.initialUnit === Temperature.UNITS.CELSIUS ? this.value : (this.value - 32) * 5 / 9;
	}
	asFahrenheit() {
		return this.initialUnit === Temperature.UNITS.FAHRENHEIT ? this.value : 9 / 5 * this.value + 32;
	}
	setUnit(unit=Temperature.UNITS.CELSIUS) {
		this.unit = unit;
	}
	toString() {
		return `${this.valueOf()} °${this.unit.toLocaleUpperCase()}`;
	}
}
