/*
* Very shallow class. This class simply helps keep
* separate the objects from the driver class.
*/
class cluelessBox {
	
  /*
  * Single parameter constructor will take in the size
  * of the box to be created. The boxes are intended to be uniform
  * so randomness is restricted to a narrow range of values
  * for RGB combinations.
  */
  constructor(sizeXYZ){
    this.size = sizeXYZ;
    
    this.R = random(60, 70);
    this.G = random(110, 140);
    this.B = random(150, 200);
  }
  
  // Simple display method called on each box inside the nested loop
	// in the draw() method of main class.
  display(){
    fill(this.R, this.G, this.B);
    box(this.sizeXYZ);
  }
}