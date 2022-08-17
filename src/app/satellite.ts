export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	
	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		return this.type === 'Space Debris'
   } 

   	numOfSat(): number {
		let numDebris = 0;
		for (let i=0; i<=this.type.length; i++) {
			if (this.type[i] === 'Space Debris') {
				numDebris =+ i;
			}
		}
		return (this.type.length - numDebris);
	}

// TODO 3a: fix isSpaceDebris check

}
