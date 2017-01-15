import Temperature from './Temperature';

describe('Temperature', () => {
	it('should default to Celsius', () => {
		const temp = new Temperature(0);
		expect(temp.initialUnit).toBe(Temperature.UNITS.CELSIUS);
		expect(temp.unit).toBe(Temperature.UNITS.CELSIUS);
	});
	it('should be able to shortcut to fahrenheit', () => {
		const temp = Temperature.F(32);
		expect(temp.initialUnit).toBe(Temperature.UNITS.FAHRENHEIT);
		expect(temp.unit).toBe(Temperature.UNITS.FAHRENHEIT);
	});
	it('should be able to shortcut to celsius', () => {
		const temp = Temperature.C(0);
		expect(temp.initialUnit).toBe(Temperature.UNITS.CELSIUS);
		expect(temp.unit).toBe(Temperature.UNITS.CELSIUS);
	});
	it('should be able to change the unit to fahrenheit', () => {
		const temp = Temperature.C(0);
		expect(temp.valueOf()).toBe(0);
		temp.setUnit(Temperature.UNITS.FAHRENHEIT);
		expect(temp.valueOf()).toBe(32);
	});
	it('should be able to change the unit to celsius', () => {
		const temp = Temperature.F(32);
		expect(temp.valueOf()).toBe(32);
		temp.setUnit(Temperature.UNITS.CELSIUS);
		expect(temp.valueOf()).toBe(0);
	});
	it('should be able to get the temperature as a specified unit', () => {
		let temp = Temperature.F(32);
		expect(temp.asFahrenheit()).toBe(32);
		expect(temp.asCelsius()).toBe(0);
		temp = Temperature.C(0);
		expect(temp.asFahrenheit()).toBe(32);
		expect(temp.asCelsius()).toBe(0);
	});
	it('should always have a unit', () => {
		const temp = Temperature.F(32);
		temp.setUnit();
		expect(temp.unit).toBe(Temperature.UNITS.CELSIUS);
	});
	it('should show temperature as a string', () => {
		const temp = Temperature.C(100);
		expect(temp.toString()).toBe('100 °C');
	});
});
