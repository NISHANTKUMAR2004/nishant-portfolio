const canvas = document.getElementById("heroCanvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 4;

const geometry = new THREE.SphereGeometry(1.5, 64, 64);
const material = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.02 });
const sphere = new THREE.Points(geometry, material);

scene.add(sphere);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.002;
  sphere.rotation.x += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
