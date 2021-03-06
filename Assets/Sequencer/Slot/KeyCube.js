#pragma strict

private var vibe = 0.0;
private var spin = 0.0;
private var mesh : Transform;

static private var baseColors = [
	Color(1.0, 1.0, 1.0),		// Pentatonic
	Color(0.7, 1.0, 0.7),		// Diatonic
	Color(0.7, 1.0, 1.0),		// Pentatonic + IIV
	Color(0.7, 0.7, 1.0),		// Major blues
	Color(1.0, 1.0, 0.7)		// Ryukyu
];

function Awake() {
	mesh = transform.Find("Mesh");
}

function SetColor(scaleIndex : int, degree : int) {
	var brightness = (degree & 1) ? 0.7 : 0.9;
	mesh.renderer.material.color = baseColors[scaleIndex % baseColors.Length] * brightness;
}

function Update() {
	mesh.localRotation = Quaternion.AngleAxis(spin * 360.0, Vector3.up);
	mesh.localScale = Vector3.one * (1.0 + 0.2 * vibe * Mathf.Sin(40.0 * Time.time)) * (1.0 - 0.5 * spin);
	vibe = ExpEase.Out(vibe, 0.0, -8.0);
	spin = ExpEase.Out(spin, 0.0, -8.0);
}

function KeyOn() {
	vibe = 1.0;
}

function RemoveArpies() {
	vibe = 1.0;
	spin = 1.0;
}
