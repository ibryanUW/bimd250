/*
 * This class is used to build a cube on the screen that
 * can be interacted by clicking the objects that appear.
 * When the mouse is clicked, the object is removed from view.
 */
class coloredTorus {
  // Starting position of (0,0) by subtracting the distance from the
  // origin before translation.

  /*
   * Constructor takes in parameters for only the radius of the complete
   * structure, then the optional tubeRadius (inner empty space).
   */
  constructor(radius, tubeRadius) {
    this.radius = radius;
    this.tubeRadius = tubeRadius;
    
    // Some shades of green in RGB
    this.R = random(0, 70);
    this.G = random(150, 200);
    this.B = random(0, 15);

    // The following variables are generated using
    // Perlin noise() return function values. The result is little
    // noticeable difference in the origin of each Torus.
    this.translateX = (noise(0.001) * 1);
    this.translateY = (noise(0.001) * 1);
  }

  display() {

    // The following variables are composed of two products each.
    // Both variables use the same logic. The result is a 
    // float returned from the noise() function multiplied
    // by the global frame count since the program began and 
    // generating a medium speed.
    this.speedX = noise(0.001) * (frameCount * 0.01);
    this.speedY = noise(0.001) * (frameCount * 0.01);

    rotateX(this.speedX);
    rotateY(this.speedY);

    translate(this.translateX, this.translateY);

    fill(this.R, this.G, this.B);
    torus(this.radius, this.tubeRadius);

    // Adjusting the starting position of the next object.
    this.translateX += 0.1;
    this.translateY -= 0.1;
  }

  offTheRails() {
    return (this.translateX >= width || this.translateY >= height);
  }
}